import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { NavegacionPublica } from '../../components/NavBar/NavegacionPublica'
import Contacto from './Contacto'
import { Login } from './Login'
import { Nosotros } from '../Privadas/Nosotros'


export const Home = () => {
    return (
        <div>
            <NavegacionPublica />
                <div className="mt-5" >
                    <Switch>               
                            <Route exact path="/nosotros" component={ Nosotros } />
                            <Route exact path="/contacto" component={ Contacto } />
                            <Route exact path="/login" component={ Login } />

                            <Redirect to="/nosotros" />
                    </Switch>
                </div>
        </div>
    )
}
