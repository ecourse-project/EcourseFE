import { Button, Card, Col, Collapse, List, Row, Skeleton } from 'antd';
import moment from 'moment';
import React from 'react';
import { OutputOrder } from 'src/lib/types/backend_modal';
import RoutePaths from 'src/lib/utils/routes';

import { css } from '@emotion/react';

import { InfoOutlined } from '@ant-design/icons';
import { PaymentInfo as PaymentInfomation } from 'src/lib/types/backend_modal';
import { AskForSave } from '../alert/SweetAlert';
import PaymentInfo from './paymentInfo';

const { Panel } = Collapse;

interface OrderItemPropType {
  orderItem: OutputOrder;
  cancelOrder: (item: OutputOrder) => void;
  paymentInfo: PaymentInfomation;
}

export enum OrderStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}
interface BaseType {
  open: boolean;
}
const OrderItem: React.FC<OrderItemPropType> = (props) => {
  const { orderItem, cancelOrder, paymentInfo } = props;

  const onChange = (key: string | string[]) => {};

  const genExtra = () => <InfoOutlined />;
  const showModal = () => {
    AskForSave(`Xác nhân huỷ`, `Huỷ đơn mã #${orderItem.code.split('-')[0].slice(3, 10)}`, 'OK', 'Huỷ', '', (value) => {
      if (value.isConfirmed) cancelOrder(orderItem);
    });
  };

  return (
    <div className="modal-over" id="modal-over">
      <div className="container" id="order-detail">
        <Collapse
          onChange={onChange}
          expandIconPosition={'end'}
          css={css`
            margin: 10px 0 20px 0;
            .ant-collapse-header-text {
              width: 60%;
            }
            .demo-loadmore-list {
              &:first-of-type {
                border-bottom: 6px solid #000;
              }
            }
            .header-row {
              justify-content: space-between;
              padding: 0 40px;
              font-size: 20px;
              font-weight: 700;
            }
            .card-title {
              justify-content: space-between;
            }
            .total {
              display: flex;
              justify-content: flex-end;
            }
            .ant-list-split .ant-list-item {
              border-bottom: none;
            }

            .ant-statistic-title {
              color: #000;
              font-size: 18px;
              font-weight: 600;
            }
            .anticon-info {
              border: 2px solid;
              padding: 4px;
              border-radius: 50px;
              ${orderItem.status === OrderStatus.PENDING
                ? `color: gray`
                : `${orderItem.status === OrderStatus.SUCCESS ? `color: green` : `color: red`}`}
            }
          `}
        >
          <Panel
            showArrow={false}
            header={
              <Row gutter={32} className="header-row">
                <Col>Mã đơn hàng: #{orderItem?.code}</Col>
                <Col className="price">Ngày tạo: {moment(orderItem?.created).format('DD/MM/YYYY')}</Col>
              </Row>
            }
            key="1"
            extra={genExtra()}
          >
            <Card
              bordered={false}
              title={
                <Row className="card-title">
                  <Col>{orderItem?.status}</Col>
                  {orderItem?.status === OrderStatus.PENDING ? (
                    <Col>
                      <Button id="btn-cancel" onClick={showModal}>
                        Cancel
                      </Button>
                    </Col>
                  ) : (
                    ''
                  )}
                </Row>
              }
              style={{ width: '100%', textAlign: 'left' }}
            >
              {orderItem.documents.length ? (
                <>
                  <h5>Tài liệu</h5>
                  <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={orderItem.documents}
                    renderItem={(item) => (
                      <List.Item>
                        <Skeleton avatar title={false} active loading={false}>
                          <List.Item.Meta
                            title={<a href={`${RoutePaths.DOCUMENT}/${item.id}`}>{item.name}</a>}
                            description={item.description}
                            style={{ marginRight: '20px' }}
                          />
                        </Skeleton>
                      </List.Item>
                    )}
                  />
                </>
              ) : (
                <></>
              )}
              {orderItem.courses.length ? (
                <>
                  <h5>Khoá học</h5>
                  <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={orderItem.courses}
                    renderItem={(item) => (
                      <List.Item>
                        <Skeleton avatar title={false} active loading={false}>
                          <List.Item.Meta
                            title={<a href={`${RoutePaths.COURSE}/${item.id}`}>{item.name}</a>}
                            description={item.description}
                            style={{ marginRight: '20px' }}
                          />
                        </Skeleton>
                      </List.Item>
                    )}
                  />
                </>
              ) : (
                <></>
              )}
              {orderItem.status === OrderStatus.PENDING ? (
                <PaymentInfo orderID={orderItem?.code} price={orderItem?.total_price} paymentInfo={paymentInfo} />
              ) : (
                ''
              )}
            </Card>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default OrderItem;
