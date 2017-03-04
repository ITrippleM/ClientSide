/**
 * Created by macdja38 on 2017-03-04.
 */

import React, {Component, Link} from 'react';

export default class Template extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <header>
          <ul role="nav">
            <li><Link to="about">About</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
        </header>
        <main>
          {this.props.activeRoute}
        </main>
        <footer>
          Copyright 2014 Somebody
        </footer>
      </div>
    )
  }
}