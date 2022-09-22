/* eslint-disable react/prop-types */
import {
	CalendarOutlined,
	CheckCircleOutlined,
	ClockCircleOutlined,
	CloseCircleOutlined,
	ExclamationCircleOutlined,
	FileSearchOutlined,
	MinusCircleOutlined,
	MoreOutlined,
	PicCenterOutlined,
	SwapOutlined,
	SyncOutlined,
} from '@ant-design/icons';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
	Breadcrumb,
	Button,
	Dropdown,
	Menu,
	PageHeader,
	Row,
	Statistic,
	Tag,
	Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from 'src/apps/hooks';
import { useQueryParam } from 'src/hooks/useQueryParam';
import { Document } from 'src/models/backend_modal';
import { cartActions } from 'src/reducers/document/documentSlice';
import CourseService from 'src/services/course';
import { formatCurrency } from 'src/utils/currency';
import { DocStatus } from 'src/utils/enum';
import { formatDate } from 'src/utils/format';
import RoutePaths from 'src/utils/routes';
const { Paragraph, Title } = Typography;
const menu = (
	<Menu
		items={[
			{
				key: '1',
				label: (
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://www.alipay.com/"
					>
						1st menu item
					</a>
				),
			},
			{
				key: '2',
				label: (
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://www.taobao.com/"
					>
						2nd menu item
					</a>
				),
			},
			{
				key: '3',
				label: (
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://www.tmall.com/"
					>
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

const separator = <SwapOutlined />;
const IconLink = ({ src, text }) => (
	<a className="example-link">
		<img className="example-link-icon" src={src} alt={text} />
		{text}
	</a>
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

const tags = (tagState: TagState, text: string) => {
	switch (tagState) {
		case TagState.SUCCESS:
			return (
				<Tag icon={<CheckCircleOutlined />} color="success">
					{text}
				</Tag>
			);
			break;
		case TagState.PROCESSING:
			return (
				<Tag icon={<SyncOutlined spin />} color="processing">
					{text}
				</Tag>
			);
			break;
		case TagState.ERROR:
			return (
				<Tag icon={<CloseCircleOutlined />} color="error">
					{text}
				</Tag>
			);
			break;
		case TagState.WARNING:
			return (
				<Tag icon={<ExclamationCircleOutlined />} color="warning">
					{text}
				</Tag>
			);
			break;
		case TagState.WAITING:
			return (
				<Tag icon={<ClockCircleOutlined />} color="default">
					{text}
				</Tag>
			);
			break;
		case TagState.STOP:
			return (
				<Tag icon={<MinusCircleOutlined />} color="default">
					{text}
				</Tag>
			);
			break;

		default:
			break;
	}
};

interface DocDetailParams {
	id: string;
}

const DocDetail: React.FC = () => {
	const params: DocDetailParams = useQueryParam();
	const [doc, setDoc] = useState<Document>({} as Document);
	const [loading, setLoading] = useState(false);
	const [docStatus, setDocStatus] = useState<string>(DocStatus.AVAILABLE);
	const dispatch = useAppDispatch();
	const getDocDetail = async (id: string) => {
		try {
			const docDetail: Document = await CourseService.getDocDetail(id);
			console.log('doc detail', docDetail);
			setDoc(docDetail);
			setDocStatus(docDetail.sale_status);
		} catch (error) {
			console.log('error get detail', error);
		}
	};
	useEffect(() => {
		console.log('params', params);
		getDocDetail(params.id);
	}, []);

	const routes = [
		{
			path: `${RoutePaths.HOME}`,
			breadcrumbName: 'Trang chủ',
		},
		{
			path: `${RoutePaths.DOCUMENT}`,
			breadcrumbName: 'Tài liệu',
		},
		{
			path: '#',
			breadcrumbName: `${doc?.name}`,
		},
	];

	const content = (
		<div className="content-wrapper">
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
	);
	const handleUpdateBtn = () => {
		if (doc.sale_status !== DocStatus.BOUGHT) {
			setLoading(true);
			setTimeout(() => {
				const obj: Document = { ...doc, sale_status: docStatus };
				dispatch(cartActions.updateCart(obj || ({} as Document)));
				setDocStatus(
					docStatus === DocStatus.AVAILABLE
						? DocStatus.IN_CART
						: DocStatus.AVAILABLE
				);
				setLoading(false);
			}, 1000);
		}
	};

	return (
		<div
			className="container"
			css={css`
				max-width: 70%;
				text-align: left;
				.ant-breadcrumb {
					font-size: 20px;
					font-weight: 600;
				}
				.ant-btn-primary {
					width: 160px;
					height: 35px;
					border-radius: 2px;
					background-color: ${docStatus === DocStatus.AVAILABLE && '#17a2b8'};
					background-color: ${docStatus === DocStatus.IN_CART && '#ed5e68'};
					background-color: ${docStatus === DocStatus.PENDING && '#6c757d'};
					background-color: ${docStatus === DocStatus.BOUGHT && '#28a745'};
					border-color: unset;
					color: #fff;
					font-weight: 700;

					height: 50px;
					border-radius: 4px;
				}
				.content-wrapper {
					font-size: 15px;
					.anticon {
						font-size: 25px;
					}
				}
				a.ant-btn {
					padding-top: 8px !important;
				}
			`}
		>
			<Breadcrumb separator={separator}>
				<Breadcrumb.Item href={RoutePaths.HOME}>Trang chính</Breadcrumb.Item>
				<Breadcrumb.Item href={RoutePaths.DOCUMENT}>Tài liệu</Breadcrumb.Item>
				<Breadcrumb.Item href="">{doc.title}</Breadcrumb.Item>
			</Breadcrumb>
			<PageHeader
				title={doc?.title}
				className="site-page-header"
				// subTitle="This is a subtitle"
				tags={
					<>
						<Tag color="blue">{doc?.sold} Downloaded</Tag>
						{doc.sale_status === DocStatus.PENDING &&
							tags(TagState.PROCESSING, 'Chờ thanh toán')}
						{doc.sale_status === DocStatus.BOUGHT &&
							tags(TagState.SUCCESS, 'Đã mua')}
						{(doc.sale_status === DocStatus.AVAILABLE ||
							doc.sale_status === DocStatus.IN_CART) &&
							tags(TagState.ERROR, `Bán chạy của chủ đề ${doc.title}`)}
					</>
				}
				extra={
					[
						// <Button key="3">Operation</Button>,
						// <Button key="2">Operation</Button>,
						// <Button
						// 	key="1"
						// 	type="primary"
						// 	loading={loading}
						// 	onClick={handleUpdateBtn}
						// 	disabled={
						// 		docStatus === DocStatus.PENDING || docStatus === DocStatus.BOUGHT
						// 	}
						// >
						// 	{docStatus === DocStatus.AVAILABLE
						// 		? 'THÊM'
						// 		: docStatus === DocStatus.IN_CART
						// 		? 'XOÁ'
						// 		: ''}
						// </Button>,
						// <DropdownMenu key="more" />,
					]
				}
				avatar={{
					src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
				}}
			>
				<Content
					extraContent={
						<img
							src={doc?.thumbnail?.image_path || ''}
							alt="content"
							width="200"
							style={{ marginLeft: 40 }}
						/>
					}
				>
					{content}
				</Content>
				<Row>
					<Statistic
						title="Price"
						value={formatCurrency(doc?.price || 0)}
						style={{
							margin: '0 32px',
						}}
					/>
				</Row>
				<Button
					key="1"
					type="primary"
					className="add-btn"
					loading={loading}
					onClick={handleUpdateBtn}
					disabled={docStatus === DocStatus.PENDING}
					href={docStatus === DocStatus.BOUGHT ? doc.file.file_path : undefined}
					target="blank"
				>
					{docStatus === DocStatus.AVAILABLE
						? 'THÊM'
						: docStatus === DocStatus.IN_CART
						? 'XOÁ'
						: docStatus === DocStatus.BOUGHT
						? 'Tải xuống'
						: ''}
				</Button>
			</PageHeader>
		</div>
	);
};

export default DocDetail;
