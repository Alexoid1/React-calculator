import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

function Display({ result }) {
  return (
    <>
      <div className="screen mx-auto">
        <div className="screen__inner">
          <h3 className="output">{ result }</h3>
        </div>
      </div>
    </>
  );
}
Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
