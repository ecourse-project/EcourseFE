/* eslint-disable @next/next/no-img-element */
import { isEqual } from 'lodash';
import Link from 'next/link';
import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DefaultClassImg from 'src/assets/images/class.jpg';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { docActions } from 'src/lib/reducers/document/documentSlice';
import { Class, Document, MoveEnum, RequestStatus } from 'src/lib/types/backend_modal';
import { SaleStatusEnum } from 'src/lib/utils/enum';
import RoutePaths from 'src/lib/utils/routes';
import { checkAccountPermission } from 'src/lib/utils/utils';
import { DocumentParams } from 'src/sections/Pages/DocumentUI';
/* eslint-disable react/prop-types */
import { css } from '@emotion/react';

import AppButton from '../button';
import { ItemDocCourseWrapper } from './style';
import { useRouter } from 'next/router';

interface ChildProps {
  document?: Document | undefined; // try not to use any.
  isMyLearn?: boolean;
  classItem: Class;
}
export enum BtnString {
  AVAILABLE = 'YÊU CẦU THAM GIA',
  REQUESTED = 'HUỶ YÊU CẦU',
  ACCEPTED = 'VÀO HỌC',
}
enum Color {
  AVAILABLE = '#0dcaf0',
  REQUESTED = '#ed5e68',
  ACCEPTED = '#23c501',
}

const ClassItem: React.FC<ChildProps> = memo((props) => {
  const { isMyLearn, classItem } = props;
  const [btnString, setBtnString] = useState<string>(BtnString.AVAILABLE);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentDoc, setCurrentDoc] = useState<Document>({} as Document);
  const [currentClassItem, setCurrentClassItem] = useState<Class>(classItem);
  const params: DocumentParams = useQueryParam();
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (currentClassItem.request_status === RequestStatus.AVAILABLE) {
      setBtnString(BtnString.AVAILABLE);
    } else if (currentClassItem.request_status === RequestStatus.REQUESTED) {
      setBtnString(BtnString.REQUESTED);
    } else if (currentClassItem.request_status === RequestStatus.ACCEPTED) {
      setBtnString(BtnString.ACCEPTED);
    }
  }, [currentClassItem]);

  const handleRequestJoin = async () => {
    checkAccountPermission();
    if (currentClassItem.request_status === RequestStatus.ACCEPTED) {
      router.push(`${RoutePaths.COURSE_PROGRESS}?id=${currentClassItem?.course.id}`);
    } else {
      setLoading(true);
      try {
        const request = await CourseService.requestJoinClass(currentClassItem.id);

        setCurrentClassItem((prev) => ({ ...prev, request_status: request.request_status }));
      } catch (error) {
        console.log('error update class', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }
  };

  const handleAddFav = async () => {
    try {
      setTimeout(async () => {
        if (currentDoc.is_favorite) {
          const removeFromFav: Document = await CourseService.moveDoc(currentDoc.id, MoveEnum.FAVORITE, MoveEnum.LIST);
          dispatch(docActions.setIsFavourite(removeFromFav));
          setCurrentDoc(removeFromFav);
        } else {
          const addToFav: Document = await CourseService.moveDoc(currentDoc.id, MoveEnum.LIST, MoveEnum.FAVORITE);
          dispatch(docActions.setIsFavourite(addToFav));
          setCurrentDoc(addToFav);
        }
      }, 500);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ItemDocCourseWrapper
      css={css`
        .card-btn {
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
      `}
    >
      <div className="pop-up">
        <Link href={`${RoutePaths.CLASS_DETAIL}?id=${currentClassItem?.id}`}>
          <div className="doc--image">
            <img
              className="doc-img"
              src={`${currentClassItem?.course?.thumbnail?.image_path || DefaultClassImg.src}`}
              alt="class image."
            />
          </div>

          <div className="doc_info">
            <div className="title">{currentClassItem.name}</div>
          </div>
        </Link>
      </div>

      <div>
        {!isMyLearn && (
          <AppButton
            className="card-btn"
            btnTextColor={'black'}
            btnStyle={'outline'}
            btnSize={'small'}
            btnWidth={'full-w'}
            loading={loading}
            disabled={loading}
            onClick={(e) => {
              e.stopPropagation();
              handleRequestJoin();
            }}
          >
            {btnString}
          </AppButton>
        )}
      </div>
    </ItemDocCourseWrapper>
  );
}, isEqual);

export default ClassItem;
