import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Moment from 'moment';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';


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

function pictogram(sport) {

  const picStyle = { height: 125 };

  switch (sport) {
    case "Baseball":
      return <img src={"/pic/baseball.jpg"} alt="Baseball pictogram" style={picStyle} />
    case "Basketball":
      return <img src={"/pic/basketball.jpg"} alt="Basketball pictogram" style={picStyle} />
    case "Bance":
      return <img src={"/pic/dance.jpg"} alt="Dance pictogram" style={picStyle} />
    case "Golf":
      return <img src={"/pic/golf.jpg"} alt="Golf pictogram" style={picStyle} />
    case "Volleyball":
      return <img src={"/pic/volleyball.jpg"} alt="Volleyball pictogram" style={picStyle} />
    default:
      return <></>
  }
}

var cancelled = false;

function cancelReservation(id) {
  var jsonStatus = { status: "CANCELLED" }

  fetch('http://localhost:8080/reservation/' + id,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonStatus)
    }).then((response) => {
      if (response.ok) {
      }
    });
  cancelled = true;
}


function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

function SingleReservation({ reservation }) {

  const classes = useStyles();
  Moment.locale('en');

  const forceUpdate = useForceUpdate();

  var cancelButton;
  var printStatus;
  if (reservation.status == "NOT_PAYED" && !cancelled) {
    printStatus = (
      <div>
        <br />
        <a href="https://www.paypal.com/pl/signin">PAY FOR YOUR RESERVATION</a>
      </div>
    )
    cancelButton = (
      <div>
        <br />
        <Button variant="contained" color="secondary" onClick={() => {
          cancelReservation(reservation.id);
          forceUpdate()
        }}>
          CANCEL
      </Button>
      </div>
    )
  } else if (reservation.status == "PAYED") {
    printStatus = (
      <div>
        <h2>PAYED</h2>
      </div>)
  } else {
    printStatus = (
      <div>
        <h2 color="red">CANCELLED</h2>
      </div>)
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              {pictogram(reservation.facility.sport)}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <Link to={{ pathname: `sportObject/${reservation.facility.facilityId}` }}>
                    {reservation.facility.facilityName}
                  </Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Created: {Moment(reservation.creationDate).format('d MMM yyyy')}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Start: {Moment(reservation.reservationDate).format('HH:mm d MMM yyyy')}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  End : {Moment(reservation.endDate).format('HH:mm d MMM yyyy')}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {printStatus}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {cancelButton}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{reservation.price} PLN</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )

}

export default SingleReservation;
