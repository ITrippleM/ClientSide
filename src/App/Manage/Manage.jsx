/**
 * Created by macdja38 on 2017-03-04.
 */

import React, {Component} from 'react';
import 'whatwg-fetch';

export default class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {password: ""};
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  passwordChange(event) {
    console.log(event.target.value);
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    fetch('/login', {method: "PATCH",   headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify({user: window.user, password: this.state.password})}).then((user) => {
      console.log("1", user);
      user.json().then(window.onUserLogin);
    });
    console.log('A name was submitted: ', JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (<div>
      <p>Change Password</p>
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <label>
          Password:
          <input onChange={this.passwordChange} type="password" name="password"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}