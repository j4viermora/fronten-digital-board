import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navegacion = (  ) => {

  const [ state, setState ] = useState( false )

  const handleButton = () => {

      if( state ) {

        document.querySelector( '.navbar-collapse' ).style.display="block"
        setState( !state )
     
      }else{

        document.querySelector( '.navbar-collapse' ).style.display="none"
        setState( !state )
       
      }

  }

  
  return (
        <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link 
          className="navbar-brand" 
          to="/">
            Cartelera digital
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={ handleButton }
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
          
            <li className="nav-item">
              <Link 
              className="nav-link" 
              to="/app/grupos" >
                Grupos
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
              className="nav-link" 
              to="/app/publicadores" >
                Publicadores
              </Link>
            </li>
            <li className="nav-item">
              <Link 
              className="nav-link" 
              to="/app/perfil" >
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <Link 
              className="nav-link" 
              to="/inicio" >
                Salir
              </Link>
            </li>
              
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}
