import { Popover } from 'antd';
import Link from 'next/link';
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseService from 'src/lib/api/course';
import { courseAction } from 'src/lib/reducers/course/courseSlice';
import { RootState } from 'src/lib/reducers/model';
import { Course, MoveEnum } from 'src/lib/types/backend_modal';
import { formatCurrency } from 'src/lib/utils/currency';
import { SaleStatusEnum } from 'src/lib/utils/enum';
import { formatDate } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';
import { checkAccountPermission } from 'src/lib/utils/utils';

import {
  EyeOutlined,
  HeartFilled,
  HeartOutlined,
  LikeOutlined,
  VerticalAlignBottomOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Rating from '@mui/material/Rating';

import AppButton from '../button';
import { ItemDocCourseWrapper } from '../document/style';

interface ChildProps {
  course: Course;
  isMyLearn?: boolean;
}
enum BtnString {
  AVAILABLE = 'THÊM',
  IN_CART = 'XOÁ',
  PENDING = 'CHỜ THANH TOÁN',
  BOUGHT = 'ĐÃ THANH TOÁN',
}
enum Color {
  AVAILABLE = '#0dcaf0',
  IN_CART = '#ed5e68',
  PENDING = '#8c8c8c',
  BOUGHT = '#23c501',
}
const CourseItem: React.FC<ChildProps> = (props) => {
  // eslint-disable-next-line prefer-const
  const { course, isMyLearn } = props;
  const [added, setAdded] = useState(false);
  const [btnString, setBtnString] = useState<string>(BtnString.AVAILABLE);
  const cartData = useSelector((state: RootState) => state.course);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentCourse, setCurrentCourse] = useState<Course>(course);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentCourse.sale_status === SaleStatusEnum.AVAILABLE) {
      setBtnString(BtnString.AVAILABLE);
    } else if (currentCourse.sale_status === SaleStatusEnum.IN_CART) {
      setBtnString(BtnString.IN_CART);
    } else if (currentCourse.sale_status === SaleStatusEnum.PENDING) {
      setBtnString(BtnString.PENDING);
    } else if (currentCourse.sale_status === SaleStatusEnum.BOUGHT) {
      setBtnString(BtnString.BOUGHT);
    }
  }, [currentCourse]);

  useEffect(() => {
    setCurrentCourse(course);
  }, [course]);
  const handleClick = async () => {
    checkAccountPermission();
    setLoading(true);
    try {
      if (currentCourse.sale_status === SaleStatusEnum.AVAILABLE) {
        const addTo: Course = await CourseService.moveCourse(currentCourse.id, MoveEnum.LIST, MoveEnum.CART);
        setTimeout(() => {
          setCurrentCourse(addTo);
        }, 300);
      } else if (currentCourse.sale_status === SaleStatusEnum.IN_CART) {
        const removeFrom: Course = await CourseService.moveCourse(currentCourse.id, MoveEnum.CART, MoveEnum.LIST);
        setTimeout(() => {
          setCurrentCourse(removeFrom);
        }, 300);
      }
    } catch (error) {
      console.log('error update cart', error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };
  const handleAddFav = async (id) => {
    setLoading(true);
    setTimeout(async () => {
      try {
        if (currentCourse.is_favorite) {
          const removeFromFav: Course = await CourseService.moveCourse(id, MoveEnum.FAVORITE, MoveEnum.LIST);
          dispatch(courseAction.setIsFavourite(removeFromFav));
          setCurrentCourse(removeFromFav);
        } else {
          const addToFav: Course = await CourseService.moveCourse(id, MoveEnum.LIST, MoveEnum.FAVORITE);
          dispatch(courseAction.setIsFavourite(addToFav));
          setCurrentCourse(addToFav);
        }
      } catch (error) {
        console.log('error :>> ', error);
        setLoading(false);
      }
    }, 300);
  };
  return (
    <ItemDocCourseWrapper
      css={css`
        .card-btn {
          &:hover {
            border-color: ${btnString === BtnString.AVAILABLE ? Color.AVAILABLE : Color.IN_CART};
            color: ${btnString === BtnString.AVAILABLE ? Color.AVAILABLE : Color.IN_CART};
            letter-spacing: 8px;
          }
        }

        .anticon-loading {
          font-size: 18px;
          color: ${btnString === BtnString.AVAILABLE ? Color.AVAILABLE : Color.IN_CART};
        }
      `}
    >
      <Popover
        placement="right"
        content={
          <div
            css={css`
              max-width: 300px;
              .title-popup {
                font-weight: 700;
                font-size: 15px;
              }
              .heart {
                font-size: 40px;
                margin-left: 10px;
                .anticon {
                  color: ${currentCourse.is_favorite ? 'red' : ''};
                }
                .anticon:hover {
                  color: red;
                  cursor: pointer;
                }
              }
            `}
          >
            <p className="title-popup">{currentCourse.name}</p>

            {/* <Tag color="geekblue">Best Seller</Tag> */}
            <p>Cập nhật: {formatDate(currentCourse?.modified)}</p>
            <p>Số bài học: {currentCourse?.lessons?.length}</p>
            {/* <p>
							Dung lượng: {(Number(currentCourse.) / 1024000).toFixed(1)}{' '}
						MB
						</p> */}

            <p>{currentCourse.description}</p>
            <p className="heart" onClick={() => handleAddFav(currentCourse.id)}>
              {currentCourse.is_favorite ? <HeartFilled /> : <HeartOutlined />}
            </p>
          </div>
        }
        trigger="hover"
      >
        <Link href={`${RoutePaths.COURSE_DETAIL}?id=${currentCourse.id}`}>
          <div className="doc--image">
            <img className="doc-img" src={`${currentCourse?.thumbnail?.image_path}`} alt="document image." />
          </div>
          <div className="doc_info">
            <div>
              <h4 className="title">{currentCourse.name}</h4>
            </div>
            {/* <p className="download">
              <VerticalAlignBottomOutlined />
              Số lượt tải: {currentCourse.sold}
            </p>
            <p className="download">
              <EyeOutlined />
              Số lượt xem: {currentCourse.views}
            </p>
            <p className="download">
              <LikeOutlined />
              <span className="rate-score">{Number(currentCourse?.rating).toFixed(1)}</span>
              <Rating
                name="size-large"
                defaultValue={Number(Number(currentCourse.rating).toFixed(1))}
                size="small"
                readOnly
                style={{ padding: '0 5px' }}
              />
              {`(${currentCourse.num_of_rates})`}
            </p> */}
          </div>
        </Link>
      </Popover>
      <div>
        <div className="price-tag">
          <span>
            <WalletOutlined />
            {formatCurrency(currentCourse.price || 0)}
          </span>

          {currentCourse.sale_status === SaleStatusEnum.BOUGHT && <TaskAltIcon sx={{ color: `${Color.BOUGHT}` }} />}
        </div>
        {!isMyLearn && (
          <AppButton
            className="card-btn"
            btnTextColor={'black'}
            btnStyle={'outline'}
            btnSize={'small'}
            btnWidth={'full-w'}
            loading={loading}
            disabled={
              loading ||
              currentCourse.sale_status === SaleStatusEnum.PENDING ||
              currentCourse.sale_status === SaleStatusEnum.BOUGHT
            }
            onClick={handleClick}
          >
            {btnString}
          </AppButton>
        )}
      </div>
    </ItemDocCourseWrapper>
  );
};

export default CourseItem;
