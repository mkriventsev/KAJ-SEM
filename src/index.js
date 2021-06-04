import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import SettingsScreen from './screens/SettingsScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { initLocalStorage } from "./utils/init";

initLocalStorage()
ReactDOM.render(
  // <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/game">
          <GameScreen />
        </Route>
        <Route path="/settings">
          <SettingsScreen />
          </Route>
        <Route path="/feedback">
          <FeedbackScreen />
        </Route>
      </Switch>
    </Router>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md
// https://blog.bitsrc.io/using-service-workers-with-react-27a4c5e2d1a9