import { FaRegUser } from 'react-icons/fa';
import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import Link from 'next/link';
import LoginForm from 'src/components/forms/LoginForm';

const LoginUI: React.FC = () => {
  return (
    <div
      css={css`
        min-height: 100vh;
        padding-top: 30px;
        padding-bottom: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #e7edf3;
        position: relative;
        width: 100%;
        padding: 30px 20px 30px;
        background: rgb(66, 103, 212);
        background: linear-gradient(
          207deg,
          rgba(66, 103, 212, 1) 20%,
          rgba(66, 146, 212, 1) 53%,
          rgba(197, 22, 240, 1) 84%,
          rgba(0, 212, 255, 1) 100%
        );
        .section-login {
          max-width: 480px;
          width: 100%;
          font-weight: 300;
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
            background-color: #031f2d;
          }
          .login-text {
            text-align: center;
            font-family: FiraSans;
            h5 {
              margin: 0;
              margin-bottom: 10px;
              font-size: 14px;
              line-height: 1.2;
              font-weight: 400;
            }
            .register-here {
              transition: all 400ms ease;
              color: #333;
              font-weight: 700;
              text-decoration: none;
              text-transform: uppercase;
              &:hover {
                text-decoration: underline;
              }
            }
            .resend-here {
              font-size: 14px;
              line-height: 1.2;
              transition: all 400ms ease;
              color: #333;
              font-weight: 700;
              text-decoration: underline;
            }
          }
        }
      `}
    >
      <div className="section-login">
        <div className="wrapper-login">
          <h2 className="login-header">Sign in</h2>
          <LoginForm />
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
