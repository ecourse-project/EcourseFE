import { css } from '@emotion/react';
// import { navigate } from 'gatsby';
import React from 'react';
import AppButton from 'src/components/button';
import AuthService from 'src/lib/api/auth';
import { getQueryParam } from 'src/lib/utils/query';
import Form from 'src/components/verify/ResendForm';
import RoutePaths from 'src/lib/utils/routes';
import { FaRegUser } from 'react-icons/fa';
import ArrowLeft from 'src/assets/images/arrow-left.svg';
import { Image } from 'antd';
interface VerifyParams {
  token?: string;
  resend?: boolean;
}

const VerifyUI: React.FC = () => {
  const [isError, setIsError] = React.useState<boolean>(false);
  const params = getQueryParam<VerifyParams>();
  const emailRegister = localStorage.getItem('email_register');
  const verifyToken = async () => {
    try {
      if (params?.token) {
        // await AuthService.verifyEmail(params?.token);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };
  React.useEffect(() => {
    if (params?.token) {
      verifyToken();
    }
  }, []);
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
        .section-verify {
          max-width: 480px;
          width: 100%;
          font-weight: 300;
          .wrapper-verify {
            padding: 50px;
            border-radius: 20px;
            background-color: #051d29;
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
                  font-size: 30px;
                }
                .left-out {
                  position: absolute;
                  color: #fff;
                  z-index: 999;
                  top: 20px;
                  left: 28px;
                  font-size: 20px;
                  font-weight: 700;
                  cursor: pointer;
                }
              }
            }
            .verify-header {
              font-family: FiraSans;
              margin-top: 20px;
              border-radius: 5px;
              color: #fff;
              text-align: center;
              margin-bottom: 30px;
              font-size: 34px;
              line-height: 36px;
              font-weight: 700;
            }
            .verify-content {
              p {
                width: 100%;
                max-width: 302px;
                margin: 0 auto;
                margin-bottom: 30px;
                text-align: center;
                span {
                  font-weight: 700;
                }
              }
            }
            .verify-btn {
              .ant-btn {
                font-weight: 700;
              }
            }
          }
        }
      `}
    >
      <div className="section-verify">
        <div className="wrapper-verify">
          <div className="user-avatar">
            <div className="user-wrapper">
              <div
                className="left-out"
                // onClick={() => router.push(RoutePaths.LOGIN)}
              >
                <Image src={ArrowLeft} preview={false} />
              </div>
              <h2>
                <FaRegUser />
              </h2>
            </div>
          </div>
          <h2 className="verify-header">
            {isError || params.resend ? 'Resend Email' : params?.token ? 'Email Confirmed' : 'Verify Email'}
          </h2>
          {params?.resend ? (
            <div className="verify-content">
              <Form
                setError={() => {
                  setIsError(false);
                }}
              />
            </div>
          ) : !isError ? (
            <div className="verify-content">
              {!params?.token && emailRegister && (
                <p>
                  A link to verify your email was sent to <span>{emailRegister}</span>
                </p>
              )}
              <p>
                {params?.token
                  ? 'Your email has been verified successfully and you can now login!'
                  : 'Please click the verification link in the email to activate your account.'}
              </p>
            </div>
          ) : (
            <div className="verify-content">
              <Form
                setError={() => {
                  setIsError(false);
                }}
              />
            </div>
          )}
          {params?.resend
            ? null
            : !isError && (
                <div className="verify-btn">
                  <AppButton
                    btnTextColor="black"
                    btnSize="large"
                    btnStyle="solid"
                    btnWidth="full-w"
                    className="btn-login"
                    type="primary"
                    onClick={() => {
                      localStorage.removeItem('email_register');
                      // router.push(RoutePaths.LOGIN);
                    }}
                  >
                    {params?.token ? 'Continue to Login' : 'Okay'}
                  </AppButton>
                </div>
              )}
        </div>
      </div>
    </div>
  );
};

const VerifySection: React.FC = () => {
  return (
    <>
      <VerifyUI />
    </>
  );
};

export default VerifySection;
