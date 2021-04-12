import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PublicRouters = ({ 
    isAuthenticated,
    component : Component,
    ...rest
 }) => {
    return (
        <div>
            <Route 
            { ...rest }
                component={
                ( props ) => (
                    ( isAuthenticated )
                    ? <Redirect to="/app" />
                    : <Component { ...props }  />
                )     
            }     
            />

        </div>
    )
}
