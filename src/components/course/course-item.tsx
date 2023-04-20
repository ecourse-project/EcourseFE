import { Popover } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DefaultClassImg from 'src/assets/images/class.jpg';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { courseAction } from 'src/lib/reducers/course/courseSlice';
import { Course, MoveEnum, RequestStatus } from 'src/lib/types/backend_modal';
import { formatCurrency } from 'src/lib/utils/currency';
import { BtnString, Color, SaleStatusEnum } from 'src/lib/utils/enum';
import { formatDate } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';
import { checkAccountPermission } from 'src/lib/utils/utils';
import { CourseClassParams } from 'src/sections/Pages/CourseUI';

import { WalletOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

import AppButton from '../button';
import { ItemDocCourseWrapper } from '../document/style';

interface ChildProps {
  course: Course;
  isMyLearn?: boolean;
}

const CourseItem: React.FC<ChildProps> = (props) => {
  // eslint-disable-next-line prefer-const
  const { course, isMyLearn } = props;
  const [btnString, setBtnString] = useState<string>(BtnString.AVAILABLE);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentCourse, setCurrentCourse] = useState<Course>(course);
  const params: CourseClassParams = useQueryParam();
  const dispatch = useDispatch();
  const route = useRouter();
  useEffect(() => {
    if (params.class) {
      if (currentCourse.request_status === RequestStatus.REQUESTED) {
        setBtnString(BtnString.REQUESTED);
      } else if (currentCourse.request_status === RequestStatus.AVAILABLE) {
        setBtnString(BtnString.AVAILABLE_REQUEST);
      } else if (currentCourse.request_status === RequestStatus.ACCEPTED) {
        setBtnString(BtnString.ACCEPTED);
      }
    } else if (params.course) {
      if (currentCourse.sale_status === SaleStatusEnum.AVAILABLE) {
        setBtnString(BtnString.AVAILABLE);
      } else if (currentCourse.sale_status === SaleStatusEnum.IN_CART) {
        setBtnString(BtnString.IN_CART);
      } else if (currentCourse.sale_status === SaleStatusEnum.PENDING) {
        setBtnString(BtnString.PENDING);
      } else if (currentCourse.sale_status === SaleStatusEnum.BOUGHT) {
        setBtnString(BtnString.BOUGHT);
      }
    }
  }, [currentCourse]);

  useEffect(() => {
    setCurrentCourse(course);
  }, [course]);

  const handleClick = async () => {
    if (currentCourse.request_status === RequestStatus.ACCEPTED) {
      route.push(`${RoutePaths.COURSE_PROGRESS}?id=${currentCourse.id}&isClass=${params.class ? 'true' : 'false'}`);
    }
    checkAccountPermission();
    setLoading(true);
    try {
      if (params.class) {
        if (currentCourse.request_status !== RequestStatus.ACCEPTED) {
          const reuqestClass = await CourseService.requestJoinClass(currentCourse.id);
          setTimeout(() => {
            setCurrentCourse((prev) => ({ ...prev, request_status: reuqestClass.request_status }));
          }, 300);
        }
      } else if (params.course) {
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
        .class-btn {
          letter-spacing: 0;
          &:hover {
            letter-spacing: 0.5px;
            font-weight: 600;
          }
          &:focus {
            letter-spacing: 0.5px;
            font-weight: 600;
          }
          &:active {
            letter-spacing: 0.5px;
            font-weight: 600;
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
            {/* <p className="heart" onClick={() => handleAddFav(currentCourse.id)}>
              {currentCourse.is_favorite ? <HeartFilled /> : <HeartOutlined />}
            </p> */}
          </div>
        }
        trigger="hover"
      >
        <Link
          href={`${params.course ? RoutePaths.COURSE_DETAIL : params.class ? RoutePaths.CLASS_DETAIL : ''}?id=${
            currentCourse.id
          }`}
        >
          <div className="doc--image">
            <img
              className="doc-img"
              src={`${currentCourse?.thumbnail?.image_path || DefaultClassImg.src}`}
              alt="course_image."
            />
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
        {!params.class ? (
          <div className="price-tag">
            <span>
              <WalletOutlined />
              {formatCurrency(currentCourse.price || 0)}
            </span>

            {/* {currentCourse.sale_status === SaleStatusEnum.BOUGHT && <TaskAltIcon sx={{ color: `${Color.BOUGHT}` }} />} */}
          </div>
        ) : (
          <></>
        )}
        {!isMyLearn && (
          <AppButton
            className="card-btn class-btn"
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
