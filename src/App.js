import React, { Component } from "react";
import Navbar from './components/Navbar';
import PagesContainer from "./components/PagesContainer";
import Home from './components/pages/Home';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchUser } from './actions';

// chat api dependencies
import Chat from './components/Chat';
// import axios from 'axios';
// import { subscribeToTimer, socket } from './sockets/client';
// import "./App.css";

class App extends Component {
    state = {}

    componentDidMount() {
        this.props.fetchUser();
    }

    logName() {
        console.log(this.props.auth);
        if (!this.props.auth) {
            return <div>Nothing</div>
        } else {
            return <h1>Hello {this.props.auth.name}</h1>
        }
    }

    render() {
        return (
            <Router>
                {this.logName()}
                <Navbar />
                <div className="row">
                    <div className="col-md-8 border-bottom-0 border-light bg-dark text-white">
                        <Route exact path='/' component={Home} />
                    </div>

                    <div className="col-md-4 border border-light bg-dark text-white rounded-lg">
                        <Chat />
                    </div>
                </div>
            </Router>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { fetchUser })(App);