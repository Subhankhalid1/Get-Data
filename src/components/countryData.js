
import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import Chart from './Chart'; 
// import NumberFormat from 'react-number-format'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 4,

        display: 'fixed',
        '& > *': {
            margin: theme.spacing(2),
            width: '800%',
            height: theme.spacing(75),


        },
    },
    paper: {
        height: 100,
        width: 100,
    },
    control: {
        padding: theme.spacing(3),
    },
}));

export default function CountryData() {
    // const [spacing, setSpacing] = React.useState(2);
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
        console.log(data)
        setCountry(data);

    }


    const data = {
        labels: ['Confirmed', 'Deaths', 'Recovered', 'Active', 'New Cases', 'New Deaths', 'New Recovered'],
        datasets: [
            {
                label: 'Confirmed Cases',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [country ? country.confirmed.value : null]
            },
            {
                label: 'Deaths',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [country ? country.deaths.value : null]
            },

            {
                label: 'Recovered',
                backgroundColor: '#63d471',
                borderColor: 'rgba(34,139,34)',
                pointBackgroundColor: 'rgba(34,139,34)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(34,139,34)',
                data: [country ? country.recovered.value : null]
            }
            
        ]
    };


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

                <Paper elevation={6} style={{ color: "orange" }} >
                    <Typography variant="h2" gutterBottom>

                        {country ? country.confirmed.value : null}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Confirmed Cases
      </Typography>

                </Paper>
                <Paper elevation={6} style={{ color: "green" }} >
                    <Typography variant="h2" gutterBottom>
                        {country ? country.recovered.value : null}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Recovered
      </Typography>

                </Paper>
                <Paper elevation={6} style={{ color: "red" }} >
                    <Typography variant="h2" gutterBottom>
                        {country ? country.deaths.value : null}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Fatalities
      </Typography>

                </Paper>
            </Grid>
            <div>

                <Radar data={data}/>
            </div>
        </Grid>
    );
}





