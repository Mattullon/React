import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Reservas de Padel
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Realizado por Mi Nombre
      </Typography>
    </footer>
  );
}

export default Footer;
