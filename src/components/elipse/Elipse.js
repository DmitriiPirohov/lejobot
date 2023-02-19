import * as React from 'react';
import classNames from 'classnames';
import { PropTypes } from 'prop-types';

import './Elipse.scss';

export const Elipse = ({ elipse = [] }) => {
  Elipse.propTypes = {
    elipse: PropTypes.array,
  }

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
        </> }
    </>
  );
};
