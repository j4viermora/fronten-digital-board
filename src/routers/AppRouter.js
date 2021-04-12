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
import { useSelector  } from 'react-redux'
// import { startLogin } from '../actions/auth';
export const AppRouter = () => {

    const { logged } = useSelector( state => state.Auth )

    // const dispatch = useDispatch()

    // aqui ira una funcion que se encarga de verficar que el el usuario si este loggeado

    // useEffect(() => {
    //     dispatch( startLogin({ email: "test@test.com", password:"123456" }) )
    // }, [])


    return (
        <div>
         <Router>
               <div>
                    <Switch>

                            <PublicRouters
                            exact
                            path="/login" 
                            isAuthenticated={ logged }  
                            component={ Login }
                            />

                            <PrivateRouters 
                            path="/"  
                            isAuthenticated={ logged} 
                            component={ Dashboard } 
                            />

                    </Switch>
                </div>
         </Router>
        </div>
    )
}
