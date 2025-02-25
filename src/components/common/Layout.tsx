import Banner from '../navbar/banner';
import Navbar from '../navbar/nav-bar';

const Layout = ({ children, isNoneHeader = false }) => (
  <>
    <div>{!isNoneHeader && <Banner />}</div>
    <div>{!isNoneHeader && <Navbar />}</div>
    <div className="page-container">{children}</div>
  </>
);

export default Layout;
