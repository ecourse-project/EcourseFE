import React from 'react';
import RegisterForm from 'src/components/forms/RegisterForm';

import { css } from '@emotion/react';
import Link from 'next/link';
import { RollbackOutlined } from '@ant-design/icons';

const RegisterSection: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        min-height: 100vh;
        padding: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0px;
        background-image: none;
        background: rgb(66, 103, 212);
        background: linear-gradient(to bottom right, #38a2d7, #561139);
        .section-register {
          max-width: 580px;
          color: #000;
          width: 100%;
          font-weight: 300;
          box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
          .wrapper-register {
            padding: 40px;
            border-radius: 15px;
            background-color: #fff;
            position: relative;
            max-width: 100%;
            margin-right: auto;
            margin-left: auto;
            .user-avatar {
              /* margin-top: -80px; */
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
                  font-size: 30px;
                }
              }
            }
            .register-header {
              font-family: FiraSans;
              margin-top: 20px;
              border-radius: 5px;
              color: #000;
              text-align: center;
              margin-bottom: 10px;
              font-size: 34px;
              line-height: 36px;
              font-weight: 700;
            }
          }
          .divider {
            height: 2px;
            margin-top: 20px;
            margin-bottom: 20px;
            background-color: #051d29;
          }
        }
        a {
          text-decoration: none;
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
          width: 100%;
          display: block;
          margin-top: 20px;
        }
      `}
    >
      <div className="section-register">
        <div className="wrapper-register">
          <div className="user-avatar">
            {/* <div className="user-wrapper">
              <h2>
                <FaRegUser />
              </h2>
            </div> */}
          </div>
          {/* <h2 className="register-header">Create Account</h2> */}
          <RegisterForm />
          <Link className="back-home" href={'/'}>
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
