import Banner from 'src/components/navbar/banner';
import Navbar from 'src/components/navbar/nav-bar';

const Layout = ({ children, isNoneHeader = false }) => (
  <>
    <div>{!isNoneHeader && <Banner />}</div>
    <div>{!isNoneHeader && <Navbar />}</div>
    <div className="page-container">{children}</div>
  </>
);

export default Layout;
