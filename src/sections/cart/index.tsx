/* eslint-disable react/no-children-prop */
import { Breadcrumb, Checkbox, Col, Divider, Empty, Row, Spin } from 'antd';
import { useEffect, useState } from 'react';
import PricingCard from 'src/components/cart/cart-price';
import CourseService from 'src/lib/api/course';
import useDebouncedCallback from 'src/lib/hooks/useDebouncedCallback';
import {
  CalculatePriceArgs,
  Course,
  CreateOrderArg,
  Document,
  MoveEnum,
  NavTypeEnum,
  OCart,
} from 'src/lib/types/backend_modal';
import RoutePaths from 'src/lib/utils/routes';

import { Loading3QuartersOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

import CartItemRow from '../../components/cart/cart-item';

import type { CheckboxChangeEvent } from 'antd/es/checkbox';
const antIcon = <Loading3QuartersOutlined style={{ fontSize: 40 }} spin />;
const CheckboxGroup = Checkbox.Group;
const CartUI: React.FC = () => {
  const [cartData, setCartData] = useState<OCart>();
  const [docCart, setDocCart] = useState<Document[]>([]);
  const [courseCart, setCourseCart] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [checkedListDoc, setCheckedListDoc] = useState<string[]>([]);
  const [checkedListCourse, setCheckedListCourse] = useState<string[]>([]);
  const [indeterminateDoc, setIndeterminateDoc] = useState(false);
  const [indeterminateCourse, setIndeterminateCourse] = useState(false);

  const [checkAllDoc, setCheckAllDoc] = useState(false);
  const [checkAllCourse, setCheckAllCourse] = useState(false);

  const [checkedList, setCheckedList] = useState<CalculatePriceArgs>({} as CalculatePriceArgs);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const getCart = async () => {
    try {
      setLoading(true);
      const cart = await CourseService.getCart();
      setCartData(cart);
      setDocCart(cart.documents);
      setCourseCart(cart.courses);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCart();
  }, []);

  const onChangeDoc = (list) => {
    setCheckedListDoc(list);
    setIndeterminateDoc(!!list.length && list.length < docCart.length);
    setCheckAllDoc(list.length === docCart.length);
  };

  const onCheckAllChangeDoc = (e: CheckboxChangeEvent) => {
    setCheckedListDoc(e.target.checked ? docCart?.map((v) => v.id) : []);
    setIndeterminateDoc(false);
    setCheckAllDoc(e.target.checked);
  };

  const onChangeCourse = (list) => {
    setCheckedListCourse(list);
    setIndeterminateCourse(!!list.length && list.length < courseCart.length);
    setCheckAllCourse(list.length === courseCart.length);
  };

  const onCheckAllChangeCourse = (e: CheckboxChangeEvent) => {
    setCheckedListCourse(e.target.checked ? courseCart?.map((v) => v.id) : []);
    setIndeterminateCourse(false);
    setCheckAllCourse(e.target.checked);
  };

  useEffect(() => {
    setCheckedList({
      documents: checkedListDoc?.map((v) => v.toString()),
      courses: checkedListCourse?.map((v) => v.toString()),
    });
  }, [checkedListDoc, checkedListCourse]);

  const debouncePrice = useDebouncedCallback(async (checkedList: CalculatePriceArgs) => {
    try {
      if (checkedList.courses?.length || checkedList.documents?.length) {
        const price = await CourseService.calculatePrice(checkedList);
        setTotalPrice(price.total_price);
      } else {
        setTotalPrice(0);
      }
    } catch (error) {
      console.log('error :>> ', error);
    }
  }, 500);
  useEffect(() => {
    debouncePrice(checkedList);
  }, [checkedList]);

  const removeFromCart = async (id: string, type: NavTypeEnum) => {
    try {
      let newDoc = docCart.slice();
      let newCourse = courseCart.slice();
      if (type === NavTypeEnum.COURSE) {
        const removeDoc = await CourseService.moveCourse(id, MoveEnum.CART, MoveEnum.LIST);
        newCourse = newCourse.filter((v) => v.id !== removeDoc.id);
        const newListCourseChecked = checkedListCourse.filter((v) => v !== removeDoc.id);
        setCheckedListCourse(newListCourseChecked);
        setCourseCart(newCourse);
      } else if (type === NavTypeEnum.DOCUMENT) {
        const removeDoc = await CourseService.moveDoc(id, MoveEnum.CART, MoveEnum.LIST);
        newDoc = newDoc.filter((v) => v.id !== removeDoc.id);
        setDocCart(newDoc);
        const newListDocChecked = checkedListDoc.filter((v) => v !== removeDoc.id);
        setCheckedListDoc(newListDocChecked);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="page-container"
      css={css`
        .empty-img {
          opacity: 0.6;
        }
        .ant-checkbox-group {
          display: flex;
          flex-direction: column;
        }
        .ant-checkbox {
          width: 19px;
          height: 19px;
          .ant-checkbox-inner {
            width: 19px;
            height: 19px;
            &:after {
              border: 3px solid #fff;
              border-top: 0;
              border-left: 0;
            }
          }
        }
        .title {
          font-size: 20px;
          font-weight: 600;
          font-family: Montserrat;
          color: #ffa900;
        }
        .choose-all {
          font-size: 17px;
          font-family: 'Montserrat';
          margin: 0 8px;
        }
        .doc {
          opacity: ${checkAllDoc ? '1' : '0.7'};
          font-weight: ${checkAllDoc ? '700' : '500'};
          &:hover {
            opacity: 1;
            font-weight: 600;
          }
        }
        .course {
          opacity: ${checkAllCourse ? '1' : '0.7'};

          font-weight: ${checkAllCourse ? '700' : '500'};
          &:hover {
            opacity: 1;
            font-weight: 600;
          }
        }
        .checkbox-group {
          max-height: 40%;
          overflow: auto;
          .ant-checkbox-wrapper {
            align-items: start;
            & > span:not(:first-of-type) {
              width: 100%;
            }
          }
          .ant-checkbox-group-item {
            margin: 0;
          }
        }
        .ant-checkbox-indeterminate .ant-checkbox-inner:after {
          background-color: #1c1d1f;
        }
        .ant-checkbox-checked .ant-checkbox-inner {
          border-color: #1c1d1f;
          background-color: #1c1d1f;
        }
        .check-all {
          .ant-checkbox-indeterminate {
            .ant-checkbox-inner:after {
              width: 15px;
              height: 15px;
            }
          }
        }
        .ant-checkbox-wrapper {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .cart-list {
          height: 85vh;
        }
        .cart-list-item {
          overflow: auto;
          max-height: 100vh;
        }
      `}
    >
      <Divider orientation="left">
        <Breadcrumb separator={<SwapOutlined />}>
          <Breadcrumb.Item href={RoutePaths.HOME}>Trang chính</Breadcrumb.Item>
          <Breadcrumb.Item href={''}>Giỏ hàng</Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <p className="title">Danh sách tài liệu trong giỏ</p>
      {loading ? (
        <div style={{ height: '72px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <Row gutter={[16, 16]} className="cart-list">
          <Col span={18} className="cart-list-item">
            {docCart?.length ? (
              <>
                <Checkbox
                  className="check-all"
                  indeterminate={indeterminateDoc}
                  onChange={onCheckAllChangeDoc}
                  checked={checkAllDoc}
                >
                  <p className="choose-all doc">Chọn tất cả tài liệu</p>
                </Checkbox>
                <Divider />
                <CheckboxGroup
                  onChange={onChangeDoc}
                  className="checkbox-group"
                  value={checkedListDoc}
                  options={docCart?.map((v) => ({
                    label: <CartItemRow document={v} onDelete={removeFromCart} />,
                    value: v.id,
                    Properties: null,
                  }))}
                />
              </>
            ) : (
              <> </>
            )}
            {courseCart?.length ? (
              <>
                <Checkbox
                  className="check-all"
                  indeterminate={indeterminateCourse}
                  onChange={onCheckAllChangeCourse}
                  checked={checkAllCourse}
                >
                  <p className="choose-all course">Chọn tất cả khoá học</p>
                </Checkbox>
                <Divider />
                <CheckboxGroup
                  onChange={onChangeCourse}
                  className="checkbox-group"
                  value={checkedListCourse}
                  options={courseCart?.map((v) => ({
                    label: <CartItemRow course={v} onDelete={removeFromCart} />,
                    value: v.id,
                    Properties: null,
                  }))}
                />
              </>
            ) : (
              <></>
            )}
            {!docCart?.length && !courseCart?.length && (
              <Empty className="empty-data" image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
          </Col>
          <Col span={6}>
            <div className="">
              <PricingCard
                docNum={docCart?.length || 0 + (courseCart?.length || 0)}
                children={null}
                checkoutList={
                  {
                    ...checkedList,
                    total_price: totalPrice,
                  } as CreateOrderArg
                }
                cartData={cartData || ({} as OCart)}
              />
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CartUI;
