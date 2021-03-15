import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'
import './main.css';
import 'animate.css'

export const CarteleraApp = () => {
    return (
        <div>
        <Provider store={ store } >
            <AppRouter />
        </Provider>
        </div>
    )
}
