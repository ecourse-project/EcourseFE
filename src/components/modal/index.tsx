import { Modal, ModalProps } from 'antd';
import React from 'react';

interface BaseModalProps extends ModalProps {
  visible: boolean;
  onOK?: () => void;
  onCancel?: () => void;
  footer?: boolean | null;
}

const BaseModal: React.FC<BaseModalProps> = ({ visible, onOK, onCancel, children, footer, ...props }) => {
  return (
    <Modal
      className="base-modal"
      // closeIcon={<img src={IconClose} alt="" />}
      closeIcon={null}
      open={visible}
      onOk={onOK}
      onCancel={onCancel}
      {...props}
      footer={footer}
    >
      {children}
    </Modal>
  );
};

export default BaseModal;
