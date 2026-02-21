import React from 'react';
import CreateNewPassword from 'src/components/forgot-password/CreateNewPassword';
import ResetPassword from 'src/components/forgot-password/ResetPassword';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';

interface ForgotPasswordParams {
  uid: string;
  token: string;
  password: string;
  confirmPassword: string;
}
const ForgotPasswordSection: React.FC = () => {
  const { uid, token } = useQueryParam<ForgotPasswordParams>();

  return <>{uid && token ? <CreateNewPassword /> : <ResetPassword />}</>;
};

export default ForgotPasswordSection;
