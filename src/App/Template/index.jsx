/**
 * Created by macdja38 on 2017-03-04.
 */

/**
 * Created by macdja38 on 2017-03-04.
 */

import React, {Component} from 'react';

export default class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {data: false};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({data: true});
    }, 5000);
  }
  render() {
    if (this.state.data) {
      return (<div><p>Template</p></div>)
    } else {
      return (<div><p>Loading................................</p></div>)
    }
  }
}