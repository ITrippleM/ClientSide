/**
 * Created by macdja38 on 2017-03-04.
 */

import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class MenuComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Link to="/upload/resume" >Upload</Link>
      <Link to="/login" >Login</Link>
      <Link to="/admin" >Admin</Link>
    </div>)
  }
}

MenuComponent.propTypes = {
  user: React.PropTypes.object,
};

export default MenuComponent;