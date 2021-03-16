
const initialState = {
    Grupos: [
        {}
    ]
}


export const pubReducer = ( state = initialState , action ) => {

            switch ( action.type ) {

                case "Hola":
                    return {
                        ...state,
                    }

                default:
                 return state
             }


}
