import React from "react";

function NavTabs(props) {
  return (
    
      <ul id="behindTabs" className="nav nav-tabs row rounded-lg">
        <li className="nav-item col-md-2">
          <a id="tabName"
            href="#lofi"
            onClick={() => props.handlePageChange("Lofi")}
            className={`${props.currentPage === "Lofi" ? "nav-link active" : "nav-link"}`}
          >
            Lofi
        </a>
        </li>
        <li className="nav-item col-md-2">
          <a id="tabName"
            href="#reggae"
            onClick={() => props.handlePageChange("Reggae")}
            className={props.currentPage === "Reggae" ? "nav-link active" : "nav-link"}
          >
            Reggae
        </a>
        </li>
        <li className="nav-item col-md-2">
          <a id="tabName"
            href="#indie"
            onClick={() => props.handlePageChange("Indie")}
            className={props.currentPage === "Indie" ? "nav-link active" : "nav-link"}
          >
            Indie
        </a>
        </li>
        <li className="nav-item col-md-2">
          <a id="tabName"
            href="#jazz"
            onClick={() => props.handlePageChange("Jazz")}
            className={props.currentPage === "Jazz" ? "nav-link active" : "nav-link"}
          >
            Jazz
        </a>
        </li>
        <li className="nav-item col-md-2">
          <a id="tabName"
            href="#morningcoffee"
            onClick={() => props.handlePageChange("MorningCoffee")}
            className={props.currentPage === "MorningCoffee" ? "nav-link active" : "nav-link"}
          >
            Coffee
        </a>
        </li>
        <li className="nav-item col-md-2">
          <a id="tabName"
            href="#metal"
            onClick={() => props.handlePageChange("Metal")}
            className={props.currentPage === "Metal" ? "nav-link active" : "nav-link"}
          >
            Metal
        </a>
        </li>
      </ul>
    
  );
}

export default NavTabs;
