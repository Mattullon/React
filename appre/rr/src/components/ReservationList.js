import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReservationItem from './ReservationItem';
import { listReservations } from '../api/reservations';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ReservationList = () => {
  const classes = useStyles();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await listReservations();
      setReservations(result);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {reservations.map((reservation) => (
          <Grid item xs={12} sm={6} md={4} key={reservation.id}>
            <ReservationItem reservation={reservation} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ReservationList;

