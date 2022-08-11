import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import AppButton from 'src/components/button';
import { useQueryParam } from 'src/hooks/useQueryParam';
import RoutePaths from 'src/utils/routes';
import CreateNewPasswordForm from './CreateNewPasswordForm';
interface ForgotPasswordParams {
	uid: string;
	token: string;
}
const CreateNewPassword: React.FC = () => {
	const navigate = useNavigate();
	const [isRequestSent, setStateRequest] = useState<boolean>(false);
	const { uid, token } = useQueryParam<ForgotPasswordParams>();
	React.useEffect(() => {
		if (!token || !uid) {
			navigate(RoutePaths.LOGIN);
		}
	}, []);

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
					.container {
						padding: 50px 35px;
						border-radius: 20px;
						background-color: #051d29;
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
				<div className="container">
					<h2>Reset Password</h2>
					{!isRequestSent ? (
						<>
							<p>Please create a new password.</p>
							<CreateNewPasswordForm
								uid={uid}
								token={token}
								sentSuccessfully={setStateRequest}
							/>
						</>
					) : (
						<>
							<p>Your password has been reset successfully!</p>
							<form className="form-wrapper">
								<div className="form-item">
									<AppButton
										btnTextColor="black"
										btnSize="large"
										btnStyle="solid"
										btnWidth="full-w"
										className="btn-login"
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

export default CreateNewPassword;
