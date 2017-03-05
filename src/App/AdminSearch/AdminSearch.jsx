/**
 * Created by macdja38 on 2017-03-04.
 */

import React, { Component } from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import { Button, IconButton, FloatingButton, FlatButton } from 'react-buttons';
import Select from 'react-select';




let options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];



export default class AdminSearch extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.logChange= this.logChange.bind(this);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  logChange(val) {
    console.log("Selected: " + val);
  }

  onClick(){

  }

  render() {
    return (

      <div>

        <Button faIcon="plus" onClick={this.onClick}>New Thing</Button>
        <Button materialIcon="favorite" iconBefore={true} onClick={this.onClick}>Favorite</Button>

        <IconButton faIcon="plus" label="Add a new thing" onClick={this.onClick} />
        <IconButton materialIcon="favorite" label="Add this as a favorite" onClick={this.onClick} />


        <FlatButton color="primary" onClick={this.onClick} />

        <FloatingButton faIcon="plus" label="Add a new thing" onClick={this.onClick} />

        <Select
          name="form-field-name"
          value="one"
          options={options}
          onChange={this.logChange}
        />
        </div>
    )
  }
}

