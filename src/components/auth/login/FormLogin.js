import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { IconButton ,Input, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { Copyright } from '../Copyright';
import { useFormik } from 'formik';
import { useStyles } from './styles';
import { startLogin } from '../../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';


export function FormLogin() {

    const dispatch = useDispatch()
    const classes = useStyles();
    const { checking } = useSelector( state => state.Auth )
    const [ open, setOpen ] = React.useState( false );



    const handleLogin = ( value, resetForm ) => {
     
      console.log(value.rememberme)
      value.rememberme && localStorage.setItem( 'email', value.email )
      dispatch( startLogin( value ) )
      resetForm();
    }

    const handleClickShowPassword = () => {
        setOpen( !open )
    }
    const emailRecordado =  localStorage.getItem('email') || ''
    

    const formik = useFormik({
      initialValues:{
        email: (emailRecordado) ? emailRecordado : '',
        password:'',
        rememberme: false
      },
      onSubmit: ( value,{ resetForm }) => handleLogin( value, resetForm )
      });

    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Inicio de sesión
        </Typography>
          <form onSubmit={ formik.handleSubmit } className={classes.form} noValidate>
            <Input
              className={ classes.inputs }
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              placeholder="Email"
              autoFocus
              value={ formik.values.email }
              onChange={ formik.handleChange }
            />
            <Input
              className={ classes.inputs }
              required
              fullWidth
              name="password"
              value={ formik.values.password }
              onChange={ formik.handleChange }
              label="Contraseña"
              placeholder="Contraseña"
              type={ ( open ) ? "text" : "password" }
              id="password"
              autoComplete="current-password"
              endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        { ( open ) ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                  </InputAdornment>
              }
            />
          <FormControlLabel
            className={ classes.inputs }
            control={<Checkbox value={ !formik.value } color="primary" />}
            label="Recuerdame"
            name="rememberme"
            onChange={ formik.handleChange }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit, classes.input}
            disabled={ checking }
          >
            Iniciar sesión
          </Button>
          <Grid container>
            <Grid item xs>
              <Link component={ RouterLink } to="#" variant="body2">
                ¿Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}