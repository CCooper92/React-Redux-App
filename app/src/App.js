import React from 'react';
import './App.css';
import Jokes from './components/Jokes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>New Jokes</h1>
        <Jokes />
      </header>
    </div>
  );
}

export default App;
