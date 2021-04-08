import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { Copyright } from '../Copyright';
import { useStyles } from './styles';
import { useFormik } from 'formik';
import * as yup from 'yup';

export function FormRegister() {
  const classes = useStyles();

  const validationSchema =  yup.object({
    firstName: yup
      .string('Introduce un email')
      .min(2, 'El nombre debe ser mayor a dos caracteres')
      .required('Nombre es requerido'),
    lastName: yup
      .string('Introduce un email')
      .min( 2, 'El apellido no puede ser mayor a dos caracteres' )
      .required('Apellido es requerido'),
    email: yup
      .string('Introduce un email')
      .email( 'Escribe un email valido' )
      .required('Email es requerido'),
    password: yup
      .string('Introduce un email')
      .min( 6, 'La contraseña debe ser mayor a 6 caracteres' )
      .required('La constraseña es requerida'),
    password2: yup
      .string('Introduce un email')
      .min( 6, 'La contraseña debe ser mayor a 6 caracteres' )
      .required('Es necesario confirmar la contraseña'),
  })

  const formik = useFormik({
    initialValues:{
      firstName:'',
      lastName: '',
      email:'',
      password:'',
      password2:'',
    },
    validationSchema: validationSchema,
    onSubmit: ( value, { resetForm } ) => {
      
      if( value.password === value.password2 ){
        alert( JSON.stringify( value ));
        resetForm();
      }
      
    }
  })

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registro
        </Typography>
        <form onSubmit={ formik.handleSubmit } className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                value={ formik.values.firstName }
                onChange={ formik.handleChange }
                required
                fullWidth
                id="firstName"
                label="Nombre"
                autoFocus
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                value={ formik.values.lastName }
                onChange={ formik.handleChange }
                autoComplete="lname"
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={ formik.values.email }
                onChange={ formik.handleChange }
                autoComplete="off"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={ formik.values.password }
                onChange={ formik.handleChange }
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="off"
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                value={ formik.values.password2 }
                onChange={ formik.handleChange }
                label="Confirma Contraseña"
                type="password"
                id="password2"
                autoComplete="off"
                error={formik.touched.password2 && Boolean(formik.errors.password2)}
                helperText={formik.touched.password2 && formik.errors.password2}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registarme
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                ¿Ya tienes una cuenta? Inicia sesión
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}