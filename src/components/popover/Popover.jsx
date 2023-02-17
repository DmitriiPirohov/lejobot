import * as React from 'react';
import './Popover.scss';

export const Popover = ({ SetActive, t, p }) => {
  return (
    <div className='Popover'>
      <h1>{ t }</h1>
      <span className='Popover__text'>{ p }</span>
      <div>
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
