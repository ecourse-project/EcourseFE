import { Popover } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DefaultCourseImage from 'src/assets/images/online-course.png';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { courseAction } from 'src/lib/reducers/course/courseSlice';
import { Course, MoveEnum, RequestStatus } from 'src/lib/types/backend_modal';
import { BtnString, Color, SaleStatusEnum } from 'src/lib/utils/enum';
import { formatDate } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';
import { checkAccountPermission } from 'src/lib/utils/utils';
import { CourseClassParams } from 'src/sections/Pages/CourseUI';

import { css } from '@emotion/react';

import IconChecked from 'src/assets/icons/IconChecked';
import globalVariable from 'src/lib/config/env';
import AppButton from '../button';
import { ItemDocCourseWrapper } from '../document/style';

interface ChildProps {
  course: Course;
  isMyLearn?: boolean;
  className?: string;
  isSearch?: boolean;
}

const CourseItem: React.FC<ChildProps> = (props) => {
  // eslint-disable-next-line prefer-const
  const { course, isMyLearn, className, isSearch } = props;
  const [btnString, setBtnString] = useState<string>(BtnString.AVAILABLE);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentCourse, setCurrentCourse] = useState<Course>(course);
  const params: CourseClassParams = useQueryParam();
  const dispatch = useDispatch();
  const route = useRouter();
  useEffect(() => {
    if (currentCourse.course_of_class && !currentCourse.request_status) {
      setBtnString(BtnString.AVAILABLE_REQUEST);
    } else if (currentCourse.request_status === RequestStatus.REQUESTED) {
      setBtnString(BtnString.REQUESTED);
    } else if (currentCourse.request_status === RequestStatus.AVAILABLE) {
      setBtnString(BtnString.AVAILABLE_REQUEST);
    } else if (currentCourse.request_status === RequestStatus.ACCEPTED) {
      setBtnString(BtnString.BOUGHT);
    }
    // } else {
    if (currentCourse.sale_status === SaleStatusEnum.AVAILABLE) {
      setBtnString(BtnString.AVAILABLE);
    } else if (currentCourse.sale_status === SaleStatusEnum.IN_CART) {
      setBtnString(BtnString.IN_CART);
    } else if (currentCourse.sale_status === SaleStatusEnum.PENDING) {
      setBtnString(BtnString.PENDING);
    } else if (currentCourse.sale_status === SaleStatusEnum.BOUGHT) {
      setBtnString(BtnString.BOUGHT);
    }
    // }
  }, [currentCourse]);

  useEffect(() => {
    setCurrentCourse(course);
  }, [course]);
  const handleClick = async () => {
    if (
      (currentCourse?.course_of_class && currentCourse.request_status === RequestStatus.ACCEPTED) ||
      currentCourse.sale_status === SaleStatusEnum.BOUGHT
    ) {
      route.push(`${RoutePaths.COURSE_PROGRESS}?id=${currentCourse.id}&isClass=${params.isClass ? 'true' : 'false'}`);
    }
    checkAccountPermission();
    setLoading(true);
    try {
      if (currentCourse.request_status && currentCourse.request_status !== RequestStatus.ACCEPTED) {
        const reuqestClass = await CourseService.requestJoinClass(currentCourse.id);
        setTimeout(() => {
          setCurrentCourse((prev) => ({ ...prev, request_status: reuqestClass.request_status }));
        }, 300);
        return;
      }
      if (currentCourse.sale_status && currentCourse.sale_status === SaleStatusEnum.AVAILABLE) {
        const addTo: Course = await CourseService.moveCourse(currentCourse.id, MoveEnum.LIST, MoveEnum.CART);
        setCurrentCourse(addTo);
      } else if (currentCourse.sale_status && currentCourse.sale_status === SaleStatusEnum.IN_CART) {
        const removeFrom: Course = await CourseService.moveCourse(currentCourse.id, MoveEnum.CART, MoveEnum.LIST);
        setCurrentCourse(removeFrom);
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
      className={className}
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
        <Link href={`${params.isClass ? RoutePaths.CLASS : RoutePaths.COURSE}/${currentCourse.id}`} className="detail">
          <div className="doc--image">
            <img
              className="doc-img"
              src={`${currentCourse?.thumbnail?.image_path || DefaultCourseImage.src}`}
              alt="course_image"
            />

            {/* <Image
              // className="doc-img"
              src={`${currentCourse?.thumbnail?.image_path || DefaultCourseImage.src}`}
              alt="course_image."
              width={200}
              height={130}
            /> */}
          </div>
          <div className="doc_info">
            <div>
              <h4 className="title">{currentCourse.name}</h4>
              {isSearch && <p>Cập nhật: {formatDate(currentCourse?.modified)}</p>}
            </div>
            {(currentCourse as any)?.author && <div className="author">Tác giả: {(currentCourse as any)?.author}</div>}
            {isSearch && currentCourse.description}
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
        <div className="contact-us">
          <Link href={globalVariable.GMAIL_URL} target="_blank">
            {/* <WalletOutlined />
              {formatCurrency(currentCourse.price || 0)} */}
            Liên hệ
          </Link>

          {currentCourse.sale_status === SaleStatusEnum.BOUGHT && <IconChecked />}
        </div>

        {!isMyLearn && !isSearch && (
          <AppButton
            className="card-btn class-btn"
            btnTextColor={'black'}
            btnStyle={'outline'}
            btnSize={'small'}
            btnWidth={'full-w'}
            loading={loading}
            disabled={loading || currentCourse.sale_status === SaleStatusEnum.PENDING}
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
