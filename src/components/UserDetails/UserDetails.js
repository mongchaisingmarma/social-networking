import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


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
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      
      borderRadius: "50%"
    },
}));
const UserDetails = () => {
    const classes = useStyles();
    let { userId } = useParams();
    const [userDetails, setUserDetails] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            .then(res => res.json())
            .then(data => setUserDetails(data))
    }, [])


    const [userComments, setUserComments] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?id=${userId}`)
            .then(res => res.json())
            .then(data => setUserComments(data[0]))
    }, [])
    return (
        <div>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Id: {userDetails.id}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Title: {userDetails.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Body: {userDetails.body}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>

            <div className={classes.root}>
                <h1 style={{marginLeft:"100px"}}>comments:</h1>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        Post-Id: {userComments.postId}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        name: {userComments.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Email: {userComments.email}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Body: {userComments.body}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    );
};

export default UserDetails;