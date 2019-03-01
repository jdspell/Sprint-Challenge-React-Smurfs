import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: (this.props.update ? this.props.selectedSmurf : {name: '', age: '', height: ''}),
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    this.props.addNewSmurf(this.state.smurf)

    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    });
  }

  handleInputChange = e => {
    this.setState({
      ...this.state,
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = (e, smurf) => {
    if(this.state.update){
      updateSmurf(e, smurf);
    } else {
      addSmurf
    }
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
        <Link to="/">Go to Smurf List</Link>
      </div>
    );
  }
}

export default SmurfForm;
