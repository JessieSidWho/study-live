import React from "react";
import PagesContainer from "./components/PagesContainer";

const App = () => {
    return (
    <div className="row">
        <div className="col-md-8">
            <PagesContainer />
         </div>
        <div className="col-md-4 border border-dark">
            Hello
        </div>
    </div>
    )
}

export default App;
