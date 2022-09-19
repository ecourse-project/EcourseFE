import React from 'react';
import { Modal, ModalProps } from 'antd';
import IconClose from 'src/assets/images/close.svg';

interface BaseModalProps extends ModalProps {
	visible: boolean;
	onOK?: () => void;
	onCancel?: () => void;
}

const BaseModal: React.FC<BaseModalProps> = ({
	visible,
	onOK,
	onCancel,
	children,
	...props
}) => {
	return (
		<Modal
			className="base-modal"
			closeIcon={<img src={IconClose} alt="" />}
			visible={visible}
			onOk={onOK}
			onCancel={onCancel}
			{...props}
		>
			{children}
		</Modal>
	);
};

export default BaseModal;
