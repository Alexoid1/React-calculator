import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Navbar from './components/Navbar';
import Home from './components/Home';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
