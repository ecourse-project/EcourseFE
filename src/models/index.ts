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
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
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
