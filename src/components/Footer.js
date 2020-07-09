import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'fixed',

        flexGrow: 1,
        '& > *': {

            width: '100%',
            height: theme.spacing(26),
        },

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static">
                <Toolbar variant="dense" >
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography> */}
                    <Typography variant="h6" color="inherit" >
                        Contact Us:
          <div style={{ color: "black", marginTop: '2%' }}>
                            If you have any questions or issues about this Application, please contact us:
                  
                  Tweet us over at  TheVirusTracker
                  
                  Wiki - by  TheVirusTracker -  TheVirusTracker Facebook - Build a Tracker - Privacy Policy - Terms of Service
                  StatCounter - Free Web Tracker and Counter
</div>
                        <hr />
                        <div style={{ color: "white", marginLeft: '30%', marginTop: '0%' }}>
                            Copyright © 2020 Rana Subhan, LLC dba Autobots ®
</div>
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}
