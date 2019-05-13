import React, { Component } from "react";
import Login from './components/Login';
import Main from './components/Main';
import './index.css';
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchUser } from './actions';
import { colorChange } from './actions';


class App extends Component {
    state = {}

    componentDidMount() {
        this.props.fetchUser();
    }

    // logName() {
    //     console.log(this.props.auth);
    //     if (!this.props.auth) {
    //         return <div>Nothing</div>
    //     } else {
    //         return <h1>Hello {this.props.auth.name}</h1>
    //     }
    // }

    render() {
        return (
            <Router>
                <div className={`container-fluid h-100 ${this.props.color}`}>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/main' component={Main} />
                    <Route exact path='/lofi' component={Main} />
                    <Route exact path='/reggae' component={Main} />
                    <Route exact path='/indie' component={Main} />
                    <Route exact path='/jazz' component={Main} />
                    <Route exact path='/morningcoffee' component={Main} />
                    <Route exact path='/metal' component={Main} />
                </div>
            </Router>
        );
    }
}

function mapStateToProps({ auth, color }) {
    return { auth, color };
}

export default connect(mapStateToProps, { fetchUser, colorChange })(App);