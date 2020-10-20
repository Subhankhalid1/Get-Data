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
            height: theme.spacing(20),
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
            <AppBar position="flex">
                <Toolbar variant="dense" >
               
                    <Typography variant="h6" color="inherit" >
              
                        <div style={{ color: "white", marginLeft: '0%', marginTop: '0%', }}>
                            Copyright © 2020 Rana Subhan, LLC dba Autobots ®
</div>
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
}
