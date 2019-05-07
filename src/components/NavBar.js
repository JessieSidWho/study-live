import React, { Component } from 'react';
import ToggleSwitch from './ToggleSwitch';
import { connect } from 'react-redux';
import { colorChange } from '../actions';

class NavBar extends Component {



    render() { 
        return (
            <nav className={`navbar navbar-dark ${this.props.color}`}>

               <ToggleSwitch/>

                <a className="navbar-brand " href="/" style={{color: '#ff4500', fontSize: '30px'}}>study live</a>

                <a href='http://localhost:3001/api/logout'><button className="btn btn-secondary btn-block" >Logout</button></a>

            </nav>
        );
    }
}
 
function mapStateToProps({ color }) {
    return { color };
}

export default connect(mapStateToProps, { colorChange })(NavBar);