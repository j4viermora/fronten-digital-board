import React from "react";
import "bootstrap";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import './login.css';
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { StartLogin } from "../../actions/auth";
const { Group, Control } = Form;
const { Body } = Card;



export const Login = () => {
  
  const dispatch = useDispatch()

  const formik = useFormik( {
    initialValues:{
      email:"",
      password:""
    },
    onSubmit: value  => dispatch( StartLogin( value ))
  });
 
  return (
    <>
      <Row className="main-center">
        <Col lg={ 6 }>
        <Card className="animate__animated animate__fadeInUp" id="login-card">
          <Body>
            <Form onSubmit={ formik.handleSubmit }>
              {/**Email */}
              <Group className="mb-3" controlId="formBasicEmail">
                <h4>Email</h4>
                <Control 
                autoComplete="off"
                type="email" 
                placeholder="Tu email"
                name="email"
                onChange={ formik.handleChange }
                value={ formik.values.email }
                />
              </Group>
              <Group controlId="formBasicPassword">
                <h4>Contraseña</h4>
                <Control 
                autoComplete="off" 
                type="password" 
                placeholder="*****"
                name="password"
                onChange={ formik.handleChange }
                value={ formik.values.password }
                />
              </Group>
              <Button 
              type= "submit"  
              className="mt-3">
                    Login
              </Button>
            </Form>
          </Body>
        </Card>
        </Col>
      </Row>

    
    </>
  );
};
