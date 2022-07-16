/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox/Checkbox';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import AppButton from 'src/components/button';
import ErrorMessage from 'src/components/error-message';
import AppInput from 'src/components/input';
import AppSelect from 'src/components/select';
import regex from 'src/utils/regularExpression';
import validation from 'src/utils/validation';
// import AvatarUpload from 'src/components/upload-avatar';
import * as Yup from 'yup';
// import UserService from 'src/services/user';
import { useSelector } from 'react-redux';
// import { RootState } from 'src/reducers/model';
// import { navigate } from 'gatsby';
import { formatPhoneNumber } from 'src/utils/format';
import { UserType } from 'src/utils/enum';
import RoutePaths from 'src/utils/routes';
import { useNavigate } from 'react-router-dom';
export interface InitForm {
	username?: string;
	email: string;
	password1: string;
	password2: string;
	first_name: string;
	last_name: string;
	website_url?: string;
}

const RegisterForm: React.FC = () => {
	const navigate = useNavigate();
	// const avatarFile = React.useRef<File | null>(null);
	const [errorUploadImg, setErrorUploadImg] = React.useState<boolean>(false);
	const validationSchema = React.useRef(
		Yup.object().shape({
			username: Yup.string()
				.required(validation.username.required)
				.test(
					'existingUsername',
					validation.username.format,
					async (value: any) => {
						try {
							const userExist = await checkExisted(value);
							return !userExist;
						} catch (error) {
							return false;
						}
					}
				),

			first_name: Yup.string()
				.required(validation.firstName.required)
				.test('alphabet', validation.firstName.format, (value: any) => {
					if (value && value.length > 0) {
						return regex.alphabet.test(value.trim());
					}
					return false;
				}),
			last_name: Yup.string()
				.required(validation.lastName.required)
				.test('alphabet', validation.lastName.format, (value: any) => {
					if (value && value.length > 0) {
						return regex.alphabet.test(value.trim());
					}
					return false;
				}),

			// phone: Yup.string()
			// 	.required(validation.phone.required)
			// 	.matches(regex.phoneNumber, {
			// 		message: validation.phone.invalid,
			// 	}),
			website_url: Yup.string().notRequired(),
			// .when('user_type', {
			// 	is: (user_type: string) => user_type !== UserType.MANAGER,
			// 	then: Yup.string()
			// 		.required(validation.website.required)
			// 		.matches(validation.website.regWeb, {
			// 			message: validation.website.url,
			// 		}),
			// }),
			email: Yup.string()
				.required(validation.email.required)
				.email(validation.email.invalid)
				.matches(/^[\w.-]+@([\w-]+\.)+[\w-]{1,4}$/, validation.email.invalid)
				.test('existingEmail', validation.email.format, async (value: any) => {
					try {
						const emailExist = await checkExisted('', value);
						return !emailExist;
					} catch (error) {
						return false;
					}
				}),
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

	useEffect(() => {
		const x = async () => {
			const res = await checkExisted('CuongNHT');
			console.log(res);
		};
		x();
	}, []);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [isTickAgree, setIsTickAgree] = React.useState<boolean>(false);
	const [generalError, setGeneralError] = React.useState<string>('');
	// const userAsset = useSelector((state: RootState) => state.user.userAssets);
	const formik = useFormik<InitForm>({
		initialValues: {
			username: '',
			first_name: '',
			last_name: '',
			email: '',
			password1: '',
			password2: '',
			website_url: '',
		},
		validationSchema: validationSchema.current,
		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: async (values) => {
			const { username, first_name, last_name, email, password1, password2 } =
				values;
			setIsLoading(true);
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: username,
					password: password1,
					password2: password2,
					email: email,
					first_name: first_name,
					last_name: last_name,
					avatar: 'D:/hinh/Thailand/IMG_0244.jpg',
				}),
			};
			const response = await fetch(
				'http://127.0.0.1:8000/api/users-auth/registration/',
				requestOptions
			);
			console.log(response);
			if (response.ok) {
				navigate('/login');
			}
			const data = await response.json();
			console.log('data', data);
			// try {
			// 	if (values?.user_type === UserType.MANAGER) {
			// 		delete values.dre;
			// 		delete values.market;
			// 		delete values.website_url;
			// 	}
			// 	values.last_name = values?.last_name.trim();
			// 	values.first_name = values?.first_name.trim();
			// 	values.phone = `+1${values.phone}`;
			// 	if (!values.avatar) {
			// 		delete values.avatar;
			// 	}
			// 	await UserService.register(values);
			// 	localStorage.setItem('email_register', values?.email);
			// 	navigate(RoutePaths.VERIFY_ACCOUNT);
			// } catch (error) {
			// 	values.phone = values.phone.slice(2);
			// 	setGeneralError(error.message);
			// } finally {
			// 	formik.setSubmitting(false);
			// 	setIsLoading(false);
			// }
		},
	});
	const checkExisted = async (username = '', email = '') => {
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			// body: JSON.stringify({ username: username, password: password }),
		};
		const response = await fetch(
			`http://127.0.0.1:8000/api/users/exists/?username=${username}&email=${email}`,
			requestOptions
		);
		const res = await response.json();
		return res.exists;
	};
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
					label="Username"
					name="username"
					type="string"
					placeholder="User Name"
					value={formik.values.username}
					handleChange={formik.handleChange}
					handleBlur={formik.handleBlur}
					hasError={hasError('username')}
				/>
				{hasError('username') ? (
					<ErrorMessage className="error">
						{formik.errors.username}
					</ErrorMessage>
				) : null}
			</div>
			<div className="form-item">
				<AppInput
					requiredMark
					className="field firstName-field"
					label="First Name"
					name="first_name"
					type="string"
					placeholder="First Name"
					value={formik.values.first_name}
					handleChange={formik.handleChange}
					handleBlur={formik.handleBlur}
					hasError={hasError('first_name')}
				/>
				{hasError('first_name') ? (
					<ErrorMessage className="error">
						{formik.errors.first_name}
					</ErrorMessage>
				) : null}
			</div>
			<div className="form-item">
				<AppInput
					className="field lastName-field"
					label="Last Name"
					requiredMark
					name="last_name"
					type="string"
					disabled={isLoading}
					placeholder="Last Name"
					handleChange={formik.handleChange}
					handleBlur={formik.handleBlur}
					value={formik.values.last_name}
					hasError={hasError('last_name')}
				/>
				{hasError('last_name') ? (
					<ErrorMessage className="error">
						{formik.errors.last_name}
					</ErrorMessage>
				) : null}
			</div>
			{/* <div className="form-item">
				<AppInput
					className="field dre-field"
					label="Phone Number"
					requiredMark
					name="phone"
					disabled={isLoading}
					placeholder="(XXX) XXX-XXXX"
					type="string"
					value={formik.values.phone}
					handleChange={(e) => {
						const formattedPhone = formatPhoneNumber(e.target.value);
						formik.setFieldValue('phone', formattedPhone, false);
					}}
					handleBlur={formik.handleBlur}
					hasError={hasError('phone')}
				/>
				{hasError('phone') ? (
					<ErrorMessage className="error">{formik.errors.phone}</ErrorMessage>
				) : null}
			</div> */}

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
			<div className="form-item">
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
			</div>
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
					disabled={!isTickAgree || formik.isSubmitting}
					onClick={() => {
						console.log('click');
						// setTimeout(() => {
						// 	const errElement = document.querySelector('.error');
						// 	if (errElement) {
						// 		setTimeout(() => {
						// 			errElement.scrollIntoView({
						// 				behavior: 'smooth',
						// 				block: 'center',
						// 			});
						// 		}, 500);
						// 	}
						// }, 2000);
					}}
				>
					Create Account
				</AppButton>
			</div>
		</form>
	);
};
export default RegisterForm;
