import classNames from 'classnames';
import simple from '../../images/simple.png';
import { useState } from 'react';
import * as React from 'react';
import { Popover } from '../popover/Popover';
import { PropTypes } from 'prop-types';

import './Page.scss'

export const Page = ({ idName, backColor, name, picture, elipse = [], h1, text, pictureName, head, icons = [], cards, backicons = [], work = [] }) => {
  Page.prototypes = {
    idName: PropTypes.string,
    backColor: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    elipse: PropTypes.array,
    icons: PropTypes.array,
    cards: PropTypes.array,
    backicons: PropTypes.array,
    work: PropTypes.array,
    h1: PropTypes.string,
    text: PropTypes.string,
    pictureName: PropTypes.string,
    head: PropTypes.string,
  }

  const [active, SetActive] = useState(false);
  const [title, SetTitle] = useState('');
  const [paragraph, SetParagraph] = useState('');

  const handleSubmit = (title, par) => {
    SetActive(true);
    SetTitle(title.toUpperCase());
    SetParagraph(par);
  };

  return (
    <>
      <div
        className={ classNames('Page', `${name}`) }
        style={ { backgroundColor: `${backColor}` } }
      >
        { (h1) &&
          <div className={ name }>
            <div className={ classNames(`${name}__cont--h1`) }>

            </div>
            <h1 className={ classNames(`${name}__h1`) } id={ idName }>
              <span className={ classNames(`${name}__h1--1`) }>{ h1.toUpperCase().split('*')[0] }</span>
              <br />
              <br />
              <span className={ classNames(`${name}__h1--2`) }>{ h1.toUpperCase().split('*')[1] }</span>
              <span className={ classNames(`${name}__h1--3`) }>{ h1.toUpperCase().split('*')[2] }</span>
              <span className={ classNames(`${name}__h1--4`) }>{ h1.toUpperCase().split('*')[3] }</span>
            </h1>

            { <>
              <span className={ classNames(`${name}__text`) }>
                <span>{ text.split('*')[0] }</span>
                <br />
                <br />
                <span>{ text.split('*')[1] }</span>
                <br />
                <br />
                <span>{ text.split('*')[2] }</span>
              </span>
            </> }
          </div> }

        { (cards) &&
          <div className={ classNames(`${name}__cards`) }>
            { cards.map((element) => (
              <div key={ element } className={ classNames(`${name}__card`) }>
                <div className={ classNames(`${name}__info`) }>
                  <span className={ classNames(`${name}__icon`) }>
                    <img src={ simple } alt="simle" className={ classNames(`${name}__icon--image`) } />
                    <span className={ classNames(`${name}__info--h1`) }>{ element.toUpperCase().split('*')[0] }</span>
                  </span>

                  <span className={ classNames(`${name}__info--text`) }>{ element.toUpperCase().split('*')[1] }</span>
                </div>
              </div>
            )) }
          </div> }

        { head &&
          <div className="Head">
            <img src={ head } alt="head" />
          </div> }

        { (icons.length > 0) &&
          <div className={ classNames(`${name}__anim-cards`) }>
            { icons.map((partner, i) => (

              <span key={ i + 1000 } className={ classNames(`${name}__anim-body`) }>
                <span key={ i } className={ classNames(`${name}__anim-block`) }>
                  <img
                    src={ partner }
                    alt="partners"
                    className={ classNames(`${name}__picture`) } />
                </span>

                <span key={ i + 22 } className={ classNames(`${name}__anim-block--2`) }>
                  <img
                    src={ partner }
                    alt="partners"
                    className={ classNames(`${name}__picture`) } />
                </span>
              </span>

            )) }
          </div>
        }

        { picture &&
          <div className={ classNames(`${pictureName}`, (pictureName === 'Brains') && 'jello center') }>
            <img src={ picture } alt="head" className={ classNames(`${pictureName}__picture pc`) } />
          </div> }

        { (backicons) &&
          <div>
            { backicons.map((elem, index) => (
              <img
                src={ elem }
                alt="beckicon"
                key={ index }
                id={ `backicon` + index } />
            )) }
          </div> }

        { (work) &&
          <div className='work'>
            { work.map((elem, i) => (
              <div key={ i } className='work__position'>
                <label htmlFor="work" className='lable-botton'>
                  <p className={ classNames('work__title') }>
                    { elem.split('*')[0] }
                    <button
                      onClick={ () => handleSubmit(elem.split('*')[0], elem.split('*')[1]) }
                      className='work__button'
                      id='work'
                    >
                      +
                    </button>
                  </p>
                </label>
              </div>
            )) }
          </div> }

      </div>

      { active && <Popover SetActive={ SetActive } t={ title } p={ paragraph } /> }
    </>
  );
};
