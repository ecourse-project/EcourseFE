import { Card, Col, Row } from 'antd';
import { formatCurrencySymbol } from 'src/lib/utils/currency';
import { PaymentInfo as PaymentInfomation } from 'src/lib/types/backend_modal';

import { css } from '@emotion/react';

interface PaymentInfo {
  orderID: string;
  price: number;
  paymentInfo: PaymentInfomation;
}
const PaymentInfo: React.FC<PaymentInfo> = ({ orderID, price, paymentInfo }) => {
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
            Hình thức
          </Col>
          <Col span={12} className="right">
            {paymentInfo.method}
          </Col>
          <Col span={12} className="left">
            Mã đơn
          </Col>
          <Col span={12} className="right">
            {orderID}
          </Col>

          <Col span={12} className="left">
            Thông tin chuyển khoản
          </Col>
          <Col span={12} className="right">
            {/* <div>Tên giáo viên</div>
            <div>Số tài khoản</div>
            <div>Tên ngân hàng và chi nhánh</div> */}
            {paymentInfo.payment_info}
          </Col>
          <Col span={12} className="left">
            Nội dung chuyển khoản
          </Col>
          <Col span={12} className="right">
            {/* <div>[TÊN] - [MÃ ĐƠN]</div>

            <div>
              VD: <span className="content">NGUYEN VAN A - {orderID}</span>
            </div> */}
            {paymentInfo.content}
          </Col>
          <Col span={12} className="left">
            Thanh toán
          </Col>
          <Col span={12} className="right">
            {formatCurrencySymbol(price, 'VND', true)}
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default PaymentInfo;
