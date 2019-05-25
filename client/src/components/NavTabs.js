import React from "react";
import { Link } from 'react-router-dom'

function NavTabs(props) {
  return (
    
      <ul id="behindTabs" className="nav nav-tabs row rounded-lg">
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to="/lofi"
            className={`${props.currentPage === "Lofi" ? "nav-link active" : "nav-link"}`}
          >
            Lofi
        </Link>
        </li>
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to='/reggae'
            className={props.currentPage === "Reggae" ? "nav-link active" : "nav-link"}
          >
            Reggae
        </Link>
        </li>
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to='/indie'
            className={props.currentPage === "Indie" ? "nav-link active" : "nav-link"}
          >
            Indie
        </Link>
        </li>
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to='/jazz'
            className={props.currentPage === "Jazz" ? "nav-link active" : "nav-link"}
          >
            Jazz
        </Link>
        </li>
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to='/morningcoffee'
            className={props.currentPage === "MorningCoffee" ? "nav-link active" : "nav-link"}
          >
            Coffee
        </Link>
        </li>
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to="/metal"
            className={props.currentPage === "Metal" ? "nav-link active" : "nav-link"}
          >
            Metal
        </Link>
        </li>
      </ul>
    
  );
}

export default NavTabs;
