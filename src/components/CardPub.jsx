import React from 'react'
import { Link } from 'react-router-dom'

export const CardPub = ( { 
    nombre,
    horas,
    estudios, } ) => {
    
 

    return (
        <>
            <div className="col-4">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="mb-3 card-text text-center">
                            { nombre }/ Enero
                        </h5>
                        <div className="row mb-3">
                        
                        <div className="col-8">
                            <p className="card-text" > Horas</p>
                            </div>      
                            <div className="col">
                                <input
                                value={horas.febrero}
                                className="card-text form-control"
                                />
                            </div>
                                
                        </div>
                        <div className="row mb-3">
                        
                        <div className="col-8">
                            <p className="card-text">Estudios</p>
                            </div>      
                            <div className="col">
                                <input
                                value={ estudios.febrero }
                                className="card-text form-control"
                                />
                            </div>

                        </div>
                        <div className="row mb-3">
                        
                        <div className="col-8">
                            <p className="card-text" >Revisitas</p>
                            </div>      
                            <div className="col">
                                <input
                                value="50"
                                className="card-text form-control"
                                />
                            </div>
                        </div>
                        <div className="text-center">
                        <Link 
                        className="btn btn-primary"
                        to={`/app/publicadores/${ nombre }`}> Ver Ficha completa</Link>
                        </div>
                    </div>
                </div>   
            </div>
        </>
    )
}
