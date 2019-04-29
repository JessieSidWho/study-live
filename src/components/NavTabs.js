import React from "react";

function NavTabs(props) {
  return (
    
      <ul id="behindTabs" className="nav nav-tabs row">
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
            href="#tropical"
            onClick={() => props.handlePageChange("Tropical")}
            className={props.currentPage === "Tropical" ? "nav-link active" : "nav-link"}
          >
            Tropical
        </a>
        </li>
        <li className="nav-item col-md-2">
          <a id="tabName"
            href="#classical"
            onClick={() => props.handlePageChange("Classical")}
            className={props.currentPage === "Classical" ? "nav-link active" : "nav-link"}
          >
            Classical
        </a>
        </li>
      </ul>
    
  );
}

export default NavTabs;
