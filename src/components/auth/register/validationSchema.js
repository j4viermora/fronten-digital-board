import * as yup from 'yup';


export const validationSchema =  yup.object({
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