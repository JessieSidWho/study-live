import React from "react";
import Navbar from './components/Navbar';
import PagesContainer from "./components/PagesContainer";
import './index.css';

const App = () => {
    return (
        <>
          <Navbar />
            <div className="row">
                <div id="col" className="col-md-8">
                    <PagesContainer />
                </div>
                <div className="col-md-4 border border-top-0 border-dark">
                    Hello
                </div>
            </div>
            <div className="bg-dark"> 
              {/* div for comments */}
            </div>
        </>
    )
}

export default App;
