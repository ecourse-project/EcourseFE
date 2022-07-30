import { css } from '@emotion/react';
import { useFormik } from 'formik';
// import { navigate } from 'gatsby';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import AppButton from 'src/components/button';
import AppInput from 'src/components/input';
import { ResetPassword1FieldData } from 'src/models';
// import AuthService from 'src/services/auth';
import RoutePaths from 'src/utils/routes';
import validation from 'src/utils/validation';
import * as Yup from 'yup';
import ErrorMessage from '../error-message';

interface ResendEmailFormProps {
	setError: () => void;
}

const ResendEmailForm: React.FC<ResendEmailFormProps> = ({ setError }) => {
	const navigate = useNavigate();
	const validationSchema = React.useRef(
		Yup.object().shape({
			email: Yup.string()
				.required(validation.email.required)
				.email(validation.email.invalid)
				.matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, validation.email.invalid),
		})
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
				navigate(RoutePaths.VERIFY_ACCOUNT);
			} catch (error) {
				formik.setErrors({
					email: 'Email does not exist. Please contact admin.',
				});
			}
		},
	});
	const hasError = (key: string) => {
		return (
			Object.keys(formik.errors).length > 0 &&
			!!formik.errors[key] &&
			formik.touched[key]
		);
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
				{hasError('email') ? (
					<ErrorMessage>{formik.errors.email}</ErrorMessage>
				) : null}
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
