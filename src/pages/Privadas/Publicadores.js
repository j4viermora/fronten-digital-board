import React from 'react'

export const Publicadores = () => {
    return (
        <div className="container" >
            <div className="row" >
                <div className="col-6" >
                  <div className="row" >

                  </div>
                    <h2> Buscar Publicador </h2>
                    <div className="row mt-3">
                        <div className="col-6">
                            <input className="form-control mb-3" />
                        </div>
                        <div className="col-6">
                            <button className="btn btn-primary">Buscar</button>
                        </div>
                    </div>
                </div>

                <div className="text-center col-6" >
                    <h2> Resultad de busqueda </h2>
                </div>
            </div>
        </div>
    )
}
