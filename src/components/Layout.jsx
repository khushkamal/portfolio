import Header from './Header';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div className="page-bg text-white min-h-screen font-sora">
      <Header />
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
