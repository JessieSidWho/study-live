import React, { Component } from 'react';
import ToggleSwitch from './ToggleSwitch';

class NavBar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-dark bg-dark">

               <ToggleSwitch/>

                <a className="navbar-brand " href="/" style={{color: '#ff4500', fontSize: '30px'}}>study live</a>

                <a href='http://localhost:3001/api/logout'><button className="btn btn-secondary btn-block" >Logout</button></a>

            </nav>
        );
    }
}
 
export default NavBar;