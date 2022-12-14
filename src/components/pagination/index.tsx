import { css } from '@emotion/react';
import { Pagination } from 'antd';
import React, { FC, useEffect } from 'react';
import IconNext from 'src/assets/icons/IconNext';
import IconPrevious from 'src/assets/icons/IconPrevious';

interface CustomPaginationProps {
  current?: number;
  pageSize?: number;
  responsive?: boolean;
  total: number;
  showSizeChanger: boolean;
  onChange?: (page: number, pageSize: number | undefined) => void;
}

const CustomPagination: FC<CustomPaginationProps> = ({
  current,
  pageSize,
  responsive,
  total,
  showSizeChanger,
  onChange,
  ...rest
}) => {
  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') return <IconPrevious />;
    if (type === 'next') return <IconNext />;
    return originalElement;
  };
  useEffect(() => {
    console.log('current', current);
  }, [current]);

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        .ant-pagination {
          &-item {
            border-radius: 50%;
            border: 2px solid #ffa535;
            // width: 55px;
            // height: 55px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            a {
              color: #ffa535;
              font-weight: 700;
            }
            &:hover,
            &-active {
              background-color: #ffa535;
              border-color: #ffa535;
              a {
                color: #fff;
              }
            }
            &-ellipsis {
              color: #ffa535 !important;
            }
          }
          .ant-pagination-item-${current} {
            background-color: #ffa535;
            border-color: #ffa535;
            a {
              color: #fff;
            }
          }
          &-next,
          &-prev {
            svg[disabled] {
              circle,
              path,
              line {
                stroke: #00000040;
              }
            }
            &:hover {
              svg:not([disabled]) {
                circle {
                  fill: #ffa535;
                }
                path,
                line {
                  stroke: #fff;
                }
              }
            }
          }
        }
      `}
    >
      <Pagination
        current={current}
        defaultCurrent={current}
        pageSize={pageSize}
        total={total}
        responsive={responsive}
        showSizeChanger={showSizeChanger}
        onChange={onChange}
        itemRender={itemRender}
        hideOnSinglePage
        {...rest}
      />
    </div>
  );
};

export default CustomPagination;
