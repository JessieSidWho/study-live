import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { Provider } from 'react-redux';

// We need the creatStore function to house all of our state
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>
 ,
    document.getElementById("root")
 );
