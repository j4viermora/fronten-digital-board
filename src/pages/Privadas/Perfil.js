import React from 'react'

// const styel = {
//     display: 'flex',
//     justifyContent: 'space-around', 
// }


export const Perfil = () => {
    return (
        <div className="container  col-md-6 col" >
            <div className="card" style={{ borderRadius: 30 , padding: 50 }} >
                <div className="card-body" >
                   <div className="text-center">
                    <h2 className="card-title ">Javier Mora</h2>
                        <p> Administrador </p>

                    <div className="row">
                        <div className="col">
                        <div
                        className="mt-3" 
                            >
                            <h5>Horas</h5>
                            <p>50</p>

                        </div>
                        </div>
                        <div className="col">
                        <div
                        className="mt-3" 
                            >
                            <h5>Publicaciones</h5>
                            <p>10</p>

                        </div>
                        </div>
                        <div className="col">
                        <div
                        className="mt-3" 
                            >
                            <h5>Mes</h5>
                            <p>Eneros</p>
                        </div>
                        </div>
                    </div>

                   </div>
                        <h5 className="text-center mt-5" >Información del perfil</h5>
                        <label> Correo </label>
                        <input 
                        value="javier@correo.com"
                        className="form-control mb-3" />
                        <label> Clave </label>
                        <input 
                        type="password"
                        className="form-control mb-3" />
                        <label> Nueva clave </label>
                        <input className="form-control mb-3" />
                        <label> Repetir nueva clave </label>
                        <input className="form-control mb-3" />
                </div>
                        <button className="btn btn-primary block" >Guardar</button>                      
            </div>
        </div>
    )
}
