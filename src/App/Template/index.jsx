/**
 * Created by macdja38 on 2017-03-04.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.part);

    return (
      <div>
        <header>
          <ul role="nav">
            <li><Link to="login">{"Login"}</Link></li>
            <li><Link to="admin">{"Admin"}</Link></li>
          </ul>
        </header>
        <main>
          {this.props.part}
        </main>

        <footer>
        </footer>
      </div>
    )
  }
}

/*
 <main>
 {this.props.part}
 </main>
 */