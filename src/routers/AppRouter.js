import React from 'react'
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
  } from "react-router-dom";
import { Dashboard } from '../pages/Privadas/Dashboard';
import { Home } from '../pages/Publicas/Home';
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';




export const AppRouter = () => {
    
    const { uid: isAuthenticated } = useSelector( state => state.Auth )
    
    return (
        <div>
         <Router>
               <div>
                    <Switch>                            
                            <PrivateRouters 
                            path="/app"
                            component={ Dashboard }
                            isAuthenticated={ !!isAuthenticated }
                            />
                            <PublicRouters
                            path='/'
                            component={ Home }
                            isAuthenticated={ !!isAuthenticated }
                            />    

                            <Redirect to="/" />    
                    </Switch>
                </div>
         </Router>
        </div>
    )
}
