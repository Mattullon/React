import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function ReservationForm() {
  const classes = useStyles();
  const history = useHistory();
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    phone: '',
    court: '',
    date: '',
    time: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReservationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar la reserva al backend
    history.push('/reservations');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Typography variant="h4" component="h1" gutterBottom>
        Nueva Reserva
      </Typography>
      <TextField
        required
        name="name"
        label="Nombre completo"
        value={reservationData.name}
        onChange={handleInputChange}
        className={classes.formControl}
      />
      <TextField
        required
        name="email"
        label="Correo electrónico"
        type="email"
        value={reservationData.email}
        onChange={handleInputChange}
        className={classes.formControl}
      />
      <TextField
        required
        name="phone"
        label="Teléfono"
        type="tel"
        value={reservationData.phone}
        onChange={handleInputChange}
        className={classes.formControl}
      />
      <FormControl required className={classes.formControl}>
        <InputLabel id="court-label">Cancha</InputLabel>
        <Select
          labelId="court-label"
          id="court-select"
          name="court"
          value={reservationData.court}
          onChange={handleInputChange}
        >
          <MenuItem value="1">Cancha 1</MenuItem>
          <MenuItem value="2">Cancha 2</MenuItem>
          <MenuItem value="3">Cancha 3</MenuItem>
        </Select>
      </FormControl>
      <TextField
        required
        name="date"
        label="Fecha"
        type="date"
        value={reservationData.date}
        onChange={handleInputChange}
        className={classes.formControl}
      />
      <TextField
        required
        name="time"
        label="Hora"
        type="time"
        value={reservationData.time}
        onChange={handleInputChange}
        className={classes.formControl}
      />
      <Button variant="contained" color="primary" type="submit" className={classes.button}>
        Reservar
      </Button>
    </form>
  );
}

export default ReservationForm;
