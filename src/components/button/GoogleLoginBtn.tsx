/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import isEqual from 'react-fast-compare';
// import GoogleLogin from 'react-google-login';
// import globalVariable from 'src/config/env';
// import { GoogleLoginButton } from 'react-social-login-buttons';
interface GoogleLoginProps {
  className?: string;
  onSuccess: (user: any) => void;
  onFailed: (error: any) => void;
}

const GoogleLoginBtn: React.FC<GoogleLoginProps> = React.memo((props) => {
  const { className, onSuccess, onFailed } = props;

  return (
    // <GoogleLogin
    //   clientId={globalVariable.GOOGLE_CLIENT_ID}
    //   render={(renderProps) => (
    //     <GoogleLoginButton style={{ margin: 0, width: '100%', marginBottom: 12 }} onClick={renderProps.onClick}>
    //       Login with Google
    //     </GoogleLoginButton>
    //   )}
    //   className={className}
    //   buttonText="Login"
    //   onSuccess={onSuccess}
    //   onFailure={onFailed}
    //   prompt="select_account"
    //   cookiePolicy={'single_host_origin'}
    // />
    <div>Google LOGIN</div>
  );
}, isEqual);

export default GoogleLoginBtn;
