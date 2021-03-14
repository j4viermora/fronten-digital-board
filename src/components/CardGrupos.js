import React from 'react'
import { Link } from 'react-router-dom'



export const CardGrupos = ({ 
  Grupo,
  Conductor,
  Auxiliar,
  Integrante,
} ) => {
  

  
  

    return (
      <Link style={{ textDecoration: 'none', color: 'black' }} to={`/app/grupos/${ Grupo }`} > 
        <div className="card" >
            <div className="card-body">
                <h3 className="text-center" >{ Grupo }</h3>
                <p> <strong>Superintendente</strong> { Conductor }</p>
                <p> <strong>Auxiliar</strong> { Auxiliar }</p>
                <p> <strong>Numero de integrantes</strong> 12</p>
            </div>
        </div>
      </Link>
    )
}
