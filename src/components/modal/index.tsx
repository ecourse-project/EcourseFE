import React from 'react';
import { Modal, ModalProps } from 'antd';
import IconClose from 'src/assets/images/close.svg';

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
