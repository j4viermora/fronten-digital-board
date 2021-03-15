import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './cardGroup.css';
import 'animate.css'

export const CardGrupos = ({ 
  Grupo,
  Conductor,
  Auxiliar,
  Integrante,
} ) => {
  
    return (
      <Link to={`/app/grupos/${ Grupo }`} > 
          <Card className="animate__animated animate__fadeInUp" >
            <Card.Body>
              <Card.Title className="text-center" style={{ fontSize: '2rem' }} >
                      { Grupo }
              </Card.Title>
                <p> <strong>Superintendente</strong> { Conductor }</p>
                <p> <strong>Auxiliar</strong> { Auxiliar }</p>
                <p> <strong>Numero de integrantes</strong> 12</p>
            </Card.Body>
          </Card>    
      </Link>
    )
}


CardGrupos.propTypes = {
  Grupo : PropTypes.string.isRequired,
  Conductor: PropTypes.string.isRequired,
  Auxiliar: PropTypes.string.isRequired,
  Integrante: PropTypes.string
}