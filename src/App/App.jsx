
import s from './styles.scss';
import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import Template from './Template';
import Login from './Login';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Template}>
      <Route path="login" component={Login}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
)