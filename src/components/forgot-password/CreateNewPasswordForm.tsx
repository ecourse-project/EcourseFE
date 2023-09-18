import { useFormik } from 'formik';
import React from 'react';
import AppButton from 'src/components/button';
import AppInput from 'src/components/input';
import { CreateNewPasswordFormFieldData } from 'src/lib/types/commentType';
import regex from 'src/lib/utils/regularExpression';
import validation from 'src/lib/utils/validation';
import * as Yup from 'yup';

import { css } from '@emotion/react';

import ErrorMessage from '../error-message';

interface ResetPasswordFormProps {
  uid: string;
  token: string;
  sentSuccessfully: (value: boolean) => void;
}
const CreateNewPasswordForm: React.FC<ResetPasswordFormProps> = ({ uid, token, sentSuccessfully }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const validationSchema = React.useRef(
    Yup.object().shape({
      password: Yup.string().required(validation.password.required).matches(regex.password, {
        message: validation.password.invalidPwdRegex,
      }),
      confirmPassword: Yup.string()
        .required(validation.password.required)
        .oneOf([Yup.ref('password')], validation.confirmPassword.doesNotMatch),
    }),
  );
  const formik = useFormik<CreateNewPasswordFormFieldData>({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema.current,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      setIsLoading(true);
      // AuthService.resetPasswordConfirm(values.password, uid, token)
      // 	.then(() => {
      // 		sentSuccessfully(true);
      // 	})
      // 	.catch((error) => {
      // 		formik.setErrors({
      // 			password: error.message,
      // 		});
      // 	})
      // 	.finally(() => {
      // 		setIsLoading(false);
      // 		formik.setSubmitting(false);
      // 	});
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
          showEye
          className="field password-field"
          label="Password*"
          name="password"
          type="password"
          disabled={isLoading}
          placeholder="Password"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.password}
          hasError={hasError('password')}
        />
        {hasError('password') ? <ErrorMessage>{formik.errors.password}</ErrorMessage> : null}
      </div>
      <div className="form-item">
        <AppInput
          showEye
          className="field password-field"
          label="Confirm Password*"
          name="confirmPassword"
          type="password"
          disabled={isLoading}
          placeholder="Confirm Password"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          hasError={hasError('confirmPassword')}
        />
        {hasError('confirmPassword') ? <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage> : null}
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
          Submit
        </AppButton>
      </div>
    </form>
  );
};

export default CreateNewPasswordForm;
