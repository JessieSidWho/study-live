import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Lofi from "./pages/Lofi";
import Reggae from "./pages/Reggae";
import Indie from "./pages/Indie";
import Jazz from "./pages/Jazz";
import MorningCoffee from './pages/MorningCoffee';
import Metal from './pages/Metal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class Pages extends Component {
  state = {
    currentPage: "/lofi"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <Router>
        <div>
          <NavTabs
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          <Switch>
            <Route exact path='/main' component={Lofi} />
            <Route exact path='/lofi' component={Lofi} />
            <Route exact path='/reggae' component={Reggae} />
            <Route exact path='/indie' component={Indie} />
            <Route exact path='/jazz' component={Jazz} />
            <Route exact path='/morningcoffee' component={MorningCoffee} />
            <Route exact path='/metal' component={Metal} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Pages;