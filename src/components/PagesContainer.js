import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import Lofi from "./pages/Lofi";
import Reggae from "./pages/Reggae";
import Indie from "./pages/Indie";
import Jazz from "./pages/Jazz";
import MorningCoffee from './pages/MorningCoffee';
import Metal from './pages/Metal';

class Pages extends Component {
  state = {
    currentPage: "/"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "/") {
      return <Home />;
    } else if (this.state.currentPage === "Lofi") {
      return <Lofi />;
    } else if (this.state.currentPage === "Reggae") {
      return <Reggae />;
    } else if (this.state.currentPage === "Indie") {
      return <Indie />;
    } else if (this.state.currentPage === "Jazz") {
      return <Jazz />;
    } else if (this.state.currentPage === "MorningCoffee") {
      return <MorningCoffee />;
    } else if (this.state.currentPage === "Metal") {
      return <Metal />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Pages;