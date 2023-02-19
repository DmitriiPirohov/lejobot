import * as React from 'react';

import './MenuMobile.scss';

export const MenuMobile = () => {
  return (
    <div className='mobile-menu'>
      <div>
        <nav className='mobile-menu__nav'>
          <a href='#blog' className='mobile-menu__item'>Blog</a>
          <a href='#team' className='mobile-menu__item'>Team</a>
          <a href='#License' className='mobile-menu__item'>License</a>
          <a href="#footer" className='mobile-menu__item'>
            Contacts
          </a>
          <span className='mobile-menu__item'>Learn more</span>
        </nav>
      </div>
    </div>
  );
};
