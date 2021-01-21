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
        <h1 className="title">Calculator</h1>
        <Display result={
            `${total || ''}
             ${operation || ''}
             ${(total && next) || ''}`
          }
        />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
