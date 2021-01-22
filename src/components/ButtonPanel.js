import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';

function ButtonPanel({ clickHandler }) {
  return (
    <>
      <div className="card-body buttons-grid">
        <div className="row btn--green">
          <Button className="col-auto" name="AC" handleClick={clickHandler} />
          <Button className="col-auto" name="+/-" handleClick={clickHandler} />
          <Button className="col-auto" name="%" handleClick={clickHandler} />
          <Button className="col-auto" name="÷" handleClick={clickHandler} />
          <Button className="col-auto" name="7" handleClick={clickHandler} />
          <Button className="col-auto" name="8" handleClick={clickHandler} />
          <Button className="col-auto" name="9" handleClick={clickHandler} />
          <Button className="col-auto" name="x" handleClick={clickHandler} />
          <Button className="col-auto" name="4" handleClick={clickHandler} />
          <Button className="col-auto" name="5" handleClick={clickHandler} />
          <Button className="col-auto" name="6" handleClick={clickHandler} />
          <Button className="col-auto" name="-" handleClick={clickHandler} />
          <Button className="col-auto" name="1" handleClick={clickHandler} />
          <Button className="col-auto" name="2" handleClick={clickHandler} />
          <Button className="col-auto" name="3" handleClick={clickHandler} />
          <Button className="col-auto" name="+" handleClick={clickHandler} />
          <Button className="col-auto" name="0" handleClick={clickHandler} />
          <Button className="col-auto" name="." handleClick={clickHandler} />
          <Button className="col-auto" name="=" handleClick={clickHandler} />
        </div>
      </div>
    </>

  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
