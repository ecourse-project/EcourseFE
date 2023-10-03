import { Image } from 'antd';
import { useRouter } from 'next/router';
// import { navigate } from 'gatsby';
import React, { useState } from 'react';
import ArrowLeft from 'src/assets/images/arrow-left.svg';
import RoutePaths from 'src/lib/utils/routes';

import { css } from '@emotion/react';

import AppButton from '../button';
import ResetPasswordForm from './ResetPassworForm';

import { TiArrowBack } from 'react-icons/ti';
const ResetPassword: React.FC = () => {
  const router = useRouter();
  const [emailSent, setEmailSent] = useState<string>('');
  return (
    <div
      css={css`
        min-height: 100vh;
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #e7edf3;
        width: 100%;
        padding: 30px 20px 30px;
        display: flex;
        min-height: 100vh;
        padding-top: 30px;
        padding-bottom: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0px;
        background-image: none;
        background: rgb(66, 103, 212);
        background: linear-gradient(
          207deg,
          rgba(66, 103, 212, 1) 20%,
          rgba(66, 146, 212, 1) 53%,
          rgba(0, 212, 255, 1) 100%
        );
        .wrapper {
          max-width: 522px;
          width: 100%;
          font-weight: 300;
          position: relative;
          .left-out {
            position: absolute;
            color: #000;
            z-index: 999;
            top: 20px;
            left: 28px;
            font-size: 20px;
            font-weight: 700;
            cursor: pointer;
          }
          .container {
            padding: 50px 35px;
            border-radius: 20px;
            background-color: #fff;
            box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
            background-image: none;
            backdrop-filter: blur(14px);
            color: #000;
            > h2 {
              font-family: FiraSans;
              color: #000;
              text-align: center;
              margin-bottom: 20px;
              font-size: 30px;
              font-weight: 700;
            }
            > p {
              font-size: 17px;
              color: #000;
              text-align: center;
              > span {
                font-weight: 700;
              }
            }
            .form-wrapper {
              display: grid;
              margin-top: 30px;
              grid-auto-columns: 1fr;
              grid-column-gap: 40px;
              grid-row-gap: 20px;
              grid-template-columns: 1fr;
              grid-template-rows: auto;
            }
          }
        }
      `}
    >
      <div className="wrapper">
        <div className="left-out" onClick={() => router.push(RoutePaths.HOME)}>
          {/* <Image src={<LuTimerReset />} preview={false} /> */}
          <TiArrowBack />
        </div>

        <div className="container">
          <h2>Quên mật khẩu</h2>
          {!emailSent ? (
            <>
              <p>Nhập Email để nhận mật khẩu mới.</p>
              <ResetPasswordForm setEmailSent={setEmailSent} />
            </>
          ) : (
            <>
              <p>
                A link to reset your password was sent to <span>{emailSent}</span>
              </p>
              <form className="form-wrapper">
                <div className="form-item">
                  <AppButton
                    btnTextColor="black"
                    btnSize="large"
                    btnStyle="solid"
                    btnWidth="full-w"
                    className="btn-login"
                    type="primary"
                    htmlType="submit"
                    // disabled={formik.isSubmitting}
                    onClick={() => router.push(RoutePaths.LOGIN)}
                  >
                    Done
                  </AppButton>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
