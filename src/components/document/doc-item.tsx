/* eslint-disable @next/next/no-img-element */
import { Popover } from 'antd';
import { isEqual } from 'lodash';
import Link from 'next/link';
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { docActions } from 'src/lib/reducers/document/documentSlice';
import { RootState } from 'src/lib/reducers/model';
import { Document, MoveEnum } from 'src/lib/types/backend_modal';
import { SaleStatusEnum } from 'src/lib/utils/enum';
import { formatDate } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';
import { checkAccountPermission } from 'src/lib/utils/utils';
import { DocumentParams } from 'src/sections/Pages/DocumentUI';

/* eslint-disable react/prop-types */
import { css } from '@emotion/react';

import IconChecked from 'src/assets/icons/IconChecked';
import DefaultDocImage from 'src/assets/images/docDefault.jpg';
import globalVariable from 'src/lib/config/env';
import AppButton from '../button';
import { ItemDocCourseWrapper } from './style';

interface ChildProps {
  document: Document; // try not to use any.
  isMyLearn?: boolean;
  className?: string;
  isSearch?: boolean;
}
enum BtnString {
  AVAILABLE = 'THÊM',
  IN_CART = 'XOÁ',
  PENDING = 'ĐANG DUYỆT',
  BOUGHT = 'ĐÃ DUYỆT',
}
enum Color {
  AVAILABLE = '#0dcaf0',
  IN_CART = '#ed5e68',
  PENDING = '#8c8c8c',
  BOUGHT = '#23c501',
}

const DocItem: React.FC<ChildProps> = memo((props) => {
  const { document, isMyLearn, className, isSearch } = props;
  const [btnString, setBtnString] = useState<string>(BtnString.AVAILABLE);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentDoc, setCurrentDoc] = useState<Document>(document);
  // const [isFav, setIsFav] = useState<boolean>(document?.is_favorite || false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentDoc.sale_status === SaleStatusEnum.AVAILABLE) {
      setBtnString(BtnString.AVAILABLE);
    } else if (currentDoc.sale_status === SaleStatusEnum.IN_CART) {
      setBtnString(BtnString.IN_CART);
    } else if (currentDoc.sale_status === SaleStatusEnum.PENDING) {
      setBtnString(BtnString.PENDING);
    } else if (currentDoc.sale_status === SaleStatusEnum.BOUGHT) {
      setBtnString(BtnString.BOUGHT);
    }
  }, [currentDoc]);

  const handleUpdateDoc = async () => {
    checkAccountPermission();
    setLoading(true);
    try {
      if (currentDoc.sale_status === SaleStatusEnum.AVAILABLE) {
        const addTo: Document = await CourseService.moveDoc(currentDoc.id, MoveEnum.LIST, MoveEnum.CART);
        setTimeout(() => {
          setCurrentDoc(addTo);
        }, 300);
      } else if (currentDoc.sale_status === SaleStatusEnum.IN_CART) {
        const removeFrom: Document = await CourseService.moveDoc(currentDoc.id, MoveEnum.CART, MoveEnum.LIST);
        setTimeout(() => {
          setCurrentDoc(removeFrom);
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
  useEffect(() => {
    setCurrentDoc(document);
  }, [document]);

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
          &:hover {
            border-color: ${btnString === BtnString.AVAILABLE ? Color.AVAILABLE : Color.IN_CART};
            color: ${btnString === BtnString.AVAILABLE ? Color.AVAILABLE : Color.IN_CART};
            letter-spacing: 8px;
            transition: all 0.5s ease;
          }
        }

        .anticon-loading {
          font-size: 18px;
          color: ${btnString === BtnString.AVAILABLE ? Color.AVAILABLE : Color.IN_CART};
        }
      `}
      className={className}
    >
      <div className="pop-up">
        <Popover
          placement="right"
          content={
            <div
              css={css`
                max-width: 300px;
                min-width: 200px;
                .title {
                  font-weight: 700;
                  font-size: 15px;
                }
                .heart {
                  font-size: 40px;
                  margin-left: 10px;
                  .anticon {
                    color: ${currentDoc.is_favorite ? 'red' : ''};
                  }
                  .anticon:hover {
                    color: red;
                    cursor: pointer;
                    transition: all 1s ease;
                  }
                }
              `}
            >
              <p className="title">{document.name}</p>

              {/* <Tag color="geekblue">Best Seller</Tag> */}
              <p>Cập nhật: {formatDate(document?.modified)}</p>
              {/* <p>Dung lượng: {(Number(document?.file?.file_size) / 1024000).toFixed(1)} MB</p> */}
              <p>Dung lượng: {document?.file?.file_size} KB</p>

              <p>{document.description}</p>
              {/* <p className="heart" onClick={() => handleAddFav()}>
                {currentDoc.is_favorite ? <HeartFilled /> : <HeartOutlined />}
              </p> */}
            </div>
          }
          trigger="hover"
        >
          <Link href={`${RoutePaths.DOCUMENT}/${document.id}`} className="detail">
            <div className="doc--image">
              <img
                className="doc-img"
                src={`${document?.thumbnail?.image_path || DefaultDocImage.src}`}
                alt="doc image."
              />
              {/* <Image
                // className="doc-img"
                src={`${document?.thumbnail?.image_path || DefaultDocImage.src}`}
                alt="doc_image"
                width={200}
                height={130}
              /> */}
            </div>

            <div className="doc_info">
              <div className="title">{document.name}</div>
              {isSearch && <p>Cập nhật: {formatDate(document?.modified)}</p>}
              {(document as any)?.author && <div className="author">Tác giả: {(document as any)?.author}</div>}
              {isSearch && document.description}
              {/* <p className="download">
                <VerticalAlignBottomOutlined />
                Số lượt tải: {document.sold}
              </p>
              <p className="download">
                <EyeFilled />
                Số lượt xem: {document.views}
              </p>
              <p className="download">
                <LikeFilled />
                <span className="rate-score">{Number(document?.rating).toFixed(1)}</span>
                <span>
                  <Rating
                    name="size-large"
                    defaultValue={Number(Number(document.rating).toFixed(1))}
                    size="small"
                    readOnly
                    style={{ padding: '0 5px' }}
                  />
                </span>

                {`(${document.num_of_rates})`}
              </p> */}
            </div>
          </Link>
        </Popover>
      </div>

      <div>
        <div className="contact-us">
          <Link href={globalVariable.GMAIL_URL} target="_blank">
            {/* <WalletOutlined />
              {formatCurrency(currentCourse.price || 0)} */}
            Liên hệ
          </Link>

          {document.sale_status === SaleStatusEnum.BOUGHT && <IconChecked />}
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
              currentDoc.sale_status === SaleStatusEnum.PENDING ||
              currentDoc.sale_status === SaleStatusEnum.BOUGHT ||
              loading
            }
            onClick={(e) => {
              e.stopPropagation();
              handleUpdateDoc();
            }}
          >
            {btnString}
          </AppButton>
        )}
      </div>
    </ItemDocCourseWrapper>
  );
}, isEqual);

export default DocItem;
