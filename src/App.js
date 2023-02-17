import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tabs';
import { Menu } from './components/menu/Menu';
import { Routes, Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import './App.scss';

import Head from './images/head.svg';
import Brains from './images/brains.svg';
import BackForSecond from './images/pageTwoBack.png';
import backPic3 from './images/backPic3.svg';
import pymetrics from './images/pymetrics.png';
import genesis from './images/genesis.png';
import irisai from './images/irisai.png';
import micron from './images/micron.svg';
import twentyfour from './images/24.png';

import sevenRightCircle from './images/sevenRightCircle.svg';
import sevenMidleCircle from './images/sevenMidleCircle.svg';
import sevenLeftCircle from './images/sevenLeftCircle.svg';
import america from './images/america.svg';
import evrasia from './images/evrasia.svg';
import australia from './images/australia.svg';
import america2 from './images/america2.svg'

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { Footter } from './components/footer/Footter';
import { Button } from './components/button/Button';
import { Page } from './components/page/Page';


const firstPage = {
  idName: "First-page",
  name: 'First-page',
  backColor: '#F5FFFD',
  picture: Brains,
  pictureName: 'Brains',
  elipse: ['Elipse--one', 'Elipse--two'],
  h1: 'Discover how to reinvent your business with AI',
  text: 'Software development enhanced with AI products to unleash your potential',
  head: Head
}

const secondPage = {
  idName: "blog",
  name: 'Second-page',
  // backColor: '',
  picture: BackForSecond,
  pictureName: 'BackForSecond',
  elipse: [],
  h1: ' ',
  text: `We believe innovation is the fuel of reinvention. And to reinvent our industry, we are reinventing how we ourselves innovate.*
   We say no to the Status Quo. *lejoybot is an incubator by, for and of innovation.
   An incubator to help productize lejoybot most transformative tech into platforms that will speed up how quickly we can change the world.`,
  head: ''
}

const thirdPage = {
  idName: 'License',
  name: 'third-page',
  backColor: '#F5FFFD',
  picture: backPic3,
  pictureName: 'backPic3',
  elipse: ['Elipse--three', 'Elipse--four'],
  h1: 'How we do it? *We strive to do the impossible.* Every day.',
  text: `We act as an Entrepreneur Engine. We take early-stage startups and catapult them from an idea to an MVP to platforms with the potential to scale and transform whole industries while rapidly generating exponential growth for lejoybot.`,
  head: ''
}

const fourthPage = {
  idName: '',
  name: 'fourth-page',
  backColor: '#9753A8',
  picture: '',
  pictureName: '',
  elipse: [],
  h1: 'With lejoybot, there\'s a more innovative way to innovate',
  text: `Our platforms enhance digital transformation, from using tech to make organizations and their cultures more human, to applying AI to reinvent how software is coded and tested.`,
  head: '',
  icons: [pymetrics, genesis, irisai, micron, twentyfour, pymetrics, genesis, irisai, micron, twentyfour]
}

const fivthPage = {
  idName: 'team',
  name: 'fivthPage',
  backColor: '#F5FFFD',
  picture: '',
  pictureName: '',
  h1: '5+*Yers of experience * 40+ * talanted employees',
  text: `For more than 5 years the company Lejoybot has been solving complex technical problems. *Our team of over 40 employees from all over the world. And the main thing that connects us is ideas and solutions in the field of AI. *We create different business solutions using the latest technologies of our time.`,
  elipse: ['Elipse--five'],
}

const sixhPage = {
  name: 'sixhPage',
  backColor: '#F5FFFD',
  picture: '',
  pictureName: '',
  elipse: [],
  h1: 'the company Lejoybot  learns only from the best in your industry',
  text: ``,
  cards: ['Executive Leadership Principles Program*Empower yourself with the leadership acumen needed to solve problems, innovate, and drive change with this Executive Leadership Principles Certification. ', 'Executive Leadership Principles Program*Empower yourself with the leadership acumen needed to solve problems, innovate, and drive change with this Executive Leadership Principles Certification. ', 'Executive Leadership Principles Program*Empower yourself with the leadership acumen needed to solve problems, innovate, and drive change with this Executive Leadership Principles Certification. ', 'Executive Leadership Principles Program*Empower yourself with the leadership acumen needed to solve problems, innovate, and drive change with this Executive Leadership Principles Certification. ', 'Executive Leadership Principles Program*Empower yourself with the leadership acumen needed to solve problems, innovate, and drive change with this Executive Leadership Principles Certification. ', 'Executive Leadership Principles Program*Empower yourself with the leadership acumen needed to solve problems, innovate, and drive change with this Executive Leadership Principles Certification. ']
}

const sevenPage = {
  name: 'sevenPage',
  backColor: '#F5FFFD',
  picture: '',
  pictureName: '',
  elipse: [],
  h1: '* CURRENT* * OPENING',
  text: ``,
  backicons: [sevenRightCircle, sevenMidleCircle, sevenLeftCircle, america, evrasia, australia, america2],
  work: ['tech specialist1 * Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quis ipsam illum consequuntur iure doloribus accusantium error fugit, inventore enim. Aliquam omnis asperiores eveniet eaque molestiae tempora dolorum itaque architecto atque minus cumque, cum fuga, amet officiis adipisci. Cum, fugit!', 'tech specialist2 * inventore enim. Aliquam omnis asperiores eveniet eaque molestiae tempora dolorum itaque architecto atque minus cumque, cum fuga, amet officiis adipisci. Cum, fugit!', 'tech specialist3 * Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quis ipsam illum consequuntur iure doloribus accusantium error fugit, inventore enim. Aliquam omnis asperiores eveniet eaque molestiae tempora dolorum itaque architecto atque minus cumque, cum fuga, amet officiis adipisci. Cum, fugit!', 'tech specialist4 * Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quis ipsam illum consequuntur iure doloribus accusantium error fugit, inventore enim. Aliquam omnis asperiores eveniet eaque molestiae tempora dolorum itaque architecto atque minus cumque, cum fuga, amet officiis adipisci. Cum, fugit!', 'tech specialist5 * Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quis ipsam illum consequuntur iure doloribus accusantium error fugit, inventore enim. Aliquam omnis asperiores eveniet eaque molestiae tempora dolorum itaque architecto atque minus cumque, cum fuga, amet officiis adipisci. Cum, fugit!',],
}

const elipse = ['Elipse--one', 'Elipse--two', 'Elipse--three', 'Elipse--four']

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

      <Page { ...firstPage } />
      <Page { ...secondPage } />
      <Page { ...thirdPage } />
      <Page { ...fourthPage } />
      <Page { ...fivthPage } />
      <Page { ...sixhPage } />
      <Page { ...sevenPage } />

      <Button />

      <Footter />
    </div>
  );
}

export default App;

const MenuMobile = () => {
  return (
    <div className='mobile-menu'>
      <div>
        <nav className='mobile-menu__nav'>
          <a href='#blog' className='mobile-menu__item' >Blog</a>
          <a href='#team' className='mobile-menu__item'>Team</a>
          <a href='#License' className='mobile-menu__item' >License</a>
          <a href="#footer" className='mobile-menu__item'>
            Contacts
          </a>
          <span className='mobile-menu__item'>Learn more</span>
        </nav>
      </div>
    </div>
  )
}

const Elipse = ({ elipse = [] }) => {
  return (

    <>
      { (elipse.length > 0) &&
        <>
          { elipse.map((klass) => (
            <div key={ klass } className={ classNames(`Elipse`, `Elipse__${klass}`) }>
              <div className={ classNames(`Elipse__${klass}--size`) }>

              </div>

            </div>
          )) }
        </>
      }
    </>

  )
}
