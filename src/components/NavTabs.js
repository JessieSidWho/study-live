import React from "react";

function NavTabs(props) {
  return (
    
      <ul className="nav nav-tabs row">
        <li className="nav-item col-md-2 pt-2 ml-2">
          
            Study-With-Me
        
        </li>
        <li className="nav-item col-md-2 offset-1">
          <a
            href="#lofi"
            onClick={() => props.handlePageChange("Lofi")}
            className={props.currentPage === "Lofi" ? "nav-link active" : "nav-link"}
          >
            Lofi
        </a>
        </li>
        <li className="nav-item col-md-2">
          <a
            href="#tropical"
            onClick={() => props.handlePageChange("Tropical")}
            className={props.currentPage === "Tropical" ? "nav-link active" : "nav-link"}
          >
            Tropical
        </a>
        </li>
        <li className="nav-item col-md-2">
          <a
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
