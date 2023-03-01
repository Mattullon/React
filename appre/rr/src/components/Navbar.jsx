import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title} component={RouterLink} to="/">
          Padel 42
        </Typography>
        <Button component={RouterLink} to="/reservations" color="inherit">
          Reservar
        </Button>
        <Button component={RouterLink} to="/admin" color="inherit">
          Admin
        </Button>
        <Button component={RouterLink} to="/login" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

