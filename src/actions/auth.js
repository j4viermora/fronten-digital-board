import { simpleFetch } from '../services/fetch'
import { types } from '../types/types'
import Swal from "sweetalert2";


export const startLogout = (  ) => {

    return ( dispatch ) => {

        localStorage.clear();

        dispatch( logout() );

    }
}

const logout = () => ({
         type : types.startLogout,
})



export const StartLogin = ( { email, password } ) => {
    return async( dispatch ) => {

        const resp = await simpleFetch( 'users/login', { email, password }, 'POST' );
        const body = await resp.json();
        console.log(body)
       
        
        const {data} = body

        if ( !!data ) {

            localStorage.setItem( 'token' , JSON.stringify( data.token ));
            localStorage.setItem( 'token-init-date', new Date().getTime() );

            dispatch( 
                login(
                    {
                        uid: data._id,
                        name: data.name
                    }
                )
             )

        }else{
            Swal.fire( 'error', body.message )
        }
    }
}


const login = ( user ) => {
    return {
        type: types.startLogin,
        payload: user
    }
}