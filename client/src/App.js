import React, { Component } from "react";
import Login from './components/Login';
import Main from './components/Main';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchUser } from './actions';


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
                <>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/main' component={Main} />
                </>
            </Router>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { fetchUser })(App);