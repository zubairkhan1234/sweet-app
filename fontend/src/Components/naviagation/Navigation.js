


import React from 'react'
import Login from '../login/Login'
import Signup from '../signup/SignUp'
import Dashboard from '../dashboard/Dashboard'
import Home from "../home/Home";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function Navigation() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}


export default Navigation; 

