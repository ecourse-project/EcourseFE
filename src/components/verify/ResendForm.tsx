import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import AppButton from 'src/components/button';
import AppInput from 'src/components/input';
import { ResetPassword1FieldData } from 'src/lib/types/commentType';
import RoutePaths from 'src/lib/utils/routes';
import validation from 'src/lib/utils/validation';
import * as Yup from 'yup';

import { css } from '@emotion/react';

import ErrorMessage from '../error-message';

interface ResendEmailFormProps {
  setError: () => void;
}

const ResendEmailForm: React.FC<ResendEmailFormProps> = ({ setError }) => {
  const router = useRouter();
  const validationSchema = React.useRef(
    Yup.object().shape({
      email: Yup.string()
        .required(validation.email.required)
        .email(validation.email.invalid)
        .matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, validation.email.invalid),
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
      try {
        // await AuthService.resendEmail(values?.email);
        localStorage.setItem('email_register', values?.email);
        setError();
        router.push(RoutePaths.VERIFY_ACCOUNT);
      } catch (error) {
        formik.setErrors({
          email: 'Email does not exist. Please contact admin.',
        });
      }
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
        .form-item {
          .ant-btn {
            font-weight: 700;
          }
        }
      `}
      className="form-wrapper"
      onSubmit={formik.handleSubmit}
    >
      <div className="form-item">
        <AppInput
          className="field email-field"
          label="Email*"
          name="email"
          // disabled={isLoading}
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
          Resend
        </AppButton>
      </div>
    </form>
  );
};

export default ResendEmailForm;
