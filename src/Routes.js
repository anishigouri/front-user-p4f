import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import DefaultLayoutRoute from './templates/Index';
import Photos from './pages/Photos/Photos';
import Posts from './pages/Posts/Posts';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <DefaultLayoutRoute exact path="/" component={Photos} />
        <DefaultLayoutRoute exact path="/photos" component={Photos} />
        <DefaultLayoutRoute exact path="/posts" component={Posts} />
      </Switch>
    </Router>
  );
}
