import { types } from "../types/types"

const initialState = {
    user: '',
    uid: null,
    checking: false,
    logged: false
}

export const authReducer = ( state = initialState , action ) => {

    switch( action.type ){

            case types.STARTLOGIN:
                return {
                    ...state,
                    checking: true,
                }
            case types.AUTHLOGIN:
                return {
                    ...state,
                    user    : action.payload.name,
                    uid     : action.payload._id,
                    role    : action.payload.role,
                    checking: false,
                }

            case types.AUTHLOGOUT:
                return {
                    ...initialState,
                }
            default:
                return state
    }
}