import React from "react";

function NavTabs(props) {
  return (
    
      <ul className="nav nav-tabs row">
        <li className="nav-item col-md-2 pt-2 ml-2">
          
            Jessie Sidhu
        
        </li>
        <li className="nav-item col-md-2 offset-1">
          <a
            href="#home"
            onClick={() => props.handlePageChange("Home")}
            className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
        </a>
        </li>
        <li className="nav-item col-md-2">
          <a
            href="#porfolio"
            onClick={() => props.handlePageChange("Portfolio")}
            className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
        </a>
        </li>
        <li className="nav-item col-md-2">
          <a
            href="#contact"
            onClick={() => props.handlePageChange("Contact")}
            className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
        </a>
        </li>
      </ul>
    
  );
}

export default NavTabs;
