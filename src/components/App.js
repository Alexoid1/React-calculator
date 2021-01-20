import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    
  }
  handleClick = buttonName => {
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }
  render(){
    return(
      <>
        <h1 className="title">Calculator</h1>
        <Display />
        <ButtonPanel dataState={this.handleClick}/>
      </>
    )
  }
}

export default App;
