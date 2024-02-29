import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [doctor, setDoctor] = useState('');
  const [patientName, setPatientName] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [message, setMessage] = useState('');

  const bookAppointment = async () => {
    try {
      const response = await axios.post('http://localhost:4000/save/', {
        doctor,
        patientName,
        appointmentTime
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error booking appointment:', error);
      setMessage('Failed to book appointment. Please try again.');
    }
  };

  const checkTokenAvailability = async () => {
    try {
      const response = await axios.get('http://localhost:4000/save/availability', {
        params: {
          doctor,
          appointmentTime
        }
      });
      setMessage(`Available tokens: ${response.data.availableTokens}`);
    } catch (error) {
      console.error('Error checking token availability:', error);
      setMessage('Failed to check token availability. Please try again.');
    }
  };

  return (
    <div>
      <h1>Doctor Appointment Booking</h1>
      <label>
        Doctor:
        <input type="text" value={doctor} onChange={(e) => setDoctor(e.target.value)} />
      </label>
      <br />
      <label>
        Patient Name:
        <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
      </label>
      <br />
      <label>
        Appointment Time:
        <input type="datetime-local" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} />
      </label>
      <br />
      <button onClick={bookAppointment}>Book Appointment</button>
      <button onClick={checkTokenAvailability}>Check Token Availability</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
