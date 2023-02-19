import logo3 from '../../images/logo3.svg';
import logo4 from '../../images/logo4.svg';
import * as React from 'react';
import { MultilineTextFields } from '../multilineTextFild/MultilineTextFields';
import { BasicTextFields } from '../basicTextFields/BasicTextFields';
import { BasicSelect } from '../basicSelect/BasicSelect';

import './Footer.scss';

export const Footter = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer__body'>
        <a href='#' className='footer__logo'>
          <img src={ logo3 } alt="logo" className='footer__logo--1' style={ { cursor: 'pointer' } } />
          <img src={ logo4 } alt="logo" />
        </a>

        <nav className='footer__nav'>
          <a href='#blog' className=''>
            <span className='footer__nav_item'>Blog</span>
          </a>

          <a href="#team">
            <span className='footer__nav_item'>Team</span>
          </a>

          <a href="#License">
            <span className='footer__nav_item'>License</span>
          </a>

          <span className=''>Contacts</span>
        </nav>

        <div className='footer__text'>
          <h1>HAVE ANY QUESTIONS?</h1>
          <span>Write to us by choosing the category of the question and we will be happy to answer!</span>
        </div>

        <div className='footer__form'>
          <div className='footer__form_firstblock'>
            <BasicSelect />

            <BasicTextFields />
          </div>

          <div className='footer__form_secondBlock'>
            <MultilineTextFields />

            <span className='footer__confirm-block'>
              <div className='send-container'>
                <button className='footer__form_send' style={ { cursor: 'pointer' } }>Send</button>
              </div>

              <span className='footer__checkbox'>
                <input className='footer__checkbox-sponge' type="checkbox" id='privacy' style={ { cursor: 'pointer' } } />
                <label htmlFor="privacy" style={ { cursor: 'pointer' } }>
                  <span className='footer__checkbox-text'>I agree to the privacy policy and terms of use</span>
                </label>
              </span>
            </span>
          </div>
        </div>

      </div>
      <div className='footer__adress'>
        <div className="footer__adress-text">
          <div>Rue Abbé Cuypers 3, 1040 Etterbee</div>
          <span>info@dds-corp.com</span>
        </div>

        <a href="#">
          <img
            src={ logo3 }
            alt="logo"
            className='footer__logo-mobile'
          />
        </a>
      </div>

    </div>
  );
};
