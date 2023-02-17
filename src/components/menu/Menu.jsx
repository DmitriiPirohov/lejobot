import { Routes, Route, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import logo1 from '../../images/logo2.svg';
import MenuIcon from '@mui/icons-material/Menu';

import './Menu.scss';

export const Menu = ({ SetMobileMenu }) => {
  return (
    <div className='place-for-menu'>
      <div className='Menu'>
        <div className='Menu__logoplace'>
          <img src={ logo } className="Menu__logo" alt="logo" />
          <img src={ logo1 } className="Menu__logo1" alt="logo" />
        </div>

        <div>
          <nav className='Menu__nav'>
            <a href='#blog' className='Menu__nav__item' >Blog</a>
            <a href='#team' className='Menu__nav__item'>Team</a>
            <a href='#License' className='Menu__nav__item' >License</a>
            <a href="#footer" className='Menu__nav__item'>
              Contacts
            </a>
            <span className='Menu__nav__item'>Learn more</span>
          </nav>
        </div>

        <span className='Menu__mobile_butoon' onClick={() => SetMobileMenu(prev => !prev)}>
          <MenuIcon />
        </span>
      </div>
    </div>
  );
};
