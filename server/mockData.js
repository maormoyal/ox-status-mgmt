const { EMPLOYEE_STATUS } = require('./constants/employeeStatus');

const baseUrl = process.env.BASE_URL || 'http://localhost:4000';
const avatar1 = `${baseUrl}/images/avatar1.jpg`;
const avatar2 = `${baseUrl}/images/avatar2.jpg`;
const avatar3 = `${baseUrl}/images/avatar3.jpg`;
const avatar4 = `${baseUrl}/images/avatar4.jpg`;
const avatar5 = `${baseUrl}/images/avatar5.jpg`;
const avatar6 = `${baseUrl}/images/avatar6.jpg`;

const mockData = [
  {
    id: '111',
    name: 'Johana Levi',
    status: EMPLOYEE_STATUS.Working,
    avatar: avatar1,
  },
  {
    id: '222',
    name: 'Avraham Cohen',
    status: EMPLOYEE_STATUS.OnVacation,
    avatar: avatar2,
  },
  {
    id: '333',
    name: 'Philip Leser',
    status: EMPLOYEE_STATUS.BusinessTrip,
    avatar: avatar3,
  },
  {
    id: '444',
    name: 'Nicci Troiani',
    status: EMPLOYEE_STATUS.BusinessTrip,
    avatar: avatar4,
  },
  {
    id: '555',
    name: 'Franz Ferdinand',
    status: EMPLOYEE_STATUS.Working,
    avatar: avatar5,
  },
  {
    id: '666',
    name: 'Rebecca Moore',
    status: EMPLOYEE_STATUS.Working,
    avatar: avatar6,
  },
];

module.exports = { mockData };
