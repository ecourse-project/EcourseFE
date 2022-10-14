/* eslint-disable react/no-children-prop */
import { Breadcrumb, Checkbox, Col, Divider, Image, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import EmptyImg from 'src/assets/images/empty-cart-man.jpg';
import PricingCard from 'src/components/cart/cart-price';
import {
	CalculatePriceArgs,
	Course,
	CreateOrderArg,
	OCart,
} from 'src/models/backend_modal';
import { RootState } from 'src/reducers/model';
import CartItemRow from '../../components/cart/cart-item';
/** @jsxImportSource @emotion/react */
import { SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import CourseService from 'src/services/course';
import RoutePaths from 'src/utils/routes';
import useDebouncedCallback from 'src/hooks/useDebouncedCallback';

const CheckboxGroup = Checkbox.Group;
function CartUI() {
	const [cart, setCart] = useState<OCart>();
	const [isModalVisible, setIsModalVisible] = useState(true);

	const [checkedListDoc, setCheckedListDoc] = useState<string[]>([]);
	const [checkedListCourse, setCheckedListCourse] = useState<string[]>([]);
	const [indeterminateDoc, setIndeterminateDoc] = useState(false);
	const [indeterminateCourse, setIndeterminateCourse] = useState(false);

	const [checkAllDoc, setCheckAllDoc] = useState(false);
	const [checkAllCourse, setCheckAllCourse] = useState(false);

	const [checkedList, setCheckedList] = useState<CalculatePriceArgs>(
		{} as CalculatePriceArgs
	);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const dispatch = useAppDispatch();
	// const data = useAppSelector((state: RootState) => state.document.cartDoc);

	const cartData = useAppSelector((state: RootState) => state.app.appCart);
	useEffect(() => {
		console.log('cartdataa', cartData);
	}, [cartData]);
	const docCart = cartData?.documents;
	const courseCart = cartData?.courses;
	const onChangeDoc = (list) => {
		// setCheckedListDoc(list.map((v) => v.id));
		setCheckedListDoc(list);
		setIndeterminateDoc(!!list.length && list.length < docCart.length);
		setCheckAllDoc(list.length === docCart.length);
	};

	const onCheckAllChangeDoc = (e: CheckboxChangeEvent) => {
		setCheckedListDoc(
			// e.target.checked ? Array.from(Array(docCart?.length).keys()) : []
			e.target.checked ? cartData?.documents.map((v) => v.id) : []
		);
		setIndeterminateDoc(false);
		setCheckAllDoc(e.target.checked);
	};

	const onChangeCourse = (list) => {
		// setCheckedListDoc(list.map((v) => v.id));

		setCheckedListCourse(list);
		setIndeterminateCourse(!!list.length && list.length < courseCart.length);
		setCheckAllCourse(list.length === courseCart.length);
	};

	const onCheckAllChangeCourse = (e: CheckboxChangeEvent) => {
		setCheckedListCourse(
			// e.target.checked ? Array.from(Array(courseCart?.length).keys()) : []
			e.target.checked ? cartData?.courses.map((v) => v.id) : []
		);
		setIndeterminateCourse(false);
		setCheckAllCourse(e.target.checked);
	};

	useEffect(() => {
		// console.log('call debounce');
		// debounceSetCheckList(checkedListDoc, checkedListCourse);

		setCheckedList({
			documents: checkedListDoc.map((v) => v.toString()),
			courses: checkedListCourse.map((v) => v.toString()),
		});
	}, [checkedListDoc, checkedListCourse]);

	// const debounceSetCheckList = useCallback(
	// 	(checkedListDoc, checkedListCourse) => {
	// 		console.log('before call debounce');
	// 		debounce((checkedListDoc, checkedListCourse) => {
	// 			console.log('set again');
	// 			// setCheckedList({
	// 			// 	documents: checkedListDoc.map((v) => v.toString()),
	// 			// 	courses: checkedListCourse.map((v) => v.id),
	// 			// });
	// 		}, 1000);
	// 		setAgain();
	// 	}
	// );
	const debouncePrice = useDebouncedCallback(
		async (checkedList: CalculatePriceArgs) => {
			if (checkedList.courses?.length || checkedList.documents?.length) {
				const price = await CourseService.calculatePrice(checkedList);
				setTotalPrice(price.total_price);
			} else {
				setTotalPrice(0);
			}
		},
		1000
	);
	useEffect(() => {
		debouncePrice(checkedList);
	}, [checkedList]);

	return (
		<div
			className="page-container"
			css={css`
				.empty-img {
					opacity: 0.6;
				}
				.ant-checkbox {
					width: 19px;
					height: 19px;
					.ant-checkbox-inner {
						width: 19px;
						height: 19px;
						&:after {
							width: 6.714286px;
							height: 15.142857px;

							border: 3px solid #fff;
							border-top: 0;
							border-left: 0;
						}
					}
				}

				.checkbox-group {
					max-height: 40%;
					overflow: auto;
					.ant-checkbox-wrapper {
						align-item: start;
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
				}
				.cart-list {
					overflow: auto;
					max-height: 78vh;
				}
			`}
		>
			<Divider orientation="left">
				<Breadcrumb separator={<SwapOutlined />}>
					<Breadcrumb.Item href={RoutePaths.HOME}>Trang chính</Breadcrumb.Item>
					<Breadcrumb.Item href={''}>Giỏ hàng</Breadcrumb.Item>
				</Breadcrumb>
			</Divider>
			<h2>Danh sách tài liệu trong giỏ</h2>
			<Row gutter={[16, 16]}>
				<Col span={18} className="cart-list">
					{cartData?.documents?.length && (
						<>
							<Checkbox
								className="check-all"
								indeterminate={indeterminateDoc}
								onChange={onCheckAllChangeDoc}
								checked={checkAllDoc}
							>
								<h3>Chọn tất cả tài liệu</h3>
							</Checkbox>
							<Divider />
							<CheckboxGroup
								onChange={onChangeDoc}
								className="checkbox-group"
								value={checkedListDoc}
								options={cartData?.documents?.map((v) => ({
									label: <CartItemRow document={v} />,
									value: v.id,
									Properties: null,
								}))}
							/>
						</>
					)}
					{cartData?.courses?.length && (
						<>
							<Checkbox
								className="check-all"
								indeterminate={indeterminateCourse}
								onChange={onCheckAllChangeCourse}
								checked={checkAllCourse}
							>
								<h3>Chọn tất cả khoá học</h3>
							</Checkbox>
							<Divider />
							<CheckboxGroup
								onChange={onChangeCourse}
								className="checkbox-group"
								value={checkedListCourse}
								options={cartData?.courses.map((v) => ({
									label: <CartItemRow course={v} />,
									value: v.id,
									Properties: null,
								}))}
							/>
						</>
					)}
					{cartData?.documents?.length === 0 &&
						cartData?.courses?.length === 0 && (
							<Image src={EmptyImg} preview={false} className="empty-img" />
						)}
				</Col>
				<Col span={6}>
					<div className="">
						<PricingCard
							docNum={cartData?.documents?.length + cartData?.courses?.length}
							children={null}
							checkoutList={
								{
									...checkedList,
									total_price: totalPrice,
								} as CreateOrderArg
							}
						/>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default CartUI;
