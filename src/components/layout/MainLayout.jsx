import { Outlet } from 'react-router-dom';
import Header from './Header';
import FooterCompoent from './FooterCompoent';
import Menu from './Menu';

export const MainLayout = () => {
  return (
  <div className='bodyContainer'>
      <Header />
      <Menu />
      <div className='mainBody'>
        <main >
          <Outlet />
        </main>
      </div>
      <FooterCompoent />
  </div>)
};

export default MainLayout;
