const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: String,
    required: true
  },
  patientName: {
    type: String,
    required: true
  },
  appointmentTime: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
