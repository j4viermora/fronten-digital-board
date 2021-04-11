import React from 'react'
// import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import Dashboard from '../pages/app/dashboard/Dashboard';
import { Login } from '../pages/auth/Login';
import { PublicRouters } from './PublicRouters';
import { PrivateRouters } from './PrivateRouters';
import { useSelector } from 'react-redux'
export const AppRouter = () => {

    const { uid: isAuthenticated } = useSelector( state => state.Auth )

    return (
        <div>
         <Router>
               <div>
                    <Switch>
                            <PublicRouters  exact path="/login" isAuthenticated={isAuthenticated}  component={ Login }/>
                            <PrivateRouters path="/"  isAuthenticated={isAuthenticated} component={ Dashboard } />
                    </Switch>
                </div>
         </Router>
        </div>
    )
}
