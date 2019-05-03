import React, { Component } from "react";
import Login from './components/Login';
import Main from './components/Main'
import PagesContainer from "./components/PagesContainer";
import Chat from './components/Chat';
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
                {this.logName()}
                {/* <Login /> */}
                <Route exact path='/' component={ Login } />
                <Route exact path='/main' component={ Main } />
                {/* <Route ex */}
                {/* <div className="row">
                    <div className="col-md-8 border-bottom-0 border-light bg-dark text-white"> */}
                        {/* <Route exact path='/' component={PagesContainer} /> */}
                        {/* <PagesContainer />
                    </div>

                    <div className="col-md-4 border border-light bg-dark text-white rounded-lg">
                        <Chat />
                    </div>
                </div> */}
                </>
            </Router>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { fetchUser })(App);