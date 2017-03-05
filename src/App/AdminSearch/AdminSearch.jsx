/**
 * Created by macdja38 on 2017-03-04.
 */

import React, {Component} from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';

import {Button, IconButton, FloatingButton, FlatButton} from 'react-buttons';
import Select from 'react-select';
import Multiselect from './MultivariableSelect.jsx';
import {Link} from 'react-router';
import { Line, Circle } from 'rc-progress';

let jobType = [
  {value: 'programming', label: 'Programming'},
  {value: 'construction', label: 'Construction'},
  {value: 'communications', label: 'Communications'},
  {value: 'management ', label: 'Management '},
  {value: 'entry level', label: 'Entry Level'},
  {value: 'teaching', label: 'Teaching'},
];

/*

 */

export default class AdminSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateLanguage = this.updateLanguage.bind(this);
    this.updateCodingLanguage = this.updateCodingLanguage.bind(this);
    this.updateKeywords = this.updateKeywords.bind(this);
    this.updateJobType = this.updateJobType.bind(this);
    this.onClick = this.onClick.bind(this);
    this.logChange = this.logChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  logChange(val) {
    console.log("Selected: " + val);
  }

  onClick() {

  }

  updateJobType(data) {
    this.setState({jobType: data})
  }

  updateLanguage(event) {
    this.setState({language: event.target.value})
  }

  updateCodingLanguage(event) {
    this.setState({codingLanguage: event.target.value})
  }

  updateKeywords(event) {
    this.setState({keywords: event.target.value})
  }

  handleSubmit(event) {
    let finalArray = this.pushFinal();
    this.finalSubmit(finalArray);

    event.preventDefault()
  }

  finalSubmit(finalArray) {
    fetch('/sendSearch', {
      method: "POST", headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({user: window.user, keys: finalArray})
    }).then((data) => {
      this.setState({fetchedUsers: data});
    });
    ;
    console.log('Your Request Was Submitted');
  }

  pushFinal() {
    let newArray = [];
    newArray.push(...this.state.language.split(","));
    newArray.push(...this.state.codingLanguage.split(","));
    newArray.push(...this.state.keywords.split(","));
    return newArray;
  }

  render() {
    if (!this.state.fetchedUsers) {
      return (

        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Welcome! Please fill out the form below to find the best employee for the job.</h1>
            <h2>Job Type.</h2>

            <Multiselect label="Multi-select" onChange={this.updateJobType}/>

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
              value={this.state.codingLanguage}
              onChange={this.updateCodingLanguage}
            />

            <h2>Key Words</h2>

            <input
              type="text"
              placeholder="Key Words..."
              value={this.state.keywords}
              onChange={this.updateKeywords}
            />

            <input
              type="submit"
              value="Search"
            />
          </form>
        </div>
      )
    }
    let a1= [];
    return (

      <div>
        <h3> Results. </h3>
        <h2> Sorted by best match </h2>
        <div>
          {this.state.fetchedUsers.map((resume) => {
            console.log(resume);
            a1.unshift(score);
            return <div>{resume.user},{resume.user.name},{resume.score},<a href="/test/"{resume.fileName}>Download Resume</a>,<Circle percent={(resume.maxScore/resume.score*100).toString()} strokeWidth="50" strokeColor="#7FFF00" /> </div>;
          })}
          <Circle percent="10" strokeWidth="50" strokeColor="#7FFF00" />
        </div>
      </div >
    )
  }
}

