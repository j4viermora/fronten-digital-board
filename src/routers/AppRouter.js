import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
import { Dashboard } from '../pages/Privadas/Dashboard';
import { Home } from '../pages/Publicas/Home';
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';


const isAuthenticated = true;


export const AppRouter = () => {
   
    return (
        <div>
         <Router>
               <div>
                    <Switch>                            
                            <PrivateRouters 
                            path="/app"
                            component={ Dashboard }
                            isAuthenticated={ isAuthenticated }
                            />
                            <PublicRouters 
                            path='/'
                            component={ Home }
                            isAuthenticated={ isAuthenticated }
                            />        
                    </Switch>
                </div>
         </Router>
        </div>
    )
}
