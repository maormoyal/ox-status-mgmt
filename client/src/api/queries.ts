import { gql } from '@apollo/client';

export const GET_EMPLOYEES = gql`
  query GetEmployees {
    getEmployees {
      id
      name
      status
      avatar
    }
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($id: ID!, $name: String, $status: String) {
    updateEmployee(id: $id, name: $name, status: $status) {
      id
      name
      status
    }
  }
`;

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee($name: String!, $status: String!, $avatar: String!) {
    createEmployee(name: $name, status: $status, avatar: $avatar) {
      id
      name
      status
      avatar
    }
  }
`;

export const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($id: ID!) {
    deleteEmployee(id: $id)
  }
`;
