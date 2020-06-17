import React from "react";
import { Link } from 'react-router-dom'
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
      maxWidth: 500,
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
    },
  }));


function handleAlternate(id) {
  var jsonStatus = {
    isBlocked: true
  }

  fetch('http://localhost:8080/user/' + id,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonStatus)
    }).then((response) => {
      if (response.ok) {
        console.log('User blocked:' + id);
      }
      else {
        console.log('Cannot delete user');
        this.setState({ error: true });
      }
    })
}

function SingleReport({ report, view }) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  Reporter: {report.reporterId}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Reported: {report.reportedId}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Message: {report.message}
                </Typography>
                <button onClick={handleAlternate.bind(this, report.reportedId)}>
                  Block user
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )

}

export default SingleReport;
