import { Button, Popover } from 'antd';
import React from 'react';

export default function UserInfoPopover({ children }) {
  return (
    <Popover placement="rightBottom" title={'User info'} content={<div>Name</div>} trigger="hover">
      {children}
    </Popover>
  );
}
