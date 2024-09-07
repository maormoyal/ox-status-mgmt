const mongoose = require('mongoose');
const EMPLOYEE_STATUS = require('../constants/employeeStatus');

const employeeSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: [
      EMPLOYEE_STATUS.Working,
      EMPLOYEE_STATUS.OnVacation,
      EMPLOYEE_STATUS.LunchTime,
      EMPLOYEE_STATUS.BusinessTrip,
    ],
  },
  avatar: String,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
