import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { useStyles } from './styles';
import { useFormik } from 'formik';
// import {validationSchema} from './validationSchema';
import { useDispatch } from 'react-redux';
import { startRegister } from '../../../actions/auth';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export function FormRegister() {
  const classes = useStyles();
  const dispatch = useDispatch()

  const handleRegister = (value, resetForm) => {
    dispatch( startRegister( value ) )
    resetForm();
  }

  const formik = useFormik({
    initialValues:{
      name:'',
      lastName: '',
      email:'',
      password:'',
      group: '',
      phone1: ''
    },
    // validationSchema: validationSchema,
    onSubmit: ( value, { resetForm } ) => handleRegister( value, resetForm )});

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
                name="name"
                variant="outlined"
                value={ formik.values.name }
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
                id="phone1"
                label="Telefono"
                name="phone1"
                value={ formik.values.phon1 }
                onChange={ formik.handleChange }
                autoComplete="off"
                // error={formik.touched.email && Boolean(formik.errors.email)}
                // helperText={formik.touched.email && formik.errors.email}
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
              
              <FormControl className={classes.formControl}>
                <InputLabel 
                id="demo-simple-select-label"
                >
                  Grupo
                </InputLabel>
                 <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="group"
                    value={ formik.values.group }
                    onChange={formik.handleChange}
                  >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
              </Select>
            </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={ RouterLink } to="/login" variant="body2">
                ¿Ya tienes una cuenta? Inicia sesión
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}