import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Lofi from "./pages/Lofi";
import Tropical from "./pages/Tropical";
import Classical from "./pages/Classical";

class Pages extends Component {
  state = {
    currentPage: "Lofi"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Lofi") {
      return <Lofi />;
    } else if (this.state.currentPage === "Tropical") {
      return <Tropical />;
    } else if (this.state.currentPage === "Classical") {
      return <Classical />;
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