import React from 'react';
import SignalStrength from './components/SignalStrength';
import Wifi from './components/Wifi';
import Hammer from './components/Hammer';
import ComputerWorker from './components/ComputerWorker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <h2>Below are some icons for Brooks</h2>
          <div className='iconDiv'>
            <Wifi />
            <SignalStrength />
            <Hammer />
          </div>
          <ComputerWorker />
        </>
      </header>
    </div>
  );
}

export default App;
