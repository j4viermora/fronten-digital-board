import React from "react";
import { Redirect, Route,  Switch } from "react-router-dom";
import { Navegacion } from "../../components/NavBar/Navegacion";
import { Perfil } from "./Perfil";
import { Grupos } from "./Grupos"
import { Publicadores } from "./Publicadores"
import { SinglePub } from "./SinglePub";
import { SingleGrupo } from "./SingleGrupo";
import { SideBar } from "../../components/SideBar/SideBar";
import { Col, Row } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <>
       <Navegacion />
       <Row style={{ margin: 0 , padding: 0}}>
          <Col lg={ 2 } md={ 3 } style={{ margin: 0, padding: 0 }} >
                <SideBar />
          </Col> 
          <Col lg={10} md={ 9 } style={{ margin: 0, padding: 0 }}>
                <div className= "mt-5" >
                  <Switch>            
                        <Route exact path='/app/perfil' component={ Perfil }/ >
                        <Route exact path="/app/grupos" component={ Grupos }/ >
                        <Route exact path="/app/publicadores" component={ Publicadores }/ >
                        <Route exact path="/app/publicadores/:pubId" component={ SinglePub }/ >
                        <Route exact path="/app/grupos/:pubId" component={ SingleGrupo }/ >        
                      <Redirect to="/app/perfil"/>
                </Switch>
            </div>
          </Col>        
       </Row>
            
    </>
  );
};
