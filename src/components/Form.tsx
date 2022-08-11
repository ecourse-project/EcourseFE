import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { useController, UseControllerProps } from 'react-hook-form';
import { FormValues, User, UserLogin } from '../types/commons';
import * as yup from 'yup';

const placeholderList = {
	fullName: 'Your Full Name',
	email: 'Your Email',
	username: 'Your User Name',
	password: 'Your Password',
	phone: 'Your Phone',
	age: 'Your Age',
	gender: 'Your Gender',
	repeatPwd: 'Confirm Your Password',
};
export const validationSchema = yup.object().shape({
	username: yup.string().trim().min(2),
	password: yup
		.string()
		.trim()
		.max(20)
		.min(2)
		.required('Required')
		.matches(/[a-zA-Z0-9]/, 'Password can only contain Latin letters.')
		.matches(/^\S*$/, 'Whitespace is not allowed'),
	repeatPwd: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
	fullName: yup.string().trim().min(2),
	email: yup.string().email('Email is invalid'),
});

function Input(props: UseControllerProps<User>) {
	const {
		field,
		formState: { errors },
	} = useController(props);
	return (
		<>
			<input
				{...field}
				placeholder={placeholderList[props.name]}
				id={props.name}
				className="form-control"
				type={props.name}
			/>
			<ErrorMessage
				errors={errors}
				name={props.name}
				render={({ message }) => <span className="text-danger">{message}</span>}
			/>
		</>
	);
}

export default Input;
