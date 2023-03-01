import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main,
  },
  paper: {
    padding: theme.spacing(4),
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Login = ({ setUser }) => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Simulate login request
    if (username === 'admin' && password === 'password') {
      setUser(username);
      history.push('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center" gutterBottom>
          Registro
        </Typography>
        {error && (
          <Typography variant="body1" color="error" align="center">
            {error}
          </Typography>
        )}
        <form onSubmit={handleLogin} className={classes.form}>
          <TextField
            label="Usuario"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={classes.textField}
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.textField}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Acceder
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Login;

