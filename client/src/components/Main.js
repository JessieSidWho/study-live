import React, { Component } from 'react';
import PagesContainer from './PagesContainer';
import NavBar from './NavBar';
import Chat from './Chat';
import { connect } from 'react-redux';
import { colorChange } from './../actions';

class Main extends Component {
    render() { 
        return (
            <>
                <NavBar />
                
                <div className="row">
                    <div className={`col-md-8 border-bottom-0 ${this.props.color}`}>
                        <PagesContainer />
                    </div>

                    <div className={`col-md-4 border ${this.props.color} rounded-lg`}>
                        <Chat />
                    </div>
                </div>
            </>
        );
    }
}
 


function mapStateToProps({ color }) {
    return { color };
}

export default connect(mapStateToProps, { colorChange })(Main);