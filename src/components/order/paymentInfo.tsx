import { Card, Col, Divider, Row } from 'antd';
import { formatCurrency, formatCurrencySymbol } from 'src/lib/utils/currency';
import { css } from '@emotion/react';

interface PaymentInfo {
  orderID: string;
  price: number;
}
const PaymentInfo: React.FC<PaymentInfo> = ({ orderID, price }) => {
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
      `}
    >
      <Card title="Thông tin thanh toán">
        <Row>
          <Col span={12} className="left">
            Hình thức
          </Col>
          <Col span={12} className="right">
            Chuyển khoản
          </Col>
          <Col span={12} className="left">
            Mã chuyển khoản
          </Col>
          <Col span={12} className="right">
            Mã đơn
          </Col>
          <Col span={12} className="left">
            Thông tin chuyển khoản
          </Col>
          <Col span={12} className="right">
            <div>Tên giáo viên</div>
            <div>Số tài khoản</div>
            <div>Tên ngân hàng và chi nhánh</div>
          </Col>

          <Col span={12} className="left">
            Khuyến mãi
          </Col>
          <Col span={12} className="right">
            Số tiền khuyến mãi
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
