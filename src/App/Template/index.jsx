/**
 * Created by macdja38 on 2017-03-04.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
import MenuComponent from '../Compnonents/MenuComponent';

export default class Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <MenuComponent user={window.user}/>
          <ul role="nav">
            <li><Link to="login">{"Login"}</Link></li>
            <li><Link to="Upload">{"Upload"}</Link></li>
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