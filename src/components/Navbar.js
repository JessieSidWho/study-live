import React from "react";
import logo from './../images/newLogo.png'

const Navbar = () => (
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand offset-5" href="/"><img src={logo} alt={'logo'} width="40%" height="30%" style={{opacity: 0.7}}/></a>
    </nav>
)

export default Navbar;