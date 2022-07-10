import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import Input, { validationSchema } from '../components/Form';
import { AuthContext } from '../features/login/loginContext';
import { User } from '../types/commons';

export default function Login() {
	const navigate = useNavigate();
	const auth = useContext(AuthContext);
	const { handleSubmit, control } = useForm<User>({
		defaultValues: {
			email: 'test@gmail.com',
			password: 'test',
		},
		resolver: yupResolver(validationSchema),
	});

	useEffect(() => {
		if (auth.isLoggedIn) {
			alert('Login Success');
			navigate('/');
		}
	}, [auth.isLoggedIn]);

	const onSubmit = (data: User) => {
		auth.logIn(data);
	};

	return (
		<div className="container">
			<h1>Login</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input control={control} name="email" />
				<Input control={control} name="password" />

				<input type="submit" />
			</form>
			<div className="loginhere row">
				<span>
					<NavLink to="/register">Register here</NavLink>
				</span>
			</div>
		</div>
	);
}
