import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    marginBottom: theme.spacing(1),
  },
  text: {
    marginBottom: theme.spacing(1),
  },
}));

const ReservationItem = ({ reservation }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>
          {reservation.court}
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          {`${reservation.date} - ${reservation.time}`}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {`Player 1: ${reservation.player1}`}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {`Player 2: ${reservation.player2}`}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {`Player 3: ${reservation.player3}`}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {`Player 4: ${reservation.player4}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReservationItem;

