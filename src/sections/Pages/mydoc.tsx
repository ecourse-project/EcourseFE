import { CaretDownOutlined, PlusOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Divider, Input, Select, Space, Button, Dropdown, Menu } from 'antd';
import { useFormik } from 'formik';
import React, { useState, useRef } from 'react';
const { Option } = Select;
let index = 0;
export interface InitForm {
	id: string;
	is_active: boolean;
	trigger: string;
	time_delay: string;
	custom_time_delay: number;
	custom_fallbacks: any;
	response_type: string;
	message: string;
	subject: string;
	campaign_type: string;
	campaign: string;
}
const MyDoc = () => {
	const [items, setItems] = useState(['jack', 'lucy']);
	const [name, setName] = useState('');
	const inputRef = useRef(null);
	const [selectItem, setSelectItem] = useState('');
	const [customInput, setCustomInput] = useState<string>('');
	const [visible1, setVisible1] = useState(false);
	const [visible2, setVisible2] = useState(false);
	const [timeDelayVisible, setTimeDelayVisible] = useState<boolean>(false);
	const formik = useFormik<InitForm>({
		initialValues: {
			id: '',
			is_active: false,
			trigger: '',
			time_delay: '',
			response_type: '',
			message: '',
			subject: '',
			custom_time_delay: 0,
			custom_fallbacks: undefined,
			campaign_type: '',
			campaign: '',
		},
		validateOnChange: true,
		onSubmit: async (values) => {
			console.log('values submit:  ', values);
		},
	});

	const dripConfig = {
		trigger: [
			{
				value: 'campaign_ordered',
				label: 'Campaign Ordered',
			},
			{
				value: 'web_form_filled',
				label: 'Web Form Filled',
			},
			{
				value: 'qr_code_scanned',
				label: 'QR/Code Scanned',
			},
			{
				value: 'sms_received',
				label: 'SMS Received',
			},
			{
				value: 'call_received',
				label: 'Call Received',
			},
			{
				value: 'email_received',
				label: 'Email Received',
			},
		],
		time_delay: [
			{
				value: 'immediately',
				label: 'Immediately',
			},
			{
				value: '1_day',
				label: '1 Day',
			},
			{
				value: '3_days',
				label: '3 Days',
			},
			{
				value: '5_days',
				label: '5 Days',
			},
			{
				value: '1_week',
				label: '1 Week',
			},
			{
				value: '2_weeks',
				label: '2 Weeks',
			},
			{
				value: 'a_month',
				label: 'A Month',
			},
		],
		response_type: [
			{
				value: 'text',
				label: 'Text',
			},
			{
				value: 'email',
				label: 'Email',
			},
			{
				value: 'call_scheduling',
				label: 'Call Scheduling',
			},
		],
		message_variables: [
			'{First Name}',
			'{Last Name}',
			'{Employer}',
			'{Industry}',
			'{Address}',
			'{State}',
			'{City}',
			'{Zip}',
			'{Agent Name}',
			'{Agent Email}',
			'{Attribution Number}',
			'{DRE Number}',
			'{Expiration  Date}',
		],
	};
	const campaignType = [
		'Any Type',
		'Letters Only',
		'Postcards Only',
		'Top Agents Only',
	];

	const onNameChange = (event) => {
		setName(event.target.value);
	};

	const addItem = (e) => {
		e.preventDefault();
		if (name.length) {
			console.log(4);
			items.splice(-1);
		}
		setItems([...items, name || `New item ${index++}`]);
		setCustomInput(name);
		// setName('');
		// setTimeout(() => {
		// 	inputRef.current?.focus();
		// }, 0);
	};
	const handleChange = (value) => {
		console.log('fasdfasd', value);
	};

	const menu = () => {
		return (
			<div>
				<div>Campaign Type</div>
				<Menu className="time-delay-menu">
					{campaignType?.map((u, i) => {
						return (
							<Menu.Item key={i}>
								<div
									onClick={() => {
										formik.setFieldValue('time_delay', i);
										setTimeDelayVisible(true);
									}}
									className="time-delay-item"
								>
									{u}
								</div>
							</Menu.Item>
						);
					})}
					<div>Campaign Name</div>
					<Menu.Item
						className="custom-time-menu"
						onClick={() => {
							formik.setFieldValue('time_delay', -1);
							setTimeDelayVisible(false);
						}}
						disabled={!formik.values.custom_time_delay}
					>
						<div
							className="custom-time-input"
							css={css`
								margin-left: -2px;
								line-height: 32px;
								color: #000;
								& input {
									width: ${formik.values.custom_time_delay < 10
										? '14px'
										: formik.values.custom_time_delay < 100
										? '23px'
										: '32px'};
									padding: 0;
									color: #000;
									border: none;
									background-color: #f3f3f3;
								}

								& input::-webkit-outer-spin-button,
								& input::-webkit-inner-spin-button {
									-webkit-appearance: none;
									margin: 0;
								}
							`}
						>
							<Input
								placeholder="Enter Time Delay"
								defaultValue={0}
								name="custom_time_delay"
								type="number"
								value={formik.values.custom_time_delay}
								onChange={(e) => {
									formik.setFieldValue('custom_time_delay', e.target.value);
								}}
								onClick={(e) => e.stopPropagation()}
								width={32}
							/>
							<span>
								{formik.values.custom_time_delay > 1 ? 'Days' : 'Day'}
							</span>
						</div>
					</Menu.Item>
				</Menu>
			</div>
		);
	};
	return (
		<div id="dripItem">
			<Select
				className="drip-field"
				style={{ width: '500px' }}
				// onChange={async (value) => {
				//   formik.setFieldValue('time_delay', value);
				// }}
				// defaultValue={formik.values.time_delay || formik.values.custom_time_delay}
				value={formik.values.campaign}
				getPopupContainer={() =>
					document.getElementById('dripItem') as HTMLElement
				}
				suffixIcon={<CaretDownOutlined />}
				popupClassName="mail-campaign-name"
				dropdownRender={menu}
				onDropdownVisibleChange={(visible) => setTimeDelayVisible(visible)}
				open={timeDelayVisible}
			/>
		</div>
	);
};

export default MyDoc;
