import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

function CourtInfo() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" component="h2">Court Information</Typography>
      <Typography variant="body1" component="p">
        Our club has four padel courts available for rent. The courts can be reserved in one hour time slots.
      </Typography>
    </Paper>
  );
}

export default CourtInfo;

