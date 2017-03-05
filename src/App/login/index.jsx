/**
 * Created by macdja38 on 2017-03-04.
 */

import React, {Component} from 'react';
import 'whatwg-fetch';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  passwordChange(event) {
    console.log(event.target.value);
    this.setState({password: event.target.value});
  }

  usernameChange(event) {
    console.log(event.target.value);
    console.log(event.target.value);
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    fetch('/login', {method: "POST",   headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify(this.state)}).then((user) => {
      console.log("1", user);
      user.json().then(window.onUserLogin);
    });
    console.log('A name was submitted: ', JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (<div>
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <label>
          Username:
          <input onChange={this.usernameChange} type="text" name="username"/>
        </label>
        <label>
          Password:
          <input onChange={this.passwordChange} type="password" name="password"/>
        </label>
          <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}