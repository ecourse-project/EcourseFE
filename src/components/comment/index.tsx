import { css } from '@emotion/react';
import TextArea from 'antd/lib/input/TextArea';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import AppButton from 'src/components/button';
import AppInput from 'src/components/input';
import { CreateNewPasswordFormFieldData } from 'src/models';
import { User } from 'src/models/backend_modal';
// import AuthService from 'src/services/auth';
import regex from 'src/utils/regularExpression';
import validation from 'src/utils/validation';
import * as Yup from 'yup';
import ErrorMessage from '../error-message';

interface CommentFormProps {
	onAddComment: (value) => void;
}

interface CommentProps {
	content: string;
}
const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [submitting, setSubmitting] = useState<boolean>(false);
	const validationSchema = React.useRef(
		Yup.object().shape({
			password: Yup.string()
				.required(validation.password.required)
				.matches(regex.password, {
					message: validation.password.invalidPwdRegex,
				}),
			confirmPassword: Yup.string()
				.required(validation.password.required)
				.oneOf(
					[Yup.ref('password'), null],
					validation.confirmPassword.doesNotMatch
				),
		})
	);
	const formik = useFormik<CommentProps>({
		initialValues: {
			content: '',
		},
		validateOnChange: true,
		validateOnBlur: true,
		onSubmit: (values) => {
			// if (!values.content.length) {
			// 	return;
			// }
			setSubmitting(true);
			onAddComment(values?.content);
			setTimeout(() => {
				formik.setFieldValue('content', '');
				setSubmitting(false);
			}, 1000);
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
			`}
			className="form-wrapper"
			onSubmit={formik.handleSubmit}
		>
			<div className="form-item">
				{/* <AppInput
					className="field password-field"
					label=""
					name="content"
					type="content"
					disabled={isLoading}
					placeholder="content"
					handleChange={formik.handleChange}
					handleBlur={formik.handleBlur}
					value={formik.values.content}
					hasError={hasError('content')}
				/> */}
				<TextArea
					className=""
					name="content"
					onChange={formik.handleChange}
					value={formik.values?.content}
					placeholder="Bình luận điều gì đó..."
					rows={4}
					maxLength={500}
					showCount={true}
					allowClear={true}
					// onPressEnter={(e) => {
					// 	e.preventDefault();
					// 	formik.handleSubmit();
					// }}
				/>
				{/* {hasError('content') ? (
					<ErrorMessage>{formik.errors?.content}</ErrorMessage>
				) : null} */}
			</div>

			<div className="form-item">
				<AppButton
					btnTextColor="black"
					btnSize="large"
					btnStyle="solid"
					btnWidth="full-w"
					className="btn-cmt"
					type="primary"
					htmlType="submit"
					loading={submitting}
				>
					Thêm bình luận
				</AppButton>
			</div>
		</form>
	);
};

export default CommentForm;
