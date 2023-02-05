import { AppstoreOutlined, MailOutlined, SettingOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Divider, Menu } from 'antd';
import type { MenuTheme } from 'antd/es/menu';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Nav, NavTypeEnum } from 'src/lib/types/backend_modal';
import RoutePaths from 'src/lib/utils/routes';
import { v4 as uuidv4 } from 'uuid';
type MenuItem = Required<MenuProps>['items'][number];

import type { MenuProps } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from 'src/lib/reducers/model';
import { isEmpty } from 'lodash';
import AppButton from '../button';

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  danger?: true,
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    danger,
  } as MenuItem;
}

const Nav: React.FC = () => {
  const header: Nav[] = useSelector((state: RootState) => state.app.header);

  const [listNav, setListNav] = useState<MenuItem[]>();
  const myProfile = useSelector((state: RootState) => state.app.user);
  const getTargetUrl = (type: string, itemType) => {
    if (type.toLocaleUpperCase() === NavTypeEnum.DOCUMENT) return `${RoutePaths.DOCUMENT}/?document=${itemType}`;
    else if (type.toLocaleUpperCase() === NavTypeEnum.COURSE) return `${RoutePaths.COURSE}/?course=${itemType}`;
  };
  const getListHeader = async () => {
    try {
      const header1 = header.concat(header.concat(header.concat(header)));
      const listItems = header1.map((v, i) => {
        return getItem(
          v.header,
          v.header + `id=${uuidv4()}`,
          '',
          v.detail.title?.map((u, n) => {
            return getItem(<Link href={getTargetUrl(v.detail.type, u) || ''}>{u}</Link>, u + `id=${uuidv4()}`);
          }),
        );
      });
      console.log('listItems', listItems);
      setListNav(listItems);
    } catch (error) {
      console.log('GetHeader', error);
    }
  };

  useEffect(() => {
    getListHeader();
  }, []);
  useEffect(() => {
    console.log('myProfile :>> ', myProfile);
  }, [myProfile]);
  return (
    <div
      className="nav-bar"
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left-box {
          display: flex;
          align-items: center;
          width: 80%;
          padding-right: 30px;
          > .ant-menu {
            width: 100%;
          }
        }
        .right-box {
          margin-right: 40px;
          display: flex;
          justify-content: space-between;
          gap: 10px;
          & a {
            width: 20px;
          }
        }
        .logo {
          width: 250px;
        }
        .ant-menu-overflow-item {
          height: fit-content;
        }
        .anticon {
          font-size: 20px;
          width: 20px;
          color: #000;
          cursor: pointer;
        }
        .ant-divider {
          width: 2px;
          height: 25px !important;
          color: #000;
          background: #000;
        }
        .ant-menu-horizontal {
          border: none;
        }
        .ant-menu-submenu-arrow {
          display: none;
        }
        .setting {
          .ant-menu-vertical {
            border-right: unset;
          }
          .ant-menu-submenu-title {
            padding: 0;
            line-height: unset !important;
            height: unset !important;
          }
        }
        .login-btn {
          font-weight: 700;
          color: #000;
          &:hover {
            letter-spacing: 2px;
            transition: all 0.5s ease-in-out;
          }
        }
      `}
    >
      <Link href={'/'}>
        <h1 className="logo">E-Course</h1>
      </Link>
      <div className="left-box">
        <Menu items={listNav} mode="horizontal" className="nav-menu" triggerSubMenuAction="hover" />
      </div>
      <div className="right-box">
        <Link href={RoutePaths.CART}>
          <ShoppingCartOutlined />
        </Link>
        <Divider type="vertical" style={{ height: '100%' }} />
        {/* <div className="setting">
          <Dropdown menu={{ items }}>
            <UserOutlined />
          </Dropdown>
        </div> */}
        {!isEmpty(myProfile) ? (
          <Link href={RoutePaths.SETTINGS}>
            <UserOutlined />
          </Link>
        ) : (
          <Link href={RoutePaths.LOGIN} className="login-btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
