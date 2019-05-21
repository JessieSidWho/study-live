import React from "react";
import "../index.css";


const Login = () => (
    <>
        <nav className="row navbar navbar-dark bg-dark justify-content-center">
            <a className="navbar-brand" href="/" style={{color: '#ff4500', fontSize: '30px'}}>study live</a>
        </nav>
        

        <div id="bar" className="row-fluid">
            <div className="col-md-12">
            </div>
        </div>

        <div className="row mt-5 justify-content-md-center">
            <div className="col-md-6 mt-5 border border-white rounded-lg p-5">
                <div className='text-white h3 text-center mb-4'>
                    <p>Welcome to Study-Live!</p>
                    <p>Login to study and talk to your peers!</p>
                </div>
                <a href='https://study-live.herokuapp.com/auth/google'><button className="btn btn-secondary btn-block">Login with Google</button></a>
            </div>
        </div>
    </>
)

export default Login;