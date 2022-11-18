/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox';
import axios from 'axios';
import { useFormik } from 'formik';
// import { Link, navigate } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { accountApi } from 'src/apis/pokeApi';
import AppButton from 'src/components/button';
import ErrorMessage from 'src/components/error-message';
import AppInput from 'src/components/input';
import { useQueryParam } from 'src/hooks/useQueryParam';
import { LoginFormData, LoginQueryParams } from 'src/models';
import AuthService from 'src/services/auth';
import { LoginParams } from 'src/services/auth/model';
// import UserService from 'src/services/user';
import { StorageKeys, UserType } from 'src/utils/enum';
import RoutePaths from 'src/utils/routes';
import validation from 'src/utils/validation';
import * as Yup from 'yup';

const LoginForm: React.FC = () => {
	const navigate = useNavigate();
	const validationSchema = React.useRef(
		Yup.object().shape({
			email: Yup.string()
				.required(validation.email.required)
				.email(validation.email.invalid)
				.matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, validation.email.invalid),
			password: Yup.string().required(validation.password.required),
		})
	);
	const queryParams = useQueryParam<LoginQueryParams>();
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [loginError, setLoginError] = React.useState<string>('');
	const [rememberMe, setRememberMe] = useState(
		localStorage.getItem(StorageKeys.REMEMBER_ME_KEY) === 'true' ? true : false
	);
	const registerEmail = localStorage.getItem('email_register');
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
				navigate('/');
				localStorage.setItem(
					StorageKeys.SESSION_KEY,
					response.access.toString()
				);
			} catch (error) {
				setLoginError((error as Error).message);
			} finally {
				setIsLoading(false);
				formik.setSubmitting(false);
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
	const onRememberMeChange = (e: CheckboxChangeEvent) => {
		localStorage.setItem(StorageKeys.REMEMBER_ME_KEY, `${e.target.checked}`);
		setRememberMe(e.target.checked);
	};
	return (
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
				.form-item-bot {
					width: 100%;
					display: flex;
					.form-item-checkbox {
						width: 50%;
						margin-right: 20px;
						.ant-checkbox + span {
							color: #fff;
							font-size: 18px;
							font-weight: 300;
						}
					}
					.forgot-pwd {
						width: 50%;
						color: #fff;
						font-size: 18px;
						&:hover {
							text-decoration: underline;
						}
					}
				}
			`}
			className="login-form"
			onSubmit={formik.handleSubmit}
		>
			<div className="form-item">
				<AppInput
					className="field email-field"
					label=""
					name="email"
					disabled={isLoading}
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
				<AppInput
					className="field password-field"
					label=""
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
				{hasError('password') ? (
					<ErrorMessage>{formik.errors.password}</ErrorMessage>
				) : null}
				{loginError &&
					loginError.length > 0 &&
					!hasError('password') &&
					!hasError('email') && <ErrorMessage>{loginError}</ErrorMessage>}
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
					Login
				</AppButton>
			</div>
			<div className="form-item-bot">
				{/* <div className="form-item-checkbox">
					<Checkbox checked={rememberMe} onChange={onRememberMeChange}>
						Remember me
					</Checkbox>
				</div> */}
				<Link className="forgot-pwd" to={RoutePaths.FORGOT_PASSWORD}>
					Forgot password?
				</Link>
			</div>
		</form>
	);
};
export default LoginForm;
