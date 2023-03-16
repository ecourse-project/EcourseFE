/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react';

import { css } from '@emotion/react';
import { Pagination as BasicPagination, Spin, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from 'src/components/order/order-item';
import { RootState } from 'src/lib/reducers/model';
import { OutputCancel, OutputOrder, Pagination, PaginationParams } from 'src/lib/types/backend_modal';
import CourseService from 'src/lib/api/course';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';
const { Title, Paragraph, Text, Link } = Typography;
const antIcon = <Loading3QuartersOutlined style={{ fontSize: 40 }} spin />;

const OrderUI = () => {
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: 10,
  });
  const [listOrder, setListOrder] = useState<Pagination<OutputOrder>>();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const getAllOrder = async () => {
    try {
      setLoading(true);
      const order = await CourseService.getAllOrders(pagination);
      setListOrder(order);
      console.log(order);
    } catch (error) {
      console.log('error');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllOrder();
  }, [pagination]);

  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
  };

  const cancelOrder = async (item: OutputOrder) => {
    try {
      const cancel: OutputCancel = await CourseService.cancelOrder(item.id);
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
      ) : (
        listOrder?.results?.map((v, i) => (
          <div key={i}>
            <OrderItem orderItem={v} cancelOrder={cancelOrder} />
          </div>
        ))
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
