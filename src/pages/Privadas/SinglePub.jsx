import React from 'react'

export const SinglePub = () => {
    return (
        <div className="container">
           <div className="card" style={{ borderRadius: 30 }}>
                <div className="card-body">
                    <h3 className="card-title text-center">Javier Mora</h3>
                    <div className="row  mt-5">
                        <div className="col-3" >
                            <h5 className="mb-3" >Mes</h5>
                            <p>Enero</p>
                            <p>Febrero</p>
                            <p>Marzo</p>
                            <p>Abril</p>
                            <p>Mayo</p>
                            <p>Junio</p>
                            <p>Julio</p>
                            <p>Agosto</p>
                            <p>Septiembre</p>
                            <p>Octubre</p>
                            <p>Noviembre</p>
                            <p>Diciembre</p>
                        </div>
                        <div className="col-3">
                            <h5 className="mb-3">Horas</h5>
                        </div>
                        <div className="col-3">
                            <h5 className="mb-3" >Revisitas</h5>
                        </div>
                        <div className="col-3">
                            <h5 className="mb-3">Estudios</h5>
                        </div>
                    </div>

                </div>
           </div>
        </div>
    )
}
