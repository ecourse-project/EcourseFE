import Router from 'next/router';
import React from 'react';
import RoutePaths from 'src/lib/utils/routes';
import { AlertTextError } from '../alert/SweetAlert';
export class ErrorBoundary extends React.Component<{ children: any }> {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    AlertTextError('Đã có lỗi xảy ra', 'Thử lại sau', () => {
      Router.reload();
    });
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div></div>;
    }
    return this.props.children;
  }
}
