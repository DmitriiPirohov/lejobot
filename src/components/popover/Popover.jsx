import * as React from 'react';
import './Popover.scss';
import { PropTypes } from 'prop-types';

export const Popover = ({ SetActive, t, p }) => {
  Popover.prototypes = {
    SetActive: PropTypes.func,
    t: PropTypes.string,
    p: PropTypes.string,
  }
  
  return (
    <div className='Popover'>
      <h1>{ t }</h1>
      <span className='Popover__text'>{ p }</span>
      <div className='Popover__cont-for-button'>
        <button
          onClick={ () => SetActive(prev => !prev) }
          className='Popover__button'
        >
          close
        </button>
      </div>
    </div>
  );
};
