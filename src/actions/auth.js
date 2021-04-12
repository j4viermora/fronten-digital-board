import axios from 'axios';
import Swal from 'sweetalert2';
import { types } from '../types/types';
const baseURl= process.env.REACT_APP_DG;

export const startLogin = ({ email, password }) => {

    return async( dispatch ) => {

        console.log({ email, password })

        try{
            dispatch( { type: types.CHECKINGSTART } )
            const resp = await axios.post( `${baseURl}/users/login`,{ email, password
            } )
            const { data } = await resp.data

            if( data ){
                localStorage.setItem( 'token', data.token )
                dispatch( login( data ) )
            }
        }
        catch(errs){
            console.log( 'todo se rompio' )
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
            dispatch({ type: types.CHECKIFINISH })

        }
    }
};

export const startRegister = ( value ) => {

        return async( dispatch ) => {
        try{

            const resp = await axios.post(`${baseURl}/users/register`, value )
         
            if( resp.data ){
              
                Swal.fire({
                   position: 'top-end',
                   icon: 'success',
                   title: 'Registro Exitoso',
                   showConfirmButton: false,
                   timer: 1500
                 })
                 
           }         

        }catch(err){
            console.log(err)
        }


        }

}

export const logout = () => ({
        type: types.AUTHLOGOUT,
    })

const login = ( data ) => ({
        type: types.AUTHLOGIN,
        payload: data
    })