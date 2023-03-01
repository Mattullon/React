import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ScheduleItem from './SheduleItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const schedules = [
  {
    id: 1,
    court: 'Cancha 1',
    date: '2023-03-01',
    time: '10:00 AM - 11:00 AM',
    players: ['Matias', 'ullon'],
  },
  {
    id: 2,
    court: 'Cancha 2',
    date: '2023-03-01',
    time: '11:00 AM - 12:00 PM',
    players: ['hugo', 'vargas'],
  },
  {
    id: 3,
    court: 'Cancha 3',
    date: '2023-03-02',
    time: '10:00 AM - 11:00 AM',
    players: ['jorge ', 'benites'],
  },
];

const ScheduleList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {schedules.map((schedule) => (
          <Grid item xs={12} sm={6} md={4} key={schedule.id}>
            <ScheduleItem schedule={schedule} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ScheduleList;


