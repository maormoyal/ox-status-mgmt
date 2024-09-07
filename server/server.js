const mongoose = require('mongoose');
const path = require('path');
const Employee = require('./models/employee.model');
const { mockData } = require('./mockData');

mongoose
  .connect('mongodb://localhost:27017/employees', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
    seedDatabase(); // Call the seeding function on startup
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

// Function to seed the database if it's empty
async function seedDatabase() {
  const employeeCount = await Employee.countDocuments();
  if (employeeCount === 0) {
    console.log('Seeding the database with mock data...');
    await Employee.insertMany(mockData); // Insert mock data
    console.log('Database seeded successfully.');
  } else {
    console.log('Employees collection already has data. No seeding required.');
  }
}

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas/employee.schema');
const resolvers = require('./resolvers/employee.resolver');

const app = express();
app.use('/images', express.static(path.join(__dirname, 'images')));

const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(() => {
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at ${process.env.BASE_URL}${server.graphqlPath}`)
  );
});
