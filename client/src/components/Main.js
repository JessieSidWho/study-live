import React, { Component } from 'react';
import PagesContainer from './PagesContainer';
import NavBar from './NavBar';
import Chat from './Chat';

class Main extends Component {
    render() { 
        return (
            <>
                <NavBar />
                
                <div className="row">
                    <div className="col-md-8 border-bottom-0 border-light bg-dark text-white">
                        <PagesContainer />
                    </div>

                    <div className="col-md-4 border border-light bg-dark text-white rounded-lg">
                        <Chat />
                    </div>
                </div>
            </>
        );
    }
}
 
export default Main;