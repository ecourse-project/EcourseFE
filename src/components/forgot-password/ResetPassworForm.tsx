import { useFormik } from 'formik';
import React from 'react';
import AppButton from 'src/components/button';
import AppInput from 'src/components/input';
import AuthService from 'src/lib/api/auth';
import { ResetPassword1FieldData } from 'src/lib/types/appType';
// import UserService from 'src/lib/api/user';
import validation from 'src/lib/utils/validation';
import * as Yup from 'yup';

import { css } from '@emotion/react';

import ErrorMessage from '../error-message';

interface ResetPasswordProps {
  setEmailSent?: (email: string) => void;
}
const ResetPasswordForm: React.FC<ResetPasswordProps> = ({ setEmailSent }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const validationSchema = React.useRef(
    Yup.object().shape({
      email: Yup.string()
        .trim()
        .required(validation.email.required)
        .email(validation.email.invalid)
        .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, validation.email.invalid),
      // .test('existingEmail', validation.email.exist, async (value: any) => {
      // 	try {
      // 		const emailExist = await UserService.existsEmail(value);
      // 		return emailExist;
      // 	} catch (error) {
      // 		return false;
      // 	}
      // }),
    }),
  );
  const formik = useFormik<ResetPassword1FieldData>({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema.current,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      const { email } = values;

      setIsLoading(true);
      AuthService.resetPassword(email)
        .then(() => {
          setEmailSent && setEmailSent(email);
        })
        .catch((error) => {
          console.log('error', error.response.data.detail);
          formik.setErrors({
            email: error.response.data.detail,
          });
        })
        .finally(() => {
          setIsLoading(false);
          formik.setSubmitting(false);
        });
    },
  });
  const hasError = (key: string) => {
    return Object.keys(formik.errors).length > 0 && !!formik.errors[key] && formik.touched[key];
  };
  return (
    <form
      css={css`
        display: grid;
        margin-top: 30px;
        grid-auto-columns: 1fr;
        grid-column-gap: 40px;
        grid-row-gap: 20px;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      `}
      className="form-wrapper"
      onSubmit={formik.handleSubmit}
    >
      <div className="form-item">
        <AppInput
          className="field login-field"
          label="Email*"
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
          Xác nhận
        </AppButton>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
