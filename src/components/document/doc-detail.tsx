import { Breadcrumb, Button, Divider, Dropdown, Menu, Row, Tabs, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { Document, MoveEnum, SaleStatusEnum } from 'src/lib/types/backend_modal';
import { formatDate } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';

/* eslint-disable react/prop-types */
import {
  CalendarOutlined,
  DownloadOutlined,
  FileSearchOutlined,
  MinusCircleOutlined,
  MoreOutlined,
  PlusCircleOutlined,
  SwapOutlined,
} from '@ant-design/icons';
import { PageHeader } from '@ant-design/pro-layout/es/components/PageHeader';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const { Paragraph, Title } = Typography;
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu} placement="bottomRight">
    <Button
      type="text"
      icon={
        <MoreOutlined
          style={{
            fontSize: 20,
          }}
        />
      }
    />
  </Dropdown>
);

const Content = ({ children, extraContent }) => (
  <Row>
    <div
      style={{
        flex: 1,
      }}
    >
      {children}
    </div>
    <div className="image">{extraContent}</div>
  </Row>
);

enum TagState {
  SUCCESS = 'SUCCESS',
  PROCESSING = 'PROCESSING',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  WAITING = 'WAITING',
  STOP = 'STOP',
}

interface DocDetailParams {
  id: string;
  document: string;
}

