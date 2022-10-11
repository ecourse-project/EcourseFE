import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button, Dropdown, Menu } from 'antd';
import React, { useState, useRef } from 'react';
const { Option } = Select;
let index = 0;

const MyDoc = () => {
	const [items, setItems] = useState(['jack', 'lucy']);
	const [name, setName] = useState('');
	const inputRef = useRef(null);
	const [selectItem, setSelectItem] = useState('');
	const [customInput, setCustomInput] = useState<string>('');
	const [visible, setVisible] = useState(false);
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
			<Menu>
				{items.map((v) => {
					return (
						<Menu.Item key={v}>
							<div
								onClick={() => {
									setSelectItem(v);
									setVisible(false);
								}}
							>
								{v}
							</div>
						</Menu.Item>
					);
				})}
				<Menu.Item key={'abc'}>
					<div
						onClick={() => {
							setSelectItem('abc');
							setVisible(false);
						}}
					></div>
				</Menu.Item>
			</Menu>
		);
	};

	return (
		<>
			<Select
				style={{
					width: 300,
				}}
				defaultValue={items[0]}
				onChange={handleChange}
				value={selectItem}
				open={visible}
				onDropdownVisibleChange={(visible) => {
					setVisible(visible);
				}}
				// onDropdownVisibleChange
				// dropdownRender={(menu) => (
				// 	<>
				// 		{menu}
				// 		<Divider
				// 			style={{
				// 				margin: '8px 0',
				// 			}}
				// 		/>
				// 		<Space
				// 			style={{
				// 				padding: '0 8px 4px',
				// 			}}
				// 		>
				// 			<Input
				// 				placeholder="Enter Delay Day"
				// 				defaultValue={name}
				// 				ref={inputRef}
				// 				value={name}
				// 				onChange={onNameChange}
				// 			/>
				// 		</Space>
				// 	</>
				// )}
				dropdownRender={menu}
			>
				{/* {items.map((item) => (
				<Option key={item}>{item}</Option>
			))} */}
				{/* {name && (
				<Option>{`${name} ${Number(name) > 1 ? 'Days' : 'Day'}`}</Option>
			)} */}
				{/* <Input></Input> */}
			</Select>
			{/* <Dropdown overlay={menu}></Dropdown> */}
		</>
	);
};

export default MyDoc;
