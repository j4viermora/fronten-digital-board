import { types } from "../types/types"

const initialState = {
    checking: true,
}


export const authReducer = ( state = initialState , action ) => {

    switch( action.type ){

            case types.startLogin:
                return {
                    ...state,
                    checking: false,
                     ...action.payload
                }

            case types.startLogout:
                return {
                    ...initialState,
                    checking: true, 
                }
            default:
                return state
    }
}