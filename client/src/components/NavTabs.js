import React from "react";
import { Link } from 'react-router-dom'

function NavTabs(props) {
  return (
    
      <ul id="behindTabs" className="nav nav-tabs row rounded-lg">
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to="/main/lofi"
            // href="#lofi"
            // onClick={() => props.handlePageChange("Lofi")}
            className={`${props.currentPage === "Lofi" ? "nav-link active" : "nav-link"}`}
          >
            Lofi
        </Link>
        </li>
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to='/main/reggae'
            // href="#reggae"
            // onClick={() => props.handlePageChange("Reggae")}
            className={props.currentPage === "Reggae" ? "nav-link active" : "nav-link"}
          >
            Reggae
        </Link>
        </li>
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to='/main/indie'
            // href="#indie"
            // onClick={() => props.handlePageChange("Indie")}
            className={props.currentPage === "Indie" ? "nav-link active" : "nav-link"}
          >
            Indie
        </Link>
        </li>
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to='/main/jazz'
            // href="#jazz"
            // onClick={() => props.handlePageChange("Jazz")}
            className={props.currentPage === "Jazz" ? "nav-link active" : "nav-link"}
          >
            Jazz
        </Link>
        </li>
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to='/main/morningcoffee'
            // href="#morningcoffee"
            // onClick={() => props.handlePageChange("MorningCoffee")}
            className={props.currentPage === "MorningCoffee" ? "nav-link active" : "nav-link"}
          >
            Coffee
        </Link>
        </li>
        <li className="nav-item col-md-2">
          <Link id="tabName"
            to="/main/metal"
            // href="#metal"
            // onClick={() => props.handlePageChange("Metal")}
            className={props.currentPage === "Metal" ? "nav-link active" : "nav-link"}
          >
            Metal
        </Link>
        </li>
      </ul>
    
  );
}

export default NavTabs;
