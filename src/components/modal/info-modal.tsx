import { Avatar, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { User } from 'src/lib/types/backend_modal';

import { UserOutlined } from '@ant-design/icons';

import BaseModal from './';

interface InfoModalProps {
  visible: boolean;
  userInfo: User;
  onClose: () => void;
}
const InfoModal: React.FC<InfoModalProps> = (props) => {
  const { visible, userInfo, onClose } = props;

  return (
    <BaseModal visible={visible} onCancel={onClose} footer={null}>
      <div className="card-wrapper">
        <Card>
          <Meta
            avatar={<Avatar src={userInfo.avatar || <UserOutlined />} alt="avatar" shape="square" size={100} />}
            title={userInfo.full_name}
            description={userInfo.email}
          />
        </Card>
      </div>
    </BaseModal>
  );
};

export default InfoModal;
