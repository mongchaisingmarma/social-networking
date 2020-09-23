import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        marginTop: "20px",
        maxWidth: 900,
    },
}));

const User = (props) => {
    const classes = useStyles();
    const {id, title, body} = props.user
    return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                Id: {id}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Title: {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Body: {body}
                            </Typography>
                        </Grid>
                        <Grid item>
                                <Link style={{textDecoration:"none"}} to={`/user/${id}`}>
                                <Button variant="contained" color="secondary">
                                    See more...
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </div>
    );
};

export default User;