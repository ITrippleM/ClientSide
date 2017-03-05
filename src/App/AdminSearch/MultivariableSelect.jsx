import React from 'react';
import Select from 'react-select';

const jobType = [
  {value: 'programming', label: 'Programming'},
  {value: 'construction', label: 'Construction'},
  {value: 'communications', label: 'Communications'},
  {value: 'management ', label: 'Management '},
  {value: 'entry level', label: 'Entry Level'},
  {value: 'teaching', label: 'Teaching'},

];


let MultiSelectField = React.createClass({
  propTypes: {
    label: React.PropTypes.string,
  },
  getInitialState () {
    return {
      disabled: false,
      crazy: false,
      options: jobType,
      value: [],
    };
  },
  handleSelectChange (value) {
    console.log('You\'ve selected:', value);
    this.setState({value});
  },
  toggleDisabled (e) {
    this.setState({disabled: e.target.checked});
  },
  toggleChocolate (e) {
    let crazy = e.target.checked;
    this.setState({
      crazy: crazy,

    });
  },
  render () {
    return (
      <div className="section">
        <Select multi simpleValue disabled={this.state.disabled} value={this.state.value} className="selectFavs"
                placeholder="Select job Types" options={this.state.options} onChange={this.handleSelectChange}/>
      </div>
    );
  }
});

export default MultiSelectField;