import { string } from 'yup';

export interface PaginationParams {
	_limit: number;
	_page: number;
	_total: number;
}

export interface ListResponse<T> {
	data: T[];
}

export interface PokemonProperties {
	id: number;
	name: string;
	sprites: {
		front_default: string;
		other: {
			'official-artwork': {
				front_default: string;
			};
		};
	};
}

export interface PokemonInfo {
	name: string;
	url: string;
}

export interface IState {
	isLogIn: boolean;
}

export interface NavigationProps {
	isLog: boolean;
	updateLogIn: (val: boolean) => void;
}

export interface ResponseLogin {
	status: number;
	message: string;
}

export interface UserLogin extends User {
	username: string;
	password: string;
}
export interface User {
	username: string;
	password: string;

	email?: string;
	phone?: string;
	age?: number;
	gender?: string;
	fullName?: string;
	repeatPwd?: string;
}

export type FormValues = {
	FirstName: string;
	LastName: string;
};
// ====================================================
export interface Data {
	id: string;
	name: string;
	is_activated: boolean;
	topic: string;
}
