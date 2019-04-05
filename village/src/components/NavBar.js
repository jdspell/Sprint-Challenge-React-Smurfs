import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    render(){
        return(
        <nav>
          <NavLink to="/">Smurf List</NavLink>
          <NavLink to="/smurf-form">Smurf Form</NavLink>
        </nav>
        );
    }
}