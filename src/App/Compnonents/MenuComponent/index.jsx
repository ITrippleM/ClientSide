/**
 * Created by macdja38 on 2017-03-04.
 */

import React, {Component} from 'react';

class MenuComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>Menu</div>)
  }
}

MenuComponent.propTypes = {
  user: React.PropTypes.object,
};

export default MenuComponent;