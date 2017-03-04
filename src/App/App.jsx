"use strict";
import s from './styles.scss';
import React, {Component} from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import Template from './Template/index.jsx';
import Login from './Login/index.jsx';
import NotFound from './NotFound/index.jsx';
import MenuComponent from './Compnonents/MenuComponent/index';
import Admin from './AdminSearch/AdminSearch.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route component={Template} path="/">
            <IndexRoute components={{part: Login}}/>
            <Route path="login" components={{part: Login}}/>
            <Route path="admin" component={{part: Admin}}/>
            <Route path="*" components={{part: NotFound}}/>
          </Route>
        </Router>
      </div>
    );
  }
};

/*
 <Route path="users" component={Users}>
 <Route path="/user/:userId" component={User}/>
 </Route>
 <Route path="*" component={NoMatch}/>
 */