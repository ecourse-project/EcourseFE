import { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AppButton from 'src/components/button';
import ErrorMessage from 'src/components/error-message';
import AppInput from 'src/components/input';
import AuthService from 'src/lib/api/auth';
import { LoginParams } from 'src/lib/api/auth/model';
import CourseService from 'src/lib/api/course';
import UserService from 'src/lib/api/user';
import { appActions } from 'src/lib/reducers/app/appSlice';
import { LoginFormData } from 'src/lib/types/appType';
import { StorageKeys } from 'src/lib/utils/enum';
import validation from 'src/lib/utils/validation';
import * as Yup from 'yup';

import { css } from '@emotion/react';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const validationSchema = React.useRef(
    Yup.object().shape({
      email: Yup.string()
        .required(validation.email.required)
        .email(validation.email.invalid)
        .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, validation.email.invalid),
      password: Yup.string().required(validation.password.required),
    }),
  );
  const queryParams = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [loginError, setLoginError] = React.useState<string>('');
  const [rememberMe, setRememberMe] = useState(
    localStorage.getItem(StorageKeys.REMEMBER_ME_KEY) === 'true' ? true : false,
  );
  const registerEmail = localStorage.getItem('email_register');
  const dispatch = useDispatch();
  const formik = useFormik<LoginFormData>({
    initialValues: {
      email: registerEmail || '',
      password: '',
    },
    validationSchema: validationSchema.current,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values: LoginParams) => {
      const { email, password } = values;
      try {
        const response = await AuthService.signIn(email, password);
        localStorage.setItem(StorageKeys.SESSION_KEY, JSON.stringify(response));
        const [profile, init] = await Promise.all([UserService.myInfo(), CourseService.initData()]);
        dispatch(appActions.setMyProfile(profile));
        router.push(queryParams.asPath.split('?redirect_url=')[1] || '/');
      } catch (error: any) {
        if (error.response.data.detail?.includes('No active account found with the given credentials'))
          setLoginError('Email hoặc mật khẩu không đúng');
        else setLoginError(error.detail);
      } finally {
        setIsLoading(false);
        formik.setSubmitting(false);
      }
    },
  });
  React.useEffect(() => {
    localStorage.clear();
  }, []);

  const hasError = (key: string) => {
    return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
  };
  const onRememberMeChange = (e: CheckboxChangeEvent) => {
    localStorage.setItem(StorageKeys.REMEMBER_ME_KEY, `${e.target.checked}`);
    setRememberMe(e.target.checked);
  };
  return (
    <>
      <form
        css={css`
          display: grid;
          margin-top: 40px;
          grid-auto-columns: 1fr;
          grid-column-gap: 40px;
          grid-row-gap: 20px;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          .form-item {
            width: 100%;
            .ant-btn {
              font-weight: 700;
            }
          }
        `}
        className="login-form"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-item">
          <AppInput
            className="field login-field"
            label="Email"
            name="email"
            disabled={isLoading}
            placeholder="Email"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.email}
            hasError={hasError('email')}
          />
          {hasError('email') ? <ErrorMessage>{formik.errors.email}</ErrorMessage> : null}
        </div>
        <div className="form-item">
          <AppInput
            className="field login-field"
            label="Mật khẩu"
            type="password"
            name="password"
            placeholder="Password"
            showEye
            disabled={isLoading}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.password}
            hasError={hasError('password')}
          />
          {hasError('password') ? <ErrorMessage>{formik.errors.password}</ErrorMessage> : null}
          {loginError && loginError.length > 0 && !hasError('password') && !hasError('email') && (
            <ErrorMessage>{loginError}</ErrorMessage>
          )}
        </div>

        <div className="form-item">
          <AppButton
            btnTextColor="black"
            btnSize="large"
            btnStyle="solid"
            btnWidth="full-w"
            className="btn-login"
            type="primary"
            htmlType="submit"
            disabled={formik.isSubmitting}
          >
            Đăng nhập
          </AppButton>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
