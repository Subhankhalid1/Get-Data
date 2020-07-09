import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'fixed',
        '& > *': {
            margin: theme.spacing(2),
            width: '100%',
            height: theme.spacing(16),

        },
    },
}));

export default function GlobalData() {
    const classes = useStyles();
    const [getData, setData] = useState("");
    const [dataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        async function getGlobalData() {
            setDataLoading(true)
            const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
            console.log(response);
            const data = await response.json();
            console.log(data);
            setData(data);
            setDataLoading(false)
        }
        getGlobalData();
    }, [])
    const loading = "Loading"
    if (dataLoading) {
        return (
            <div className={classes.root}>
                <Paper elevation={3} style={{ color: "purple" }} >
                    <Typography variant="h4" gutterBottom>
                        {loading}


                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        No. of Affected Countries
      </Typography>

                </Paper>

                <Paper elevation={3} style={{ color: "black" }} >
                    <Typography variant="h4" gutterBottom>
                        {loading}


                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Total Global-Cases as of Today
      </Typography>

                </Paper>
                <Paper elevation={3} style={{ color: "orange" }} >
                    <Typography variant="h4" gutterBottom>
                        {loading}

                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Active
      </Typography>

                </Paper>
                <Paper elevation={3} style={{ color: "green" }} >
                    <Typography variant="h4" gutterBottom>
                        {loading}


                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Recovered
      </Typography>

                </Paper>
                <Paper elevation={3} style={{ color: "red" }} >
                    <Typography variant="h4" gutterBottom>
                        {loading}


                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Fatalities
      </Typography>

                </Paper>

                <Paper elevation={3} style={{ color: "blue" }} >
                    <Typography variant="h4" gutterBottom>
                        {loading}


                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Serious Cases
      </Typography>

                </Paper>


            </div>
        )
    }
    return (
        <div className={classes.root}>

            <Paper elevation={3} style={{ color: "purple" }} >
                <Typography variant="h4" gutterBottom>
                    <NumberFormat value={getData && getData.results && getData.results[0].total_affected_countries} displayType={'text'} thousandSeparator={true} />


                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    No. of Affected Countries
      </Typography>

            </Paper>


            <Paper elevation={3} style={{ color: "black" }} >
                <Typography variant="h4" gutterBottom>
                    <NumberFormat value={getData && getData.results && getData.results[0].total_cases} displayType={'text'} thousandSeparator={true} />


                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Confirmed Global-Cases 
      </Typography>

            </Paper>
            <Paper elevation={3} style={{ color: "orange" }} >
                <Typography variant="h4" gutterBottom>
                    <NumberFormat value={getData && getData.results && getData.results[0].total_unresolved} displayType={'text'} thousandSeparator={true} />

                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Active
      </Typography>

            </Paper>
            <Paper elevation={3} style={{ color: "green" }} >
                <Typography variant="h4" gutterBottom>
                    <NumberFormat value={getData && getData.results && getData.results[0].total_recovered} displayType={'text'} thousandSeparator={true} />


                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Recovered
      </Typography>

            </Paper>
            <Paper elevation={3} style={{ color: "red" }} >
                <Typography variant="h4" gutterBottom>
                    <NumberFormat value={getData && getData.results && getData.results[0].total_deaths} displayType={'text'} thousandSeparator={true} />


                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Fatalities
      </Typography>

            </Paper>

            <Paper elevation={3} style={{ color: "blue" }} >
                <Typography variant="h4" gutterBottom>
                    <NumberFormat value={getData && getData.results && getData.results[0].total_serious_cases} displayType={'text'} thousandSeparator={true} />


                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Serious Cases
      </Typography>

            </Paper>


        </div>
    );
}