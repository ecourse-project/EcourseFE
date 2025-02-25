import { Card, Col, Row } from 'antd';
import { PaymentInfo as PaymentInfomation } from 'src/lib/types/backend_modal';

import { css } from '@emotion/react';

interface PaymentInfo {
  orderID: string;
  price: number;
  paymentInfo: PaymentInfomation;
}
const PaymentInfo: React.FC<PaymentInfo> = ({ orderID, paymentInfo }) => {
  return (
    <div
      css={css`
        .left {
          text-align: right;
          color: blue;
        }
        .left,
        .right {
          font-weight: 600;
          font-family: monospace;
          padding: 7px 10px;
        }
        .content {
          color: red;
        }
      `}
    >
      <Card title="Thông tin thanh toán">
        <Row>
          <Col span={12} className="left">
            Mã đơn
          </Col>
          <Col span={12} className="right">
            {orderID}
          </Col>

          <Col span={12} className="left">
            Thông tin liên hệ
          </Col>
          <Col span={12} className="right">
            <div dangerouslySetInnerHTML={{ __html: `<div>${paymentInfo.payment_info}</div>` }} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default PaymentInfo;
