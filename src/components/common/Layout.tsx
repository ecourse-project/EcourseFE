import styled from '@emotion/styled';
import React from 'react';
import Navbar from '../navbar/nav-bar';
import Footer from './Footer';

const PageNavWrapper = styled.div`
  padding: 0 calc(100%-20px);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Layout = ({ children, isNoneHeader = false, isNoneFooter = true }) => (
  <>
    <div>{!isNoneHeader && <Navbar />}</div>
    <div className="page-container">
      {children}
      {!isNoneFooter && <Footer />}
    </div>
  </>
);

export default Layout;
