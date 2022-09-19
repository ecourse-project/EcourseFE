import React from 'react';
import { Modal } from 'antd';

interface BaseType {
	open: boolean;
}
const BaseModal: React.FC<BaseType> = ({ open }) => {
	return (
		<Modal
			bodyStyle={{ height: 1000 }}
			className="modal-cancel"
			title="Title"
			visible={open}
			// onOk={handleOk}
			// confirmLoading={confirmLoading}
			// onCancel={handleCancel}
			zIndex={100}
			centered
			getContainer={'order-detail'}
		>
			<p>{`àdskjljaflkdsjafkljaklsdf`}</p>
		</Modal>
	);
};
export default BaseModal;
