import { ErrorMessage } from '@hookform/error-message';
import React, { useState } from 'react';
import {
	Controller,
	useController,
	UseControllerProps,
	useForm,
	useFormState,
	useWatch,
} from 'react-hook-form';
import { validationSchema } from '../components/Form';
type FormValues = {
	firstName: string;
	lastName: string;
};
const Input = (props: UseControllerProps<FormValues>) => {
	const {
		field,
		formState: { errors },
	} = useController(props);

	return (
		<>
			<input
				{...field}
				// placeholder={placeholderList[props.name]}
				id={props.name}
				className="form-control"
				type={props.name.toLowerCase().includes('pwd') ? 'password' : ''}
			/>
			<ErrorMessage
				errors={errors}
				name={props.name}
				render={({ message }) => <span className="text-danger">{message}</span>}
			/>
		</>
	);
	//return <input name={props.name} />;
};

export default function Control() {
	const { handleSubmit, control } = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
		},
	});

	const onSubmit = (data: FormValues) => {
		alert(JSON.stringify(data));
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input control={control} name="firstName" />

				<input type="submit" />
			</form>
		</div>
	);
}
