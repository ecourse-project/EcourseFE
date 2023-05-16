import { Divider } from 'antd';
import Link from 'next/link';
import React from 'react';
import LoginForm from 'src/components/forms/LoginForm';
import RoutePaths from 'src/lib/utils/routes';

import { css } from '@emotion/react';
import { HomeOutlined } from '@ant-design/icons';

const LoginUI: React.FC = () => {
  return (
    <div
      css={css`
        min-height: 100vh;
        padding: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #e7edf3;
        position: relative;
        width: 100%;
        background: rgb(66, 103, 212);
        background: linear-gradient(to bottom right, #38a2d7, #561139);

        a {
          text-decoration: none;
        }

        .section-login {
          max-width: 480px;
          width: 100%;
          font-weight: 300;
          box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
          .wrapper-login {
            padding: 30px 50px;
            border-radius: 20px;
            background-color: #fff;
            background-image: none;
            backdrop-filter: blur(14px);
            color: #fff;

            .user-avatar {
              margin-top: -91px;
              .user-wrapper {
                display: flex;
                width: 80px;
                height: 80px;
                margin-right: auto;
                margin-left: auto;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                background-color: #e7edf3;
                color: #051d29;
                > h2 {
                  color: #ffa535;
                  font-size: 30px;
                }
              }
            }
            .login-header {
              font-family: FiraSans;
              margin-top: 20px;
              border-radius: 5px;
              color: #000;
              /* text-align: center; */
              margin-bottom: 10px;
              font-size: 34px;
              line-height: 36px;
              font-weight: 700;
            }
            .login-form {
              .form-item {
                .eyes {
                  top: 48px;
                }
              }
            }
          }
          .divider {
            height: 2px;
            margin-top: 20px;
            margin-bottom: 20px;
            background-color: #2e0249;
          }

          .form-item-bot {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 10px;
            .forgot-pwd {
              width: 100%;
              color: #000;
              font-size: 18px;
              text-align: center;

              &:hover {
                text-decoration: underline;
              }
            }

            .login-text {
              color: #000;
              font-family: FiraSans;
              display: flex;
              justify-content: center;
              gap: 10px;
              .register-here {
                color: #000;
                font-weight: 600;
                margin: auto 0;
                &:hover {
                  font-weight: 700;
                }
              }
            }
          }
        }
        .back-home {
          color: #000;
          text-align: center;
          font-weight: 700;
          margin: 0;
          cursor: pointer;
          letter-spacing: 1px;
          opacity: 0.6;
          &:hover {
            letter-spacing: 2px;
            opacity: 1;
          }
          transition: all 400ms ease;
        }
      `}
    >
      {/* <button
        className="back-home"
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          background-color: transparent;
          border: none;
          font-weight: 700;
          letter-spacing: 1px;
          cursor: pointer;
          .anticon-home {
            font-size: 20px !important;
          }
        `}
      >
        <HomeOutlined /> Trang chủ
      </button> */}
      <div className="section-login">
        <div className="wrapper-login">
          <h2 className="login-header">Đăng nhập</h2>
          <LoginForm />
          <Divider className="divider" />
          <div className="form-item-bot">
            {/* <Link className="forgot-pwd" href={RoutePaths.FORGOT_PASSWORD}>
              Quên mật khẩu?
            </Link> */}
            <div className="login-text">
              <p>Chưa có tài khoản?</p>
              <Link className="register-here" href={RoutePaths.REGISTER}>
                Đăng ký
              </Link>
            </div>
            <Link className="back-home" href={'/'}>
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginSection: React.FC = () => {
  return (
    <>
      <LoginUI />
    </>
  );
};

export default LoginSection;
