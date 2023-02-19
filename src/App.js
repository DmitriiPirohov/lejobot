import * as React from 'react';

import  { data } from './data/data';
import { Menu } from './components/menu/Menu';
import classNames from 'classnames';
import { Footter } from './components/footer/Footter';
import { Button } from './components/button/Button';
import { Page } from './components/page/Page';
import './App.scss';
import { MenuMobile } from './components/menuMobile/MenuMobile';
import { Elipse } from './components/elipse/Elipse';

const elipse = ['Elipse--one', 'Elipse--two', 'Elipse--three', 'Elipse--four'];

function App () {
  const [mobileMenu, SetMobileMenu] = React.useState(false);

  return (
    <div className="App">
      <div className='elips_wrapper'>
        <Elipse elipse={ elipse } />
      </div>

      <Menu SetMobileMenu={ SetMobileMenu } />

      <div className={ classNames('MobileMenu', (mobileMenu) && 'MobileMenu--active') }>
        <MenuMobile />
      </div>

      <Page { ...data.firstPage } />
      <Page { ...data.secondPage } />
      <Page { ...data.thirdPage } />
      <Page { ...data.fourthPage } />
      <Page { ...data.fivthPage } />
      <Page { ...data.sixhPage } />
      <Page { ...data.sevenPage } />

      <Button />

      <Footter />
    </div>
  );
}

export default App;
