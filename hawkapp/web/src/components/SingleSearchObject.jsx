import React from "react";
import {Link} from 'react-router-dom'
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


function pictogram(sport) {
    
  const picStyle = { height: 125 };

  switch(sport)
  {
    case "baseball":
      return <img src={"/pic/baseball.jpg"} alt="Baseball pictogram" style={picStyle} />     
    case "basketball":
      return <img src={"/pic/basketball.jpg"} alt="Basketball pictogram" style={picStyle} />
    case "dance":
      return <img src={"/pic/dance.jpg"} alt="Dance pictogram" style={picStyle} />
    case "golf":
      return <img src={"/pic/golf.jpg"} alt="Golf pictogram" style={picStyle} />
    case "volleyball":
      return <img src={"/pic/volleyball.jpg"} alt="Volleyball pictogram" style={picStyle} />
    default:
      return <></>
  }
}

function SingleSearchObject({ facility }) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              {pictogram(facility.sport.name)}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <Link to={{pathname: `sportObject/${facility.id}`}}>
                    {facility.name}
                  </Link>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {facility.city}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {facility.sport.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {facility.phone}
                </Typography>
              </Grid>
              {/* <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid> */}
            </Grid>
            <Grid item>
            <Typography variant="subtitle1">{facility.price} PLN/H</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )

}

export default SingleSearchObject;
