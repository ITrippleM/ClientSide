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
        this.state = { searchTerm: '', value: [] };
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
        this.onClick = this.onClick.bind(this);
        this.logChange= this.logChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateSearchArray = this.updateSearchArray.bind(this);

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

    updateSearchArray(value){
      this.setState({ value, })
    }

    handleSubmit(event) {
        this.finalSubmit();

        event.preventDefault()
    }

    finalSubmit(){
      let input = document.querySelector('input[type="file"]');

      let data = new FormData();
      data.append('file', input.files[0]);
      data.append('user', window.user);
      data.append('data', this.state);

      fetch('/resume', {
        method: 'POST',
        body: data
      });

      console.log('Your Request Was Submitted');
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
                    value={this.state.searchTerm}
                    onChange={this.updateSearchTerm}
                  />

                  <h2>Job Type.</h2>

                  <Multiselect label="Multi-select"
                               onChange={this.updateSearchArray}
                  />

                  <h2>Upload Resume(.pdf only).</h2>
                  <input
                    type="file"
                    />

                  <input
                    type="submit"
                    value="Search"
                  />
              </form>

          </div>)
    }

}
