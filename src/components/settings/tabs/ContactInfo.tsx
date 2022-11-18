/* eslint-disable react/display-name */
import { css } from '@emotion/react';
import { message, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';
import isEqual from 'react-fast-compare';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/apps/hooks';
// import UserAvatar from 'src/components/avatar/LetteredAvatar';
import ChangePasswordForm from 'src/components/forms/ChangePasswordForm';
// import ContactSettingForm from 'src/components/forms/ContactSettingForm';
import { RootState } from 'src/reducers/model';
import theme from 'src/styles/theme';
interface AvatarUploadType {
	loading: boolean;
	imageUrl: string;
}
const acceptType = ['image/png', 'image/jpeg', ' image/jpg'];
const ContactInfo: React.FC = React.memo(() => {
	const myProfile = useSelector((state: RootState) => state.app.user);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isDisableRefresh, setIsDisableRefresh] = useState<boolean>(false);
	const [state, setState] = useState<AvatarUploadType>({
		loading: false,
		imageUrl: '',
	});
	const [avatar, setAvatar] = useState('');
	const dispatch = useAppDispatch();
	// const getImageFile = async (file: File) => {
	// 	const avatarUpload = await getFileUrl(file);
	// 	const res = await UserService.updateProfile({ avatar: avatarUpload });
	// 	if (res) {
	// 		dispatch({
	// 			type: AuthAction.UPDATE_MY_PROFILE,
	// 			payload: res,
	// 		});
	// 	}
	// 	setAvatar(avatarUpload);
	// };

	// const handleChange = (info: any) => {
	// 	getBase64(info.file, (imageUrl: string) => {
	// 		setState({
	// 			...state,
	// 			imageUrl,
	// 		});
	// 	});
	// 	getImageFile && getImageFile(info.file);
	// };

	// const onPreview = async (file: any) => {
	// 	let src = file.url;
	// 	if (!src) {
	// 		src = await new Promise((resolve) => {
	// 			const reader = new FileReader();
	// 			reader.readAsDataURL(file.originFileObj);
	// 			reader.onload = () => resolve(reader.result);
	// 		});
	// 	}
	// 	const image = new Image();
	// 	image.src = src;
	// 	const imgWindow = window.open(src);
	// 	imgWindow?.document.write(image.outerHTML);
	// };

	return (
		<div
			css={css`
				opacity: 1;
				transition: opacity 300ms ease 0s;
				.contact-info {
					width: 100%;
					font-weight: 300;
					.contact-container {
						padding: 30px;
						border-radius: 5px;
						background-color: #fff;
						position: relative;
						max-width: 100%;
						margin-right: auto;
						margin-left: auto;
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
						.contact-wrapper {
							.refresh-wrapper {
								display: flex;
								justify-content: space-between;
								align-items: end;
								@media (max-width: ${theme.media.phones}px) {
									display: block;
								}
								.upload-container {
									position: relative;
									@media (max-width: ${theme.media.phones}px) {
										text-align: center;
									}
									.edit-wrapper {
										width: 200px;
										.upload-wrapper {
											.ant-upload.ant-upload-select.ant-upload-select-picture-card {
												width: 100%;
												height: 100%;
												margin: 0;
												background-color: #fff;
												border: none;
											}
											.ant-upload {
												border-radius: 50%;
											}
										}
										.edit-icon {
											position: absolute;
											left: auto;
											top: auto;
											right: 2%;
											bottom: 16%;
											display: flex;
											width: 34px;
											height: 34px;
											justify-content: center;
											align-items: center;
											border-radius: 50%;
											background-color: #003c5a;
											box-shadow: 0 1px 10px 0 rgb(0 0 0 / 40%);
											font-family: 'Fa 300', sans-serif;
											color: #fff;
											@media (max-width: ${theme.media.phones}px) {
												right: 12%;
											}
										}
									}
								}

								.upload-image {
									border-style: solid;
									border-width: 2px;
									border-color: #e7edf3;
									border-radius: 50%;
									width: 229px;
									height: 229px;
								}
								.edit-image {
									border-style: solid;
									border-width: 2px;
									border-color: #e7edf3;
									border-radius: 50%;
									width: 229px;
									height: 229px;
								}
							}
							.form-item-button {
								@media (max-width: ${theme.media.phones}px) {
									margin-top: 20px;
								}
							}
						}
						.form-wrapper {
							margin: 0 0 15px;
						}
					}
				}
			`}
		>
			<div className="contact-info">
				<div className="contact-container">
					<h2>Thay đổi thông tin cá nhân</h2>
					<div className="contact-wrapper">
						<div className="refresh-wrapper">
							<div className="upload-container">
								<div className="edit-wrapper">
									<ImgCrop>
										<Upload
											name="avatar"
											listType="picture-card"
											showUploadList={false}
											accept="image/png, image/jpeg, image/jpg"
											// customRequest={handleChange}
											// onPreview={onPreview}
											beforeUpload={(file) => {
												const isPNG = acceptType.includes(file.type);
												if (!isPNG) {
													message.error({
														content: `${file.name} is not valid. Supported extension file:  jpg | png | jpeg`,
														className: 'error-msg',
														style: {
															display: 'flex',
															justifyContent: 'flex-end',
														},
													});
												}
												return isPNG || Upload.LIST_IGNORE;
											}}
											className="upload-wrapper"
										>
											<div className="edit-icon"></div>
										</Upload>
									</ImgCrop>
								</div>
								{state.imageUrl ? (
									<img
										src={state.imageUrl}
										alt="avatar"
										className="upload-image"
									/>
								) : myProfile?.avatar ? (
									<img
										src={myProfile?.avatar}
										alt="avatar"
										className="edit-image"
									/>
								) : (
									// <UserAvatar
									// 	name={[myProfile?.full_name, myProfile?.full_name].join(
									// 		' '
									// 	)}
									// 	color="#031f2d"
									// 	size={180}
									// 	radius={1000}
									// 	className="edit-image"
									// 	backgroundColor="#e1e1df"
									// />
									<div></div>
								)}
							</div>
						</div>
					</div>

					{/* <div className="form-wrapper">
						<ContactSettingForm myProfile={myProfile} avatar={avatar} />
					</div> */}
					<div className="form-wrapper">
						<ChangePasswordForm />
					</div>
				</div>
			</div>
		</div>
	);
}, isEqual);
export default ContactInfo;
