export interface Comments {
  comments: CommentType[];
}

export type CommentType = {
  createdAt: number;
  id: string;
  body: string;
  slug: string;
  author: Author;
  updatedAt: number;
};

export type Author = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};
export interface LoginFormData {
  email: string;
  password: string;
}
export interface LoginQueryParams {
  redirect_url?: string;
}
interface TabPaneProps {
  className?: string;
  title?: string;
  tabData: any[];
}

export interface PaginationPageProps {
  id: string;
  currentPage: number;
  limit: number;
}
export interface AgentLookupFormData {
  firstName: string;
  lastName: string;
  market: string;
  dre: string;
  website: string;
}
export interface MyReportFormData {
  firstName: string;
  lastName: string;
  market: string;
  dre: string;
  website: string;
  phone: string;
}
export interface WebsiteFieldData {
  website: string;
}
export interface SettingFieldData {
  full_name: string;
  phone: string;
  email: string;
  avatar: string;
}
export interface LockFieldData {
  password: string;
}
export interface ResetPassword1FieldData {
  email: string;
}
export interface CreateNewPasswordFormFieldData {
  password: string;
  confirmPassword: string;
}
export interface ChangePasswordFieldData {
  currentPassword: string;
  changePassword: string;
  confirmPassword: string;
}
export interface NeighbourhoodModels {
  name: string;
}
import { ReactElement, ReactNode } from 'react';

// export interface PaginationParams {
// 	_limit: number;
// 	_page: number;
// 	_total: number;
// }

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

//list khoá học
export type TypeTabPanel = {
  id: number;
  label: string;
  content: ReactNode | string;
  icon?: ReactElement;
  key: string;
};
