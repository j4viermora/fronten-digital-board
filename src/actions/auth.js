import axios from 'axios';
import { types } from '../types/types';
const baseURl= process.env.REACT_APP_DG;

export const startLogin = ({ email, password }) => {

    return async( dispatch ) => {
       
        try{
            dispatch( { type: types.STARTLOGIN } )
            const resp = await axios.post( `${baseURl}/users/login`,{ email, password 
            } )
            const { data } = await resp.data
            console.log(data)

            if( data ){
                localStorage.setItem( 'toke', data.token )
                dispatch( login( data ) )
            }
        }                   
        catch(errs){
            console.log(errs)
        }   
    } 
};

export const logout = () => ({
        type: types.AUTHLOGOUT,
    })

const login = ( data ) => ({
        type: types.AUTHLOGIN,
        payload: data
    })