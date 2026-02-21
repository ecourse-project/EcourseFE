import { Pagination as BasicPagination, Empty, Spin, Typography } from 'antd';
/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react';
import OrderItem from 'src/components/order/order-item';
import CourseService from 'src/lib/api/course';
import { OutputOrder, Pagination, PaginationParams, PaymentInfo } from 'src/lib/types/backend_modal';
import Swal from 'sweetalert2';

import { Loading3QuartersOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

const { Title } = Typography;
const antIcon = <Loading3QuartersOutlined style={{ fontSize: 40 }} spin />;

const OrderUI = () => {
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: 10,
  });
  const [listOrder, setListOrder] = useState<Pagination<OutputOrder>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({} as PaymentInfo);
  const getAllOrder = async () => {
    try {
      setLoading(true);
      const order = await CourseService.getAllOrders(pagination);
      setListOrder(order);
    } catch (error) {
      console.log('error');
    } finally {
      setLoading(false);
    }
  };

  const getPaymentInfo = async () => {
    try {
      const info = await CourseService.getPaymentInfo();
      setPaymentInfo(info);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPaymentInfo();
  }, []);
  useEffect(() => {
    getAllOrder();
  }, [pagination]);

  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
  };

  const cancelOrder = async (item: OutputOrder) => {
    try {
      await CourseService.cancelOrder(item.id);
      Swal.fire('Huỷ đơn hàng thành công!', '', 'success');
      await getAllOrder();
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <div
      className="order-wrapper page-container"
      css={css`
        .ant-typography {
          padding: 0.5em 0;
          margin: 0;
          font-family: FiraSans;
        }
      `}
    >
      <Title>Danh sách đơn hàng</Title>
      {loading ? (
        <div style={{ height: '72px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spin indicator={antIcon} />
        </div>
      ) : listOrder?.results?.length ? (
        listOrder?.results?.map((v, i) => (
          <div key={i}>
            <OrderItem orderItem={v} cancelOrder={cancelOrder} paymentInfo={paymentInfo} />
          </div>
        ))
      ) : (
        <Empty className="empty-data" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
      <div
        css={css`
          text-align: center;
        `}
      >
        <BasicPagination
          current={pagination.page}
          pageSize={pagination.limit}
          total={listOrder?.count || 10}
          showSizeChanger={false}
          onChange={onChangePage}
          hideOnSinglePage
        />
      </div>
    </div>
  );
};
export default OrderUI;
