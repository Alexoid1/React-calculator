import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <h1 className="title">Calculator</h1>
      <Display />
      <ButtonPanel />
    </>
  );
}

export default App;
