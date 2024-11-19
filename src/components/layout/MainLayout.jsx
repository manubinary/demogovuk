import { Outlet } from 'react-router-dom';
import Header from './Header';
import FooterCompoent from './FooterCompoent';
import CookieBanner from '../CookieBanner/CookieBanner';
import Menu from './Menu';

export const MainLayout = () => {
  return (
  <div className='bodyContainer'>
    <CookieBanner />
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
