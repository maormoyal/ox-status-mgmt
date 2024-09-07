# Employee Status Management System

This is an **Employee Status Management** system where users can manage employees' statuses, create new employees, and delete or update existing ones. The project uses **Node.js**, **Express**, **MongoDB**, **Apollo GraphQL** on the backend, and **React** with TypeScript on the frontend.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Docker Setup](#docker-setup)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Database Seeding](#database-seeding)
- [Contact](#contact)

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Apollo GraphQL**: GraphQL API handling.
- **Mongoose**: MongoDB object modeling for Node.js.

### Frontend

- **React (with TypeScript)**: Frontend library for building user interfaces.
- **Apollo Client**: For fetching data via GraphQL queries.
- **Vite**: Build tool for frontend development.
- **SCSS**: For component styling.

## Project Structure

project-root/ ├── client/ # React (Vite + TypeScript) app │ └── src/ # React components, hooks, etc. ├── server/ # Backend (Node.js + Apollo Server) │ ├── images/ # Static images folder │ ├── models/ # Mongoose models for MongoDB │ ├── resolvers/ # GraphQL resolvers │ ├── schemas/ # GraphQL schema definitions │ └── mockData.js # Mock data for seeding the database ├── .env # Environment variables ├── docker-compose.yml # Docker file for MongoDB ├── README.md # Project documentation └── package.json # Root package.json with scripts for both server and client

## Installation

### Prerequisites

- **Node.js** (v14 or later)
- **Docker** (for MongoDB setup)
- **npm** or **yarn**

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/maormoyal/ox-status-mgmt.git
   cd employee-status-mgmt
   ```

2. **Install All Dependencies:**
   Install both backend and frontend dependencies using the following command:

```bash
npm run install:all
```

3. **Docker Setup**
   To set up Docker for MongoDB:

   1. **_Install Docker:_**

- Download Docker Desktop for your platform at https://www.docker.com/products/docker-desktop/

  2.  **_Start MongoDB with Docker_**
      Once Docker is installed, you can start the MongoDB container using:

```bash
npm run docker:mongo
```

## Running the Project

1. **Start the MongoDB Database:**

```bash
npm run docker:mongo
```

2. **Start the Backend and Frontend:**
   Run both the backend and frontend servers in parallel:

```bash
npm run dev
```

The server will run at http://localhost:4000, and the frontend will be available at http://localhost:3000.

## API Endpoints

### GraphQL Queries:

#### Get All Employees: getEmployees

### GraphQL Mutations:

#### Create an Employee: createEmployee

#### Update an Employee: updateEmployee

#### Delete an Employee: deleteEmployee

## Database Seeding

When the server starts, it will automatically seed the MongoDB database with mock data if the employees collection is empty. The mock data includes employee information such as:

Name
Status
Avatar
To manually seed the database:

Ensure MongoDB is running (via Docker).
Run the backend server, and it will check if the collection is empty and seed it accordingly.

## Contact

For any questions or issues, please contact the project owner:

Email: maorkab@gmail.com