const DocDetail: React.FC = () => {
  const params: DocDetailParams = useQueryParam();
  const [doc, setDoc] = useState<Document>({} as Document);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const fetchDocDetail = async (id: string) => {
    try {
      const docDetail: Document = await CourseService.getDocDetail(id);
      setDoc(docDetail);
    } catch (error) {
      console.log('error get detail', error);
    }
  };

  useEffect(() => {
    if (id) fetchDocDetail(id as string);
  }, [id]);

  // useEffect(() => {
  // 	const document = listDoc?.filter((v) => v.id === doc.id)[0];
  // 	document && setDoc(document);
  // }, [listDoc]);

  // const rateDoc = async (document_id: string, rating: number, comment: string) => {
  //   try {
  //     if (rating === 1) rating = RatingEnum.ONE;
  //     if (rating === 2) rating = RatingEnum.TWO;
  //     if (rating === 3) rating = RatingEnum.THREE;
  //     if (rating === 4) rating = RatingEnum.FOUR;
  //     if (rating === 5) rating = RatingEnum.FIVE;

  //     const rate = await CourseService.rateDocument({
  //       document_id,
  //       rating,
  //       comment,
  //     } as RateDocArgs);
  //     setMyRate(rate);
  //     doc.rating_detail?.push(rate);
  //   } catch (error) {
  //     //console.log('error', error);
  //   }
  // };

  // const handleSaveRating = () => {
  //   rateDoc(params.id, star, feedback);
  //   setOpenRatingModal(false);
  // };
  const content = (
    <div className="content-wrapper">
      <div className="content-detail">
        <Title>{doc?.name}</Title>
        <Paragraph>
          <FileSearchOutlined />
          {'  '}
          {doc?.description}
        </Paragraph>
        <div>
          <CalendarOutlined />
          {`  Ngày cập nhật: ${formatDate(doc?.created)}`}
        </div>
      </div>
    </div>
  );
  const handleUpdateBtn = async () => {
    try {
      setLoading(true);
      if (doc.sale_status === SaleStatusEnum.AVAILABLE) {
        const newDoc = await CourseService.moveDoc(doc.id, MoveEnum.LIST, MoveEnum.CART);
        setTimeout(() => {
          setDoc(newDoc);
        }, 1000);
      } else if (doc.sale_status === SaleStatusEnum.IN_CART) {
        const newDoc = await CourseService.moveDoc(doc.id, MoveEnum.CART, MoveEnum.LIST);
        setTimeout(() => {
          setDoc(newDoc);
        }, 1000);
      }
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const items = [];

  return (
    <div
      className="page-container"
      css={css`
        max-width: 70%;
        text-align: left;
        .ant-breadcrumb {
          font-size: 20px;
          font-weight: 600;
          .ant-breadcrumb-link {
            cursor: pointer;
          }
        }

        .ant-btn-primary {
          width: 160px;
          height: 35px;
          border-radius: 2px;
          min-width: 175px;

          background-color: ${doc.sale_status === SaleStatusEnum.AVAILABLE && '#17a2b8'};
          background-color: ${doc.sale_status === SaleStatusEnum.IN_CART && '#ed5e68'};
          background-color: ${doc.sale_status === SaleStatusEnum.PENDING && '#6c757d'};
          background-color: ${doc.sale_status === SaleStatusEnum.BOUGHT && '#28a745'};
          border-color: unset;
          color: #fff;
          font-weight: 700;
          letter-spacing: 3px;
          height: 50px;
          border-radius: 4px;
          &:hover {
            letter-spacing: 4px;
            text-decoration: none;
            font-weight: 700;
          }
          .anticon {
            vertical-align: inherit;
            font-size: 16px;
            font-weight: 700;
          }
        }
        .content-wrapper {
          font-size: 15px;
          .anticon {
            font-size: 25px;
          }
          .content-detail {
            border: 1px solid #000;
            border-left: none;
            border-right: none;
            padding: 20px 5px;
          }
        }
        .add-btn {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ant-page-header {
        }
        .rating-btn {
          display: flex;
          align-item: baseline;
          .anticon-star {
            font-size: 18px;
            color: #faad14;
          }
          &:hover,
          &:active {
            border: 3px solid #faad14;
            color: #000;
            font-weight: 700;
          }
        }
        .ant-btn-disabled {
          opacity: 0.5;
        }
      `}
    >
      <Divider orientation="left">
        <Breadcrumb separator={<SwapOutlined />}>
          <Breadcrumb.Item href={RoutePaths.HOME}>Trang chính</Breadcrumb.Item>
          <Breadcrumb.Item>Tài liệu</Breadcrumb.Item>
          <Breadcrumb.Item>{doc?.topic}</Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <PageHeader
        title={doc?.topic}
        className="site-page-header"
        avatar={{
          src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
        }}
      >
        <Content
          extraContent={
            <Image
              src={doc?.thumbnail?.image_path || ''}
              alt="content"
              width={200}
              height={130}
              style={{ marginLeft: 40 }}
            />
          }
        >
          {content}
        </Content>

        {doc.sale_status !== SaleStatusEnum.PENDING ? (
          <Button
            key="1"
            type="primary"
            className="add-btn"
            loading={loading}
            onClick={handleUpdateBtn}
            href={doc.sale_status === SaleStatusEnum.BOUGHT ? doc?.file?.file_path : undefined}
            target="blank"
            disabled={loading || !doc.download}
          >
            {doc.sale_status === SaleStatusEnum.AVAILABLE
              ? 'THÊM'
              : doc.sale_status === SaleStatusEnum.IN_CART
              ? 'XOÁ'
              : doc.sale_status === SaleStatusEnum.BOUGHT
              ? 'ĐỌC'
              : ''}
            {doc.sale_status === SaleStatusEnum.AVAILABLE ? (
              <PlusCircleOutlined />
            ) : doc.sale_status === SaleStatusEnum.IN_CART ? (
              <MinusCircleOutlined />
            ) : doc.sale_status === SaleStatusEnum.BOUGHT ? (
              <DownloadOutlined />
            ) : (
              ''
            )}
          </Button>
        ) : (
          <Button
            key="2"
            type="primary"
            className="add-btn"
            loading={loading}
            onClick={handleUpdateBtn}
            target="blank"
            disabled={true}
          >
            Chờ xử lý
          </Button>
        )}
      </PageHeader>
      <Tabs items={items} className="tab-section" />
    </div>
  );
};

export default DocDetail;
