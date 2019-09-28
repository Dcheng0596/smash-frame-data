import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Grid from './components/Grid';
import Fighter from './components/Fighter'
import Page404 from './components/Page404'
import GameContextProvider from './contexts/GameContext';

function App() {
  return (
    <BrowserRouter>
      <div className="smash-stats font-bold">
        <GameContextProvider>
          <Header/>
          <Switch>
            <Route path='/:game/:fighter' component={Fighter} />
            <Route path='/' component={Grid} />
            <Route component={Page404} />
          </Switch>
        </GameContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
