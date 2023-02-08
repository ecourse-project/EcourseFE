import React from 'react';
import ReactDOM from 'react-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const optionDefault: any = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};
export const AlertTextError = (_title: string, dismissAll?: boolean) => {
  if (dismissAll) {
    toast.dismiss();
  }
  return toast.error(_title, optionDefault);
};
export const AlertTextInfo = (_title: string) => {
  return toast.info(_title, optionDefault);
};

export const AlertTextWarning = (_title: string, dismissAll?: boolean) => {
  if (dismissAll) {
    toast.dismiss();
  }
  return toast.warning(_title, optionDefault);
};

export const ToastContainerCustom = () => {
  return ReactDOM.createPortal(<ToastContainer className="cmp-toast" />, document.querySelector('body') as HTMLElement);
};
