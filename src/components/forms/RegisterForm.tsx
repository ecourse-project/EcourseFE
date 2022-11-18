/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import AppButton from 'src/components/button';
import ErrorMessage from 'src/components/error-message';
import AppInput from 'src/components/input';
import regex from 'src/utils/regularExpression';
import validation from 'src/utils/validation';
import * as Yup from 'yup';

import { debounce } from 'lodash';
import { useNavigate } from 'react-router-dom';
import UserService from 'src/services/user';
import RoutePaths from 'src/utils/routes';

export const YOUR_GOOGLE_MAPS_API_KEY =
	'AIzaSyAALCd4-WUGx4qZ3Zi0eCmBv2dKKbXhzVo';

const RegisterForm: React.FC = () => {
	const navigate = useNavigate();
	// const avatarFile = React.useRef<File | null>(null);
	const [errorUploadImg, setErrorUploadImg] = React.useState<boolean>(false);
	const validationSchema = React.useRef(
		Yup.object().shape({
			full_name: Yup.string()
				.required(validation.fullName.required)
				.test('alphabet', validation.fullName.format, (value: any) => {
					if (value && value.length > 0) {
						return regex.alphabet.test(value.trim());
					}
					return false;
				}),

			email: Yup.string()
				.required(validation.email.required)
				.email(validation.email.invalid)
				.matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, validation.email.invalid)
				.test(
					'existingEmail',
					validation.email.format,
					async (value?: string) => {
						try {
							if (!value) return false;
							// const x = await debounceCheckExist(value);
							const x = await debouncedApi(value);

							return !x?.exists || true;
						} catch (error) {
							return false;
						}
					}
				),
			password1: Yup.string()
				.required(validation.password.required)
				.matches(regex.password, {
					message: validation.password.invalidPwdRegex,
				}),
			password2: Yup.string()
				.required(validation.confirm.required)
				.test(
					'passwords-match',
					validation.confirmPassword.doesNotMatch,
					function (value) {
						return this.parent.password1 === value;
					}
				),
		})
	);

	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [isTickAgree, setIsTickAgree] = React.useState<boolean>(false);
	const [generalError, setGeneralError] = React.useState<string>('');
	const [inputphonePosition, setInputphonePosition] = React.useState<number>(0);
	// const userAsset = useSelector((state: RootState) => state.user.userAssets);
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
				const user = await UserService.register(
					email,
					password1,
					password2,
					full_name
				);
				localStorage.setItem('email_register', values?.email);
				navigate(RoutePaths.LOGIN);
			} catch (error) {
				console.log(error);
			}
		},
	});
	useEffect(() => {
		console.log('eroirr', formik.errors);
	}, [formik.errors]);
	// const debounceCheckExist = debounce(UserService.existEmail, 1000);
	const debouncedApi = debounce(UserService.existEmail, 300, {
		trailing: true,
	});
	const hasError = (key: string) => {
		return (
			Object.keys(formik.errors).length > 0 &&
			!!formik.errors[key] &&
			formik.touched[key]
		);
	};
	const onChange = (e: CheckboxChangeEvent) => {
		setIsTickAgree(e.target.checked);
	};

	return (
		<form
			css={css`
				display: grid;
				margin-top: 40px;
				grid-auto-columns: 1fr;
				grid-column-gap: 40px;
				grid-row-gap: 30px;
				grid-template-columns: 1fr;
				grid-template-rows: auto;
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
			`}
			className="register-form"
			onSubmit={formik.handleSubmit}
		>
			<div className="upload-avatar">
				{/* <div className="avatar">
					<AvatarUpload
						getImageFile={getImageFile}
						errorUploadImg={errorUploadImg}
					/>
				</div> */}
				{!hasError('avatar') && errorUploadImg && (
					<ErrorMessage className="avatar-error error">
						Cannot upload file. Please, choose another file.
					</ErrorMessage>
				)}
			</div>

			<div className="form-item">
				<AppInput
					requiredMark
					className="field firstName-field"
					label="Full Name"
					name="full_name"
					type="string"
					placeholder="Full Name"
					value={formik.values.full_name}
					handleChange={formik.handleChange}
					handleBlur={formik.handleBlur}
					hasError={hasError('full_name')}
				/>
				{hasError('full_name') ? (
					<ErrorMessage className="error">
						{formik.errors.full_name}
					</ErrorMessage>
				) : null}
			</div>

			<div className="form-item">
				<AppInput
					requiredMark
					className="field email-field"
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
				{hasError('email') ? (
					<ErrorMessage className="error">{formik.errors.email}</ErrorMessage>
				) : null}
			</div>
			<div className="form-item">
				<AppInput
					className="field password-field"
					requiredMark
					label="Password"
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
				{hasError('password1') ? (
					<ErrorMessage className="error">
						{formik.errors.password1}
					</ErrorMessage>
				) : null}
			</div>
			<div className="form-item">
				<AppInput
					className="field confirm-field"
					label="Confirm Password"
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
				{hasError('password2') ? (
					<ErrorMessage className="error">
						{formik.errors.password2}
					</ErrorMessage>
				) : null}
			</div>
			{/* <div className="form-item">
				<Checkbox onChange={onChange}>I agree to all statements in</Checkbox>
				<span
					onClick={() => {
						const url =
							window.location.origin + RoutePaths.TERMS_AND_CONDITIONS;
						window.open(url, '_blank');
					}}
				>
					Terms of Service
				</span>
			</div> */}
			{generalError && generalError.length > 0 && (
				<ErrorMessage>{generalError}</ErrorMessage>
			)}
			<div className="form-item">
				<AppButton
					btnTextColor="black"
					btnSize="large"
					btnStyle="solid"
					btnWidth="full-w"
					className="btn-login"
					borderRadius="5px"
					type="primary"
					htmlType="submit"
					// disabled={!isTickAgree || formik.isSubmitting}
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
					Create Account
				</AppButton>
			</div>
		</form>
	);
};
export default RegisterForm;
