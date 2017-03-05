/**
 * Created by macdja38 on 2017-03-04.
 */

import React, { Component } from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import { Button, IconButton, FloatingButton, FlatButton } from 'react-buttons';
import Select from 'react-select';
import Multiselect from './MultivariableSelect.jsx';
import {Link} from 'react-router';



let jobType = [
  { value: 'programming', label: 'Programming' },
  { value: 'construction', label: 'Construction'},
  {value: 'communications', label: 'Communications'},
  {value: 'management ', label: 'Management '},
  {value: 'entry level', label: 'Entry Level'},
  {value: 'teaching', label: 'Teaching'},
];

/*
 .then((data) => {
 this.setState({fetchedUsers: data});
 });
 */

export default class AdminSearch extends Component {
  constructor(props) {
    super(props);
    this.updateLanguage = this.updateLanguage.bind(this);
    this.updateCodingLanguage = this.updateCodingLanguage.bind(this);
    this.updateKeywords = this.updateKeywords.bind(this);
    this.updateJobType = this.updateJobType.bind(this);
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

  updateJobType(data) {
    this.setState({ jobType: data})
  }

  updateLanguage(event) {
    this.setState({ language: event.target.value })
  }

  updateCodingLanguage(event) {
    this.setState({ codingLanguage: event.target.value })
  }

  updateKeywords(event) {
    this.setState({ keywords: event.target.value })
  }

  handleSubmit(event) {
    let finalArray = this.pushFinal();
    this.finalSubmit(finalArray);

    event.preventDefault()
  }

  finalSubmit(finalArray){
    fetch('/sendSearch', {method: "POST",   headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify({user: window.user, keys: finalArray})});
    console.log('Your Request Was Submitted');
    event.preventDefault();
  }

  pushFinal(){
    let newArray = [];
    newArray.push(...this.state.language);
    newArray.push(...this.state.codingLanguage);
    newArray.push(...this.state.keywords);
    return newArray;
  }

  toArray(s) {

    for(let i=0; i<s.length;i++) {
      this.myArray.push(s[i]);
    }
  }
  render() {
    const { searchTerm } = this.state;
    const { searchTerm2 } = this.state2;
    const { searchTerm3 } = this.state3;
    let a4 = this.state4;
    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Welcome! Please fill out the form below to find the best employee for the job.</h1>
          <h2>Job Type.</h2>

          <Multiselect label="Multi-select" onChange={this.updateJobType} />

          <h2>Fluent Languages.</h2>

          <input
            type="text"
            placeholder="Languages..."
            value={this.state.language}
            onChange={this.updateLanguage}
          />

          <h2>Coding Languages Required.</h2>

            <input
              type="text"
              placeholder="Languages..."
              value={searchTerm2}
              onChange={this.updateCodingLanguage}
            />

          <h2>Key Words</h2>

          <input
            type="text"
            placeholder="Key Words..."
            value={searchTerm3}
            onChange={this.updateKeywords}
          />

          <input
            type="submit"
            value="Search"
          />
        </form>
      </div>
  }
  if ( ) {
    render(){
      return (
        <div>
          <h2> Job Type. </h2>
        </div >
    )
    }
  }

}

