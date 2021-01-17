import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <>
      <div className="App">
        <h1 className="title">Calculator</h1>
        <Display />
        <ButtonPanel />
      </div>
    </>
  );
}

export default App;
