import React from 'react'
import { GridGrupos } from '../../components/GridGrupos';
import { grupos } from "../../data/grupos";

export const Grupos = () => {
    

    
    return (
        <>
            <GridGrupos 
            
            data={ grupos } />  

            
        </>
    )   
}
