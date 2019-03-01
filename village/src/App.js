import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({
          smurfs: response.data
        })
      })
      .catch(error => {
        console.log("Unable to GET data.");
      })
  }

  addSmurf = (smurf) => {
    //creates new smurf from smurf passed in from the smurf form and gives it a unique id
    const newSmurf = {
      ...smurf,
      id: this.state.smurfs.length+1
    }
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      // updates the previous state with the new smurf
      this.setState(prevState => ({
        ...prevState,
        smurfs: response.data
      }));
    })
    .catch(error => {
      console.log("Unable to add new smurf to database.");
    })
  }

  deleteSmurf = (e, id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        this.setState({
          smurfs: response.data
        });
      })
      .catch(error => {
        console.log("Unable to delete the smurf.");
      })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path="/smurf-form" render={props => <SmurfForm addNewSmurf={this.addSmurf} /> } />

        <Route 
          exact path="/" 
          render={ props => 
            <Smurfs 
              smurfs={this.state.smurfs} 
              deleteSmurf={this.deleteSmurf}
            /> 
          } 
        />
      </div>
    );
  }
}

export default App;
