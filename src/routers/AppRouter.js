import React from 'react'
// import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
  } from "react-router-dom";
import Dashboard from '../pages/dasboard/dashboard/Dashboard';
import { NotFount } from '../pages/ui/404';
import { Register } from '../pages/auth/Register'
import { Login } from '../pages/auth/Login'



export const AppRouter = () => {
    
    // const { uid: isAuthenticated } = useSelector( state => state.Auth )
    
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
                            <Route exact path="/login" component={ Login } /> 
                            <Route exact path="/register" component={ Register } />
                            <Route path="/" component={ Dashboard } />
                            <Route path="/404" component={ NotFount } />
                           
                           <Redirect to="/login" />    
                    </Switch>
                </div>
         </Router>
        </div>
    )
}
