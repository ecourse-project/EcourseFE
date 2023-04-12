import React from 'react';
import Banner from '../navbar/banner';
import Navbar from '../navbar/nav-bar';
import Footer from './Footer';

const Layout = ({ children, isNoneHeader = false, isNoneFooter = true }) => (
  <>
    <div>{!isNoneHeader && <Banner />}</div>
    <div>{!isNoneHeader && <Navbar />}</div>
    <div className="page-container">
      {children}
      {!isNoneFooter && <Footer />}
    </div>
  </>
);

export default Layout;
