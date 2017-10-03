/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Pad from './components/Pad'
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/pad" component={Pad} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);