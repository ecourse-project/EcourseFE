import { FaRegUser } from 'react-icons/fa';
import { css } from '@emotion/react';
import React from 'react';
import RegisterForm from 'src/components/forms/RegisterForm';
import RoutePaths from 'src/lib/utils/routes';
import Link from 'next/link';

const RegisterSection: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        min-height: 100vh;
        padding-top: 30px;
        padding-bottom: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0px;
        background-color: #e7edf3;
        background-image: none;
        .section-register {
          max-width: 580px;
          color: #fff;
          width: 100%;
          font-weight: 300;

          .wrapper-register {
            padding: 40px;
            border-radius: 15px;
            background-color: #051d29;
            position: relative;
            max-width: 100%;
            margin-right: auto;
            margin-left: auto;
            .user-avatar {
              margin-top: -80px;
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
              color: #fff;
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
          .register-text {
            text-align: center;
            margin-bottom: 10px;
            font-family: FiraSans;
            h5 {
              color: #000;
              font-weight: 400;
            }
            .login-here {
              transition: all 400ms ease;
              color: #333;
              font-weight: 700;
              text-decoration: none;
              text-transform: uppercase;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      `}
    >
      <div className="section-register">
        <div className="wrapper-register">
          <div className="user-avatar">
            <div className="user-wrapper">
              <h2>
                <FaRegUser />
              </h2>
            </div>
          </div>
          <h2 className="register-header">Create Account</h2>
          <RegisterForm />
        </div>
        <div className="divider"></div>
        <div className="register-text">
          <h5>
            Already have an account?{' '}
            <Link className="login-here" href={RoutePaths.LOGIN}>
              LOGIN HERE
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
