/**
 * Created by macdja38 on 2017-03-04.
 */

import React, {Component} from 'react';

export default class Template extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (<div>
      <header>
        <ul role="nav">
          <li><Link to="about">About</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
      </header>
      <main>
        // this is like doing <About/> or <Contact/>
        // but the router does it for you
        {this.props.activeRoute}
      </main>
      <footer>
        Copyright 2014 Somebody
      </footer>
    </div>
  )
  }
}