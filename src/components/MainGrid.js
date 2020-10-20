import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//import GlobalData_Grid of component
import GlobalData from './GlobalData';
import CountryData from './countryData';
// import Slider from './Slider';
// import Chart from './Chart'; 


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'1%',
    padding:15,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={12}>
          
        <Grid item xs={12}>
            
          <Paper className={classes.paper}>
              Global Data as of Today
              <GlobalData/>
              </Paper>
        </Grid>
        <Grid item xs={12}>
        
          <Paper className={classes.paper}> Please select a country
          <CountryData />
          
          </Paper>
          
        </Grid>
       
        </Grid>
   
    </div>
  );
}