import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div className="Smurf" key={smurf.id}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
                <button onClick={e => this.props.deleteSmurf(e, smurf.id)}>Delete</button>
                <button onClick={e => this.props.updateSmurfForm(e, smurf)}>Update</button>
              </div>
            );
          })}
        </ul>
        <Link to="/smurf-form">Add a Smurf</Link>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
