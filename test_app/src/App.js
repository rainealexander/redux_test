import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Some-container">
          <Counter/>
        </div>
      </header>
    </div>
  );
}

export default App;
