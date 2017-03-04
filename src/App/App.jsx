"use strict";
import s from './styles.scss';
import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import Template from './Template/index.jsx';
import Login from './Login/index.jsx';
import NotFound from './NotFound/index.jsx';
import MenuComponent from './Compnonents/MenuComponent/index';


export default class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <MenuComponent />
        <Router history={browserHistory}>
        <Route path="/" component={Template}>
          <Route path="login" component={Login}/>

        </Route>
        <Route path="*" component={NotFound}/>
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