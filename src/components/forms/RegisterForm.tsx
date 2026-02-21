import { useFormik } from 'formik';
import { debounce } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import AppButton from 'src/components/button';
import ErrorMessage from 'src/components/error-message';
import AppInput from 'src/components/input';
import UserService from 'src/lib/api/user';
import regex from 'src/lib/utils/regularExpression';
import RoutePaths from 'src/lib/utils/routes';
import validation from 'src/lib/utils/validation';
import * as Yup from 'yup';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from '@emotion/react';

export const YOUR_GOOGLE_MAPS_API_KEY = 'AIzaSyAALCd4-WUGx4qZ3Zi0eCmBv2dKKbXhzVo';

const RegisterForm: React.FC = () => {
  const router = useRouter();
  // const avatarFile = React.useRef<File | null>(null);
  const [errorUploadImg, setErrorUploadImg] = React.useState<boolean>(false);
  const validationSchema = React.useRef(
    Yup.object().shape({
      full_name: Yup.string().required(validation.fullName.required),
      // .test('alphabet', validation.fullName.format, (value: any) => {
      //   if (value && value.length > 0) {
      //     return regex.alphabet.test(value.trim());
      //   }
      //   return false;
      // }),

      email: Yup.string()
        .required(validation.email.required)
        .email(validation.email.invalid)
        .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, validation.email.invalid)
        .test('existingEmail', validation.email.format, async (value?: string) => {
          try {
            if (!value) return false;
            const isExist = await debouncedApi(value);

            return !isExist?.exists;
          } catch (error) {
            return false;
          }
        }),
      // email: Yup.string()
      //   .required(validation.email.required)
      //   .email(validation.email.invalid)
      //   .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, validation.email.invalid)
      //   .test('email', validation.email.format, async (value: any) => {
      //     try {
      //       const emailExist = await UserService.existEmail(value);
      //       return !emailExist.exists;
      //     } catch (error) {
      //       return false;
      //     }
      //   }),
      password1: Yup.string().required(validation.password.required).matches(regex.password, {
        message: validation.password.invalidPwdRegex,
      }),
      password2: Yup.string()
        .required(validation.confirm.required)
        .test('passwords-match', validation.confirmPassword.doesNotMatch, function (value) {
          return this.parent.password1 === value;
        }),
    }),
  );

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [generalError, setGeneralError] = React.useState<string>('');
  const formik = useFormik({
    initialValues: {
      full_name: '',
      email: '',
      password1: '',
      password2: '',
      phone: '',
    },
    validationSchema: validationSchema.current,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      const { full_name, password1, password2, email } = values;
      try {
        setIsLoading(true);
        await UserService.register(email, password1, password2, full_name);
        localStorage.setItem('email_register', values?.email);
        router.push(RoutePaths.LOGIN);
      } catch (error: any) {
        console.log(error);
        setGeneralError(error.message);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const debouncedApi = debounce(UserService.existEmail, 500, {
    trailing: true,
  });
  const hasError = (key: string) => {
    return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
  };

  return (
    <>
      <h2 className="register-header">Tạo tài khoản</h2>
      <form
        css={css`
          display: flex;
          flex-direction: column;
          gap: 20px;

          .form-item {
            > span {
              text-decoration: underline;
              cursor: pointer;
            }
            width: 100%;
            .ant-checkbox + span {
              color: #fff;
              font-size: 16px;
              font-weight: 300;
            }
            .ant-btn {
              font-weight: 700;
            }
          }
          .half {
            width: fit-content;
            > button {
              width: 200px;
            }
          }
          .upload-avatar {
            .avatar {
              width: 100%;
              max-width: 152px;
              height: 152px;
              overflow: hidden;
              margin: 0 auto;
              border-radius: 50%;
              .ant-upload-picture-card-wrapper {
                height: 100%;
                .ant-upload {
                  border: none;
                  .non-image {
                    width: 100%;
                    height: 100%;
                    background-color: #ffa900;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    svg {
                      width: 22px;
                      height: 22px;
                    }
                    p {
                      max-width: 110px;
                      color: #fff;
                      font-weight: 700;
                    }
                  }
                }
              }
            }
            .avatar-error {
              text-align: center;
            }
          }
          .form-submit {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
          }
          .register-text {
            text-align: center;
            margin-bottom: 10px;
            font-family: FiraSans;
            color: #000;
            display: flex;
            gap: 15px;
            .login-here {
              transition: all 400ms ease;
              color: #333;
              font-weight: 700;
              text-decoration: none;
              text-transform: uppercase;
              margin: auto;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        `}
        className="register-form"
        onSubmit={formik.handleSubmit}
      >
        <div className="upload-avatar">
          {!hasError('avatar') && errorUploadImg && (
            <ErrorMessage className="avatar-error error">Cannot upload file. Please, choose another file.</ErrorMessage>
          )}
        </div>

        <div className="form-item">
          <AppInput
            requiredMark
            className="field login-field"
            label="Họ và Tên"
            name="full_name"
            type="string"
            placeholder="Full Name"
            value={formik.values.full_name}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasError={hasError('full_name')}
          />
          {hasError('full_name') ? <ErrorMessage className="error">{formik.errors.full_name}</ErrorMessage> : null}
        </div>

        <div className="form-item">
          <AppInput
            requiredMark
            className="field login-field"
            label="Email"
            name="email"
            type="email"
            disabled={isLoading}
            placeholder="Email"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.email}
            hasError={hasError('email')}
          />
          {hasError('email') ? <ErrorMessage className="error">{formik.errors.email}</ErrorMessage> : null}
        </div>
        <div className="form-item">
          <AppInput
            className="field login-field"
            requiredMark
            label="Mật khẩu"
            type="password"
            name="password1"
            placeholder="Password"
            showEye
            disabled={isLoading}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.password1}
            hasError={hasError('password1')}
          />
          {hasError('password1') ? <ErrorMessage className="error">{formik.errors.password1}</ErrorMessage> : null}
        </div>
        <div className="form-item">
          <AppInput
            className="field login-field"
            label="Nhập lại mật khẩu"
            requiredMark
            type="password"
            name="password2"
            placeholder="Confirm Password"
            showEye
            disabled={isLoading}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.password2}
            hasError={hasError('password2')}
          />
          {hasError('password2') ? <ErrorMessage className="error">{formik.errors.password2}</ErrorMessage> : null}
        </div>
        {generalError && generalError.length > 0 && <ErrorMessage>{generalError}</ErrorMessage>}
        <div className="form-submit">
          <div className="form-item half">
            <AppButton
              btnTextColor="black"
              btnSize="large"
              btnStyle="solid"
              btnWidth="fix-content"
              className="btn-login"
              borderRadius="5px"
              type="primary"
              htmlType="submit"
              onClick={() => {
                setTimeout(() => {
                  const errElement = document.querySelector('.error');
                  if (errElement) {
                    setTimeout(() => {
                      errElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                      });
                    }, 500);
                  }
                }, 2000);
              }}
            >
              Tạo tài khoản
            </AppButton>
          </div>
          <div className="register-text">
            <p>Đã có tài khoản?{'   '}</p>
            <Link className="login-here" href={RoutePaths.LOGIN}>
              Đăng nhập
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};
export default RegisterForm;
