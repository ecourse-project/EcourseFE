import React from 'react';
import Navbar from '../navbar/nav-bar';
import Footer from './Footer';

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
