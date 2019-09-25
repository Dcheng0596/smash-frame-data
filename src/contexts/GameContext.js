  
import React, { Component, createContext } from 'react';

export const GameContext = createContext();

class GameContextProvider extends Component {
  state = {
    game: 'Ultimate'
  }
  setGame = (game) => {
    this.setState({ game: game });
  }
  render() { 
    return (
      <GameContext.Provider value={{...this.state, setGame: this.setGame}}>
        {this.props.children}
      </GameContext.Provider>
    );
  }
}
 
export default GameContextProvider;