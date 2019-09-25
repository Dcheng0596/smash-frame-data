import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import GameContextProvider from './contexts/GameContext';

function App() {
  return (
    <div className="smash-stats text-warning font-bold">
      <GameContextProvider>
        <Header/>
        <Grid/>
      </GameContextProvider>
    </div>
  );
}

export default App;
