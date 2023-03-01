import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import CourtInfo from './components/CourtInfo';
import ScheduleList from './components/ScheduleList';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [schedule, setSchedule] = useState([
    {
      id: 1,
      day: 'Lunes',
      time: '09:00 - 10:00',
      available: true,
    },
    {
      id: 2,
      day: 'Lunes',
      time: '10:00 - 11:00',
      available: false,
    },
    {
      id: 3,
      day: 'Martes',
      time: '12:00 - 13:00',
      available: true,
    },
    // ...
  ]);

  const handleLogin = (username, password) => {
    // Aquí se realizaría la autenticación del usuario y se establecería el estado de isLoggedIn en true si la autenticación es exitosa.
  };

  const handleLogout = () => {
    // Aquí se cerraría la sesión del usuario y se establecería el estado de isLoggedIn en false.
  };

  const handleReservation = (id) => {
    // Aquí se marcaría el horario con el id correspondiente como no disponible para su reserva.
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {isLoggedIn ? (
        <>
          <CourtInfo />
          <ScheduleList schedule={schedule} onReservation={handleReservation} />
          <ReservationForm />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
      <Footer />
    </div>
  );
}

export default App;

