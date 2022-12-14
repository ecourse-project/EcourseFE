import React from 'react';
import Navbar from '../navbar/nav-bar';
import Footer from './Footer';

const Layout = ({ children, isNoneHeader = false, isFooter = false }) => (
  <>
    {!isNoneHeader && <Navbar />}
    {children}
    {isFooter && <Footer />}
  </>
);

export default Layout;
