import React from "react";


const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark">

        <a className="navbar-brand offset-5" href="/" style={{color: '#ff4500', fontSize: '30px'}}>study live</a>

        <a href='http://localhost:3001/auth/google'><button className="btn btn-secondary btn-block">Login with Google</button></a>
        <a href='http://localhost:3001/api/logout'><button className="btn btn-secondary btn-block" >Logout</button></a>

    </nav>
)

export default Navbar;