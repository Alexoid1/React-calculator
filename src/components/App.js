import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

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
