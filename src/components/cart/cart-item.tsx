import { Spin } from 'antd';
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Course, Document, NavTypeEnum } from 'src/lib/types/backend_modal';

import { DeleteOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

interface ChildProps {
  document?: Document;
  course?: Course;
  isDeleteBtn?: boolean;
  onDelete?: (id: string, type: NavTypeEnum) => void;
}
const CartItemRow: React.FC<ChildProps> = ({ document, course, isDeleteBtn = true, onDelete }) => {
  const [deleteLoading, setDeletetLoading] = useState<boolean>(false);

  const deleteDoc = async () => {
    document && onDelete && onDelete(document?.id, NavTypeEnum.DOCUMENT);
  };
  const deleteCourse = () => {
    course && onDelete && onDelete(course?.id, NavTypeEnum.COURSE);
  };

  return (
    <div
      className="container"
      css={css`
        width: 100%;
        .document-item {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          .document-content {
            display: flex;
          }
        }
        .description {
          text-align: left;
          max-width: 80%;
          padding: 0 20px;
          .doc-name {
            font-size: 16px;
            text-decoration: underline;
          }
          .description-content {
            font-size: 15px;
            text-align: left;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .thumb {
          objectfit: 'cover';
          margin: 10px;
          border-radius: 5px;
        }

        .price-group {
          display: flex;
          align-items: center;
          justify-content: end;
          min-width: fit-content;
          position: relative;
          font-size: 20px;
          margin-bottom: 10px;

          .price {
            margin: 10px;
            .anticon-tag {
              position: absolute;

              left: -10%;
              bottom: 23%;
            }
          }
          .anticon-delete {
            &:hover {
              font-size: 22px;
              color: red;
            }
          }
        }
      `}
    >
      {document && !course && (
        <div className="document-item">
          <div className="document-content">
            <img
              className="thumb"
              src={`${document?.thumbnail?.image_path}`}
              // src="https://localhost:4000/media/2022/08/14/gdcd.png"

              width={80}
              height={80}
              alt="Product image."
              style={{ objectFit: 'cover' }}
            />
            <div className="description">
              <p className="doc-name">{document?.name}</p>
              <p className="description-content">{document?.description}</p>
            </div>
          </div>
          <div className="price-group">
            <p className="price">
              {/* <TagOutlined /> */}
              {/* {formatCurrency(document?.price, true)} */}
            </p>

            {deleteLoading ? (
              <Spin size="default" />
            ) : (
              isDeleteBtn && (
                <DeleteOutlined
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setDeletetLoading(true);
                    deleteDoc();
                  }}
                />
              )
            )}
          </div>
        </div>
      )}
      {!document && course && (
        <div className="document-item">
          <div className="document-content">
            <img
              className="thumb"
              src={`${course?.thumbnail?.image_path}`}
              // src="https://localhost:4000/media/2022/08/14/gdcd.png"

              width={80}
              height={80}
              alt="Product image."
              style={{ objectFit: 'cover' }}
            />
            <div className="description">
              <p className="doc-name">{course.name}</p>
              <p className="description-content">{course.description}</p>
            </div>
          </div>
          <div className="price-group">
            <p className="price">
              {/* <TagOutlined /> */}
              {/* {formatCurrency(course.price || '', true)} */}
            </p>
            {deleteLoading ? (
              <Spin size="default" />
            ) : (
              isDeleteBtn && (
                <DeleteOutlined
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    deleteCourse();
                  }}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItemRow;
