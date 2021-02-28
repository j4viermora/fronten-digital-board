import React from 'react'
import { useParams } from 'react-router-dom';
import { CardPub } from '../../components/CardPub'
import { publicadores } from "../../data/publicadores";


export const SingleGrupo = () => {
    
    const params = useParams()
    console.log(params)

    return (
        <div className="container">
            <div className="row" >
                <div className="text-center" >
                  <h2> Grupo numero 1 </h2>
                    <hr  />
                </div>
                {
                    publicadores.map( ( publicador ) => (
                        <CardPub
                        key={ publicador }
                        { ...publicador }
                        />
                    ) )
                }

            </div>
        </div>
    )
}
