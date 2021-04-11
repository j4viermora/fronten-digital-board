import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx';
import Deposits from '../Deposits';
import { useStyles } from './styles';
import Superintendentes from '../Superintendentes';
import Chart from '../Chart';


export const Inicio = () => {
    const classes = useStyles()

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <>
            <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Superintendentes />
              </Paper>
            </Grid>
          </Grid>
        </>
    )
}
