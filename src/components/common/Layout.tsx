import React from 'react';
import Navbar from '../navbar/nav-bar';
import Footer from './Footer';

const Layout = ({ children, isNoneHeader = false, isFooter = false }) => (
  <div className="page-container">
    {!isNoneHeader && <Navbar />}
    {children}
    {isFooter && <Footer />}
  </div>
);

export default Layout;
