const Employee = require('../models/employee.model');

const getRandomAvatar = (name) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=random`;
};

const resolvers = {
  Query: {
    getEmployees: async () => await Employee.find(),
  },
  Mutation: {
    createEmployee: async (_, { name, status, avatar }) => {
      const newAvatar = avatar || getRandomAvatar(name);
      const newEmployee = new Employee({ name, status, avatar: newAvatar });
      await newEmployee.save();
      return newEmployee;
    },
    updateEmployee: async (_, { id, name, status }) => {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        { name, status },
        { new: true }
      );
      return updatedEmployee;
    },
    deleteEmployee: async (_, { id }) => {
      await Employee.findByIdAndDelete(id);
      return true;
    },
  },
};

module.exports = resolvers;
