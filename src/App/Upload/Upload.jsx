/**
 * Created by macdja38 on 2017-03-04.
 */

import React, { Component } from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import { Button, IconButton, FloatingButton, FlatButton } from 'react-buttons';
import Select from 'react-select';
import Multiselect from './MultivariableSelect.jsx';
import {Link} from 'react-router';
import ReactPDF from 'react-pdf'



let jobType = [
  { value: 'programming', label: 'Programming' },
  { value: 'construction', label: 'Construction'},
  {value: 'communications', label: 'Communications'},
  {value: 'management ', label: 'Management '},
  {value: 'entry level', label: 'Entry Level'},
  {value: 'teaching', label: 'Teaching'},
];



export default class Upload extends Component {

    constructor(props) {
        super(props);
        this.state = { searchTerm: '' };
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
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
        this.props.fetchRepos(this.state.searchTerm);
        this.pushFinal();
        this.finalSubmit();

        event.preventDefault()
    }

    finalSubmit(){
        fetch('/sendName', {method: "POST", body: this.state});
        fetch('/sendJobType', {method: "POST", body: this.state});
        console.log('Your Request Was Submitted');
        event.preventDefault();

  }



  render() {
    const { searchTerm } = this.state;
        return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <h1>Welcome! Please fill out the form below to Help employers find you.</h1>
                  <h2>Name</h2>

                  <input
                    type="text"
                    placeholder="Name..."
                    value={searchTerm}
                    onChange={this.updateSearchTerm}
                  />

                  <h2>Job Type.</h2>

                  <Multiselect label="Multi-select"


                  />

                  <h2>Upload Resume(.pdf only).</h2>




                  <input
                    type="submit"
                    value="Search"
                  />
              </form>

          </div>)
    }

}
