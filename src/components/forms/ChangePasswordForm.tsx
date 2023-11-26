import { useFormik } from 'formik';
import React, { useState } from 'react';
import { AlertTextSuccess } from 'src/components/alert/SweetAlert';
import AppButton from 'src/components/button';
import ErrorMessage from 'src/components/error-message';
import AppInput from 'src/components/input';
import CourseService from 'src/lib/api/course';
import { ChangePasswordFieldData } from 'src/lib/types/appType';
import regex from 'src/lib/utils/regularExpression';
import validation from 'src/lib/utils/validation';
import theme from 'src/styles/theme';
import * as Yup from 'yup';

import { css } from '@emotion/react';

const ChangePasswordForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = React.useRef(
    Yup.object().shape({
      currentPassword: Yup.string().required(validation.changePassword.required),
      changePassword: Yup.string().required(validation.changePassword.required).matches(regex.password, {
        message: validation.password.invalidPwdRegex,
      }),
      confirmPassword: Yup.string()
        .required(validation.confirmPassword.required)
        .oneOf([Yup.ref('changePassword')], validation.confirmPassword.doesNotMatch),
    }),
  );

  const formik = useFormik<ChangePasswordFieldData>({
    initialValues: {
      currentPassword: '',
      changePassword: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema.current,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      const { currentPassword, changePassword, confirmPassword } = values;
      try {
        setIsLoading(true);
        await CourseService.changePwd(currentPassword, changePassword, confirmPassword);
        AlertTextSuccess('Save Changes Succeeded', 'Password was changed successfully');

        formik.resetForm();
      } catch (error: any) {
        formik.setErrors({
          currentPassword: error.message,
        });
      } finally {
        setIsLoading(false);
        formik.setSubmitting(false);
      }
    },
  });
  const hasError = (key: string) => {
    return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
  };

  return (
    <div
      css={css`
        margin-top: 40px;
        > h2 {
          margin-top: 0px;
          margin-bottom: 10px;
          font-family: 'Fira Sans', sans-serif;
          font-size: 34px;
          line-height: 36px;
          font-weight: 700;
          @media (max-width: ${theme.media.tablets}px) {
            font-size: 24px;
          }
        }
        .form-wrapper {
          .form-container {
            display: grid;
            margin-top: 40px;
            grid-auto-columns: 1fr;
            grid-column-gap: 20px;
            grid-row-gap: 32px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            .form-item-half {
              grid-row-start: span 1;
              grid-row-end: span 1;
              grid-column-start: span 1;
              grid-column-end: span 1;
              align-self: end;
              margin-bottom: 10px;
              position: relative;
              .form-item-error {
                position: absolute;
              }
              @media (max-width: ${theme.media.tablets}px) {
                grid-column-start: span 2;
                grid-column-end: span 2;
              }
            }
            .form-item-full {
              grid-row-start: span 1;
              grid-row-end: span 1;
              grid-column-start: span 2;
              grid-column-end: span 2;
              margin-bottom: 10px;
              position: relative;
              .form-item-error {
                position: absolute;
              }
            }
            .form-item-button {
              grid-row-start: span 1;
              grid-row-end: span 1;
              grid-column-start: span 2;
              grid-column-end: span 2;
              justify-self: stretch;
            }
          }
        }
      `}
    >
      <h2>Đổi mật khẩu</h2>
      <form className="form-wrapper" onSubmit={formik.handleSubmit}>
        <div className="form-container">
          <div className="form-item-full">
            <AppInput
              showEye
              className="field name-field"
              label="Mật khẩu hiện tại"
              name="currentPassword"
              type="password"
              placeholder="Mật khẩu hiện tại"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.currentPassword}
              hasError={hasError('currentPassword')}
              disabled={isLoading}
            />
            {hasError('currentPassword') ? (
              <ErrorMessage className="form-item-error">{formik.errors.currentPassword}</ErrorMessage>
            ) : null}
          </div>
          <div className="form-item-half">
            <AppInput
              showEye
              className="field name-field"
              label="Mật khẩu mới"
              name="changePassword"
              type="password"
              placeholder="Mật khẩu mới"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.changePassword}
              hasError={hasError('changePassword')}
              disabled={isLoading}
            />
            {hasError('changePassword') ? (
              <ErrorMessage className="form-item-error">{formik.errors.changePassword}</ErrorMessage>
            ) : null}
          </div>
          <div className="form-item-half">
            <AppInput
              showEye
              className="field name-field"
              label="Nhập lại mật khẩu mới"
              name="confirmPassword"
              type="password"
              placeholder="Nhập lại mật khẩu mới"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              hasError={hasError('confirmPassword')}
              disabled={isLoading}
            />
            {hasError('confirmPassword') ? (
              <ErrorMessage className="form-item-error">{formik.errors.confirmPassword}</ErrorMessage>
            ) : null}
          </div>
          <div className="form-item-button">
            <AppButton
              btnTextColor="white"
              btnSize="large"
              btnStyle="solid"
              btnWidth="fix-content"
              className="btn-setting"
              type="primary"
              htmlType="submit"
              nonBordered
              disabled={formik.isSubmitting}
            >
              Lưu thay đổi
            </AppButton>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ChangePasswordForm;
