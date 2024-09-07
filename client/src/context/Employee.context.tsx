import React, { createContext, useContext } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from '../api/queries';

import { TEmployee } from '../types/employee.type';

interface IEmployeeContextProps {
  employees: TEmployee[];
  loading: boolean;
  updateEmployee: (id: string, name: string, status: string) => void;
  addEmployee: (name: string, status: string, avatar: string) => void;
  deleteEmployee: (id: string) => void;
}

interface IEmployeeProviderProps {
  children: React.ReactNode;
}

const EmployeeContext = createContext<IEmployeeContextProps | undefined>(
  undefined
);

const EmployeeProvider: React.FC<IEmployeeProviderProps> = ({ children }) => {
  const { data, loading, refetch } = useQuery(GET_EMPLOYEES);
  const [updateEmployeeMutation] = useMutation(UPDATE_EMPLOYEE);
  const [createEmployeeMutation] = useMutation(CREATE_EMPLOYEE);
  const [deleteEmployeeMutation] = useMutation(DELETE_EMPLOYEE);

  const employees = data ? data.getEmployees : [];

  const updateEmployee = (id: string, name: string, status: string) => {
    updateEmployeeMutation({
      variables: { id, name, status },
      onCompleted: () => refetch(),
    });
  };

  const addEmployee = (name: string, status: string, avatar: string) => {
    createEmployeeMutation({
      variables: { name, status, avatar },
      onCompleted: () => refetch(),
    });
  };

  const deleteEmployee = (id: string) => {
    deleteEmployeeMutation({
      variables: { id },
      onCompleted: () => refetch(),
    });
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        loading,
        updateEmployee,
        addEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error(
      'useEmployeeContext must be used within an EmployeeProvider'
    );
  }
  return context;
};

export { EmployeeProvider, useEmployeeContext };
