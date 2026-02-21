import React, { ReactNode } from 'react';
import Banner from '../navbar/banner';
import Navbar from '../navbar/nav-bar';

interface LayoutProps {
  children: ReactNode;
  isNoneHeader?: boolean;
}

const Layout = React.memo(
  ({ children, isNoneHeader = false }: LayoutProps) => (
    <>
      <div>{!isNoneHeader && <Banner />}</div>
      <div>{!isNoneHeader && <Navbar />}</div>
      <div className="page-container">{children}</div>
    </>
  ),
  (prevProps, nextProps) =>
    prevProps.isNoneHeader === nextProps.isNoneHeader && prevProps.children === nextProps.children,
);

export default Layout;
