import React, { Fragment } from 'react';
import Login from './components/login';
import './App.css';
import Dashboard from './components/dashboard';
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <Fragment>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
            </Fragment>
        </Router>
    );
}

export default App;
