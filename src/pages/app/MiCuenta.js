import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

export const MiCuenta = () => {
   
    const { user } = useSelector( state => state.Auth )
   
    return (
        <>
            <Typography  >{ user }</Typography>
        </>
    )
}
