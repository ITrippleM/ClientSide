"use strict";
import s from './styles.scss';
import React, {Component} from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import Template from './Template/index.jsx';
import Login from './Login/index.jsx';
import NotFound from './NotFound/index.jsx';
import 'whatwg-fetch';
import Upload from './Upload/Upload.jsx';
import MenuComponent from './Compnonents/MenuComponent/index';
import Admin from './AdminSearch/AdminSearch.jsx';
import Match from './EmployeeMatch/Match.jsx';
import Manage from './Manage/Manage.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {user: false};
    this.onUserLogin = this.onUserLogin.bind(this);
    window.onUserLogin = this.onUserLogin;
    window.user = false;
  }

  componentDidMount() {
    fetch('/api/user').then((user) => {
      this.setState({user: user});
    }).catch(console.error);
  }

  onUserLogin(user) {
    console.log(user);
      console.log("user login function called", user);
      this.setState({user});
      window.user = user;
  }

  render() {
    console.log("Re Rendering");
    return (
      <div>
        <Router history={browserHistory}>
          <Route component={Template} path="/">
            <IndexRoute components={{part: Login}}/>
            <Route path="login" components={{part: Login}}/>
            <Route path="upload" components={{part: Upload}}/>
            <Route path="admin" component={{part: Admin}}/>
            <Route path="match" component={{part: Match}}/>
            <Route path="manage" component={{part: Manage}}/>
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