import React from 'react'
import { CardGrupos } from './CardGrupos'

export const GridGrupos = ({ data }) => {

    const grupos = data 

    return (
       
        <div className="container" >
        <div className="row">
            
            {
                grupos.map( grupo  => (
                <div
                key={ grupo }
                 className="mb-5 col-4" >
                    <CardGrupos
                      { ...grupo }
                    />
                </div>
                ))
            }
        </div>
        </div>
    )
}
