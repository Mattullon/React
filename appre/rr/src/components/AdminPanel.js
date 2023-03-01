import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { useReservationData } from '../contexts/ReservationDataContext';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    marginTop: theme.spacing(4),
  },
  addButton: {
    marginBottom: theme.spacing(2),
  },
}));

function AdminPanel() {
  const classes = useStyles();
  const { reservations } = useReservationData();

  return (
    <>
      <Typography variant="h4" component="h1">Reservations</Typography>
      <Button component={Link} to="/admin/new" variant="contained" color="primary" className={classes.addButton}>
        Add Reservation
      </Button>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Court</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations.map((reservation) => (
              <TableRow key={reservation.id}>
                <TableCell>{reservation.name}</TableCell>
                <TableCell>{reservation.email}</TableCell>
                <TableCell>{reservation.phone}</TableCell>
                <TableCell>{reservation.date}</TableCell>
                <TableCell>{reservation.time}</TableCell>
                <TableCell>{reservation.court}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminPanel;

