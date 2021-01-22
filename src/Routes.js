import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Navbar from './components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <div>
      <Switch>
        <Route path="/calculator" component={App} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
