import React from 'react';
import logo from './logo.svg';
import './App.css';
import TwoColumnsLayout from "./layout/TwoColumnsLayout";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TwoColumnsLayout/>
    </div>
  );
}

export default App;
