import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/register.scss';
import { User } from '../types/commons';
import { yupResolver } from '@hookform/resolvers/yup';
import Input, { validationSchema } from '../components/Form';
import { NavLink } from 'react-router-dom';
import loginApi from '../features/login/loginApi';

const Register = () => {
	const { handleSubmit, control } = useForm<User>({
		defaultValues: {
			username: 'testUsername',
			password: '123456',
			email: 'testEmail@gmail.com',
			fullName: 'Test',
			repeatPwd: '123456',
		},
		mode: 'onChange',
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data: User) => {
		loginApi.register(data);
		alert(JSON.stringify(data));
	};

	return (
		<div className="container ">
			<div className="row form">
				<form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
					<h2 className="form-title">Create account</h2>
					<Input control={control} name="fullName" />
					<Input control={control} name="email" />
					<Input control={control} name="username" />
					<Input control={control} name="password" />
					<Input control={control} name="repeatPwd" />
					<input type="submit" className="form-submit" value="Sign up" />
				</form>
			</div>
			<div className="loginhere row">
				Have already an account ?
				<span>
					<NavLink to="/login" className="loginhere-link">
						Login here
					</NavLink>
				</span>
			</div>
		</div>
	);
};

export default Register;
