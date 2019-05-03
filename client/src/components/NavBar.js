import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-dark bg-dark">

                <a className="navbar-brand offset-5" href="/" style={{color: '#ff4500', fontSize: '30px'}}>study live</a>

                <a href='http://localhost:3001/api/logout'><button className="btn btn-secondary btn-block" >Logout</button></a>

            </nav>
        );
    }
}
 
export default NavBar;