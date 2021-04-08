import React from 'react'
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
  } from "react-router-dom";
import Dashboard from '../pages/dasboard/Dashboard';




export const AppRouter = () => {
    
    const { uid: isAuthenticated } = useSelector( state => state.Auth )
    
    return (
        <div>
         <Router>
               <div>
                    <Switch>                            
                            {/* <PrivateRouters 
                            path="/app"
                            component={ Dashboard }
                            isAuthenticated={ !!isAuthenticated }
                            />
                            <PublicRouters
                            path='/'
                            component={ Home }
                            isAuthenticated={ !!isAuthenticated }
                            />     */}
                            <Route path="/" component={ Dashboard } />
                            <Redirect to="/" />    
                    </Switch>
                </div>
         </Router>
        </div>
    )
}
