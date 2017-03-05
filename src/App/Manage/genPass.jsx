import React, {Component} from 'react';
import 'whatwg-fetch';

export default class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: false};
    this.usernameChange = this.usernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  usernameChange(event) {
    console.log(event.target.value);
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    fetch('/login/makeAdmin', {method: "POST",   headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify({user: window.user, username: this.state.username, password: Date.now()})}).then((user) => {
      this.setState({user});
      console.log("1", user);
    });
    console.log('A name was submitted: ', JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    if (this.state.password) {
      return (<div><p>User generated with </p>{`Username: ${this.state.username}, Password: ${this.state.password}`}</div>)
    }
    return (<div>
      <p>Change Password</p>
      <form onSubmit={this.handleSubmit} className="form-horizontal">
        <label>
          Username:
          <input value={this.state.username} onChange={this.usernameChange} type="text" name="username"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}