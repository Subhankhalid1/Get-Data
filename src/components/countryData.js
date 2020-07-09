


import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import NumberFormat from 'react-number-format'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

        display: 'fixed',
        '& > *': {
            margin: theme.spacing(2),
            width: '800%',
            height: theme.spacing(52),


        },
    },
    paper: {
        height: 200,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function CountryData() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    let url = "https://covid19.mathdro.id/api";

    const [getCountryData, setCountryData] = useState([]);
    const [country, setCountry] = useState();

    //if we use or not
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await fetch(`${url}/countries`);
        const data = await response.json();
        setCountryData(data.countries);
    }

    const changeHandler = async (country) => {
        const response = await fetch(`${url}/countries/${country}`);
        const data = await response.json();
        setCountry(data);
        console.log(data)
    }
  

    return (

        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                
                <select onChange={(e) => changeHandler(e.target.value)} style={{ width: "200px" }}>
                    <option></option>
                    {
                        getCountryData ? getCountryData.map((item, index) => {
                            return <option key={index}>{item.name}</option>;
                        }) : null
                    }
                </select>
                <Paper elevation={0} style={{ color: "blue" }} >
                    <Typography variant="h4" gutterBottom>

                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        List of Country Data as of Today
      </Typography>

                </Paper>
                <Paper elevation={0} style={{ color: "black" }} >
                    <Typography variant="h4" gutterBottom>

                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        
                        {country ? country.lastUpdate : null}
                    </Typography>

                </Paper>

                <Paper elevation={3} style={{ color: "orange" }} >
                    <Typography variant="h4" gutterBottom>

                        {country ? country.confirmed.value : null}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Confirmed Cases
      </Typography>

                </Paper>
                <Paper elevation={3} style={{ color: "green" }} >
                    <Typography variant="h4" gutterBottom>
                        {country ? country.recovered.value : null}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Recovered
      </Typography>

                </Paper>
                <Paper elevation={3} style={{ color: "red" }} >
                    <Typography variant="h4" gutterBottom>
                        {country ? country.deaths.value : null}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Fatalities
      </Typography>

                </Paper>
            </Grid>
            
        </Grid>
    );
}





