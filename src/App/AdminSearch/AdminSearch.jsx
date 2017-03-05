/**
 * Created by macdja38 on 2017-03-04.
 */

import React, { Component } from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import { Button, IconButton, FloatingButton, FlatButton } from 'react-buttons';
import Select from 'react-select';
import Multiselect from './MultivariableSelect.jsx';




let jobType = [
  { value: 'programming', label: 'Programming' },
  { value: 'construction', label: 'Construction'},
  {value: 'communications', label: 'Communications'},
  {value: 'management ', label: 'Management '},
  {value: 'entry level', label: 'Entry Level'},
  {value: 'teaching', label: 'Teaching'},
];





export default class AdminSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' }
    this.state2 = { searchTerm: '' }
    this.state3 = { searchTerm: '' }
    this.updateSearchTerm = this.updateSearchTerm.bind(this)
    this.onClick = this.onClick.bind(this);
    this.logChange= this.logChange.bind(this);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  logChange(val) {
    console.log("Selected: " + val);
  }

  onClick(){

  }

  updateSearchTerm(event) {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit(event) {
    this.props.fetchRepos(this.state.searchTerm)
    event.preventDefault()
  }


  render() {
    const { searchTerm } = this.state
    const { searchTerm2 } = this.state2
    const { searchTerm3 } = this.state3
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Welcome! Please fill out the form below to find the best employee for the job.</h1>
          <h2>Job Type.</h2>

          <Multiselect label="Multiselect" />

          <h2>Fluent Languages.</h2>

          <input
            type="text"
            placeholder="Languages..."
            value={searchTerm}
            onChange={this.updateSearchTerm}
          />





          <h2>Coding Languages Required.</h2>

            <input
              type="text"
              placeholder="Languages..."
              value={searchTerm2}
              onChange={this.updateSearchTerm}
            />



          <h2>Key Words</h2>

          <input
            type="text"
            placeholder="Key Words..."
            value={searchTerm3}
            onChange={this.updateSearchTerm}
          />












          <input
            type="submit"
            value="Search"
          />
        </form>
      </div>
    )
  }
}

