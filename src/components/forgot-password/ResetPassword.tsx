import ArrowLeft from 'src/assets/images/arrow-left.svg';
import { Image } from 'antd';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import { navigate } from 'gatsby';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import RoutePaths from 'src/utils/routes';
import AppButton from '../button';
import ResetPasswordForm from './ResetPassworForm';
const ResetPassword: React.FC = () => {
	const navigate = useNavigate();
	const [emailSent, setEmailSent] = useState<string>('');
	return (
		<div
			css={css`
				min-height: 100vh;
				padding-top: 30px;
				padding-bottom: 0px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background-color: #e7edf3;
				width: 100%;
				padding: 30px 20px 30px;
				.wrapper {
					max-width: 522px;
					width: 100%;
					font-weight: 300;
					position: relative;
					.left-out {
						position: absolute;
						color: #fff;
						z-index: 999;
						top: 20px;
						left: 28px;
						font-size: 20px;
						font-weight: 700;
						cursor: pointer;
					}
					.container {
						padding: 50px 35px;
						border-radius: 20px;
						background-color: #000;
						background-image: none;
						backdrop-filter: blur(14px);
						color: #fff;
						> h2 {
							font-family: FiraSans;
							color: #fff;
							text-align: center;
							margin-bottom: 20px;
							font-size: 30px;
							font-weight: 700;
						}
						> p {
							font-size: 17px;
							color: #fff;
							text-align: center;
							> span {
								font-weight: 700;
							}
						}
						.form-wrapper {
							display: grid;
							margin-top: 30px;
							grid-auto-columns: 1fr;
							grid-column-gap: 40px;
							grid-row-gap: 20px;
							grid-template-columns: 1fr;
							grid-template-rows: auto;
						}
					}
				}
			`}
		>
			<div className="wrapper">
				<div className="left-out" onClick={() => navigate(RoutePaths.LOGIN)}>
					<Image src={ArrowLeft} preview={false} />
				</div>

				<div className="container">
					<h2>Reset Password</h2>
					{!emailSent ? (
						<>
							<p>Enter your email address to reset your password.</p>
							<ResetPasswordForm setEmailSent={setEmailSent} />
						</>
					) : (
						<>
							<p>
								A link to reset your password was sent to{' '}
								<span>{emailSent}</span>
							</p>
							<form className="form-wrapper">
								<div className="form-item">
									<AppButton
										btnTextColor="black"
										btnSize="large"
										btnStyle="solid"
										btnWidth="full-w"
										className="btn-login"
										type="primary"
										htmlType="submit"
										// disabled={formik.isSubmitting}
										onClick={() => navigate('/login')}
									>
										Done
									</AppButton>
								</div>
							</form>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
