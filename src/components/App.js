import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(operation) {
    this.setState(
      prevState => (calculate(prevState, operation)),
    );
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <div className="card calc-body">
          <div className="card-body">
            <Display result={
                  `${total || ''}
                  ${operation || ''}
                  ${(total && next) || ''}`
                }
            />
            <ButtonPanel clickHandler={this.handleClick} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
