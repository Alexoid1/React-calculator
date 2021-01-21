import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  return (
    <>
      <div className="button-panel">
        <div className="group1">
          <Button name="AC" handleClick={clickHandler} />
          <Button name="+/-" handleClick={clickHandler} />
          <Button name="%" handleClick={clickHandler} />
          <Button name="÷" handleClick={clickHandler} />
        </div>
        <div className="group2">
          <Button name="7" handleClick={clickHandler} />
          <Button name="8" handleClick={clickHandler} />
          <Button name="9" handleClick={clickHandler} />
          <Button name="x" handleClick={clickHandler} />
        </div>
        <div className="group3">
          <Button name="4" handleClick={clickHandler} />
          <Button name="5" handleClick={clickHandler} />
          <Button name="6" handleClick={clickHandler} />
          <Button name="-" handleClick={clickHandler} />
        </div>
        <div className="group4">
          <Button name="1" handleClick={clickHandler} />
          <Button name="2" handleClick={clickHandler} />
          <Button name="3" handleClick={clickHandler} />
          <Button name="+" handleClick={clickHandler} />
        </div>
        <div className="group5">
          <Button name="0" handleClick={clickHandler} />
          <Button name="." handleClick={clickHandler} />
          <Button name="=" handleClick={clickHandler} />
        </div>
      </div>
    </>

  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
