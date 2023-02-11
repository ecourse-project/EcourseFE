import { Popover, Tag } from 'antd';
import { isEqual } from 'lodash';
import Link from 'next/link';
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { docActions } from 'src/lib/reducers/document/documentSlice';
import { RootState } from 'src/lib/reducers/model';
import { Document, MoveEnum } from 'src/lib/types/backend_modal';
import { formatCurrencySymbol } from 'src/lib/utils/currency';
import { GlobalStyle, SaleStatusEnum } from 'src/lib/utils/enum';
import { formatDate } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';
import { checkAccountPermission } from 'src/lib/utils/utils';
import { DocumentParams } from 'src/sections/Pages/DocumentUI';

/* eslint-disable react/prop-types */
import {
  EyeFilled,
  HeartFilled,
  HeartOutlined,
  LikeFilled,
  VerticalAlignBottomOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Rating from '@mui/material/Rating';

import AppButton from '../button';

interface ChildProps {
  document: Document; // try not to use any.
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

const DocItem: React.FC<ChildProps> = memo((props) => {
  const { document, isMyLearn } = props;
  const [added, setAdded] = useState(false);
  const [btnString, setBtnString] = useState<string>(BtnString.AVAILABLE);
  const cartData = useSelector((state: RootState) => state.document);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentDoc, setCurrentDoc] = useState<Document>(document);
  const [isFav, setIsFav] = useState<boolean>(document?.is_favorite || false);
  const params: DocumentParams = useQueryParam();
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
      // console.log('currentDoc2 :>> ', currentDoc);
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
    setLoading(true);
    setTimeout(async () => {
      try {
        if (currentDoc.is_favorite) {
          const removeFromFav: Document = await CourseService.moveDoc(currentDoc.id, MoveEnum.FAVORITE, MoveEnum.LIST);
          dispatch(docActions.setIsFavourite(removeFromFav));
          setCurrentDoc(removeFromFav);
        } else {
          const addToFav: Document = await CourseService.moveDoc(currentDoc.id, MoveEnum.LIST, MoveEnum.FAVORITE);
          dispatch(docActions.setIsFavourite(addToFav));
          setCurrentDoc(addToFav);
        }
      } catch (error) {
        console.log('error', error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div
      className="container"
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        min-height: 100%;
        max-width: 260px;

        .title,
        p {
          color: black;
          margin-bottom: 6px;
        }
        .title {
          display: block !important;
          display: -webkit-box !important;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
          margin: 0.5rem 0;
          font-family: 'Montserrat';
          text-align: left;
          font-size: 17px;
          font-weight: 600;
          height: 40px;
        }
        .description {
          text-align: left;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          color: gray;
          white-space: normal;
        }
        @media only screen and (min-width: 1200px) {
          .ant-btn[disabled] {
            letter-spacing: 2px;
          }
        }
        @media only screen and (max-width: 1200px) {
          .ant-btn[disabled] {
            letter-spacing: 0px;
          }
        }
        .download {
          font-weight: 400;
          & .rate-score {
            color: #b4690e;
            font-weight: 700;
          }
        }

        .doc--image {
          max-width: 100%;
          margin-bottom: 10px;
          .doc-img {
            width: 240px;
            height: 151px;
            aspect-ratio: auto 240 / 135;
          }
        }
        .doc_info {
          margin: 0 10px;
        }
        .anticon {
          position: relative;
          bottom: 3px;
          right: 6px;
          color: ${GlobalStyle.BROWN_YELLOW};
        }
        .anticon-star {
          color: unset;
          position: unset;
        }
        .card-btn {
          width: 100%;
          color: #000;
          border-color: #000;
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
        .price-tag {
          display: flex;
          justify-content: left;
          font-weight: 600;
          font-size: 22px;
          margin-left: 10px;
          align-items: center;
        }
        .doc-info {
          margin: 0 10px;
        }
        [ant-click-animating-without-extra-node='true']:after {
          display: none;
        }
        .ant-click-animating-node {
          display: none;
        }
        .ant-rate {
          font-size: 14px;
          margin: 0 10px;
          color: #ffa535;
          .ant-rate-star {
            margin: 0;
          }
        }
        button[disabled] {
          cursor: not-allowed;
        }
      `}
    >
      <div className="pop-up">
        <Popover
          placement="right"
          content={
            <div
              css={css`
                max-width: 300px;
                .title {
                  font-weight: 700;
                  font-size: 15px;
                }
                .heart {
                  font-size: 40px;
                  margin-left: 10px;
                  .anticon {
                    color: ${document.is_favorite ? 'red' : ''};
                  }
                  .anticon:hover {
                    color: red;
                    cursor: pointer;
                  }
                }
              `}
            >
              <p className="title">{document.name}</p>

              <Tag color="geekblue">Best Seller</Tag>
              <p>Cập nhật: {formatDate(document.created)}</p>
              <p>Dung lượng: {(Number(document?.file?.file_size) / 1024000).toFixed(1)} MB</p>

              <p>{document.description}</p>
              <p className="heart" onClick={() => handleAddFav()}>
                {currentDoc.is_favorite ? <HeartFilled /> : <HeartOutlined />}
              </p>
            </div>
          }
          trigger="hover"
        >
          <Link href={`${RoutePaths.DOCUMENT_DETAIL}?document=${params?.document}&id=${document.id}`}>
            <div className="doc--image">
              <img className="doc-img" src={`${document.thumbnail.image_path}`} alt="doc image." />
            </div>

            <div className="doc_info">
              {' '}
              <div className="title">{document.name}</div>
              <p className="download">
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
                {/* <Rate defaultValue={Number(Number(document.rating).toFixed(1))} allowHalf disabled /> */}
                <span>
                  <Rating
                    name="size-large"
                    defaultValue={Number(Number(document.rating).toFixed(1))}
                    size="small"
                    readOnly
                    style={{ padding: '0 5px' }}
                    // emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                  />
                </span>

                {`(${document.num_of_rates})`}
              </p>
            </div>
          </Link>
          <div className="price-tag">
            <span>
              <WalletOutlined />
              {formatCurrencySymbol(document.price, 'VND')}
            </span>

            {document.sale_status === SaleStatusEnum.BOUGHT && <TaskAltIcon sx={{ color: `${Color.BOUGHT}` }} />}
          </div>
        </Popover>
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
    </div>
  );
}, isEqual);

export default DocItem;
