import React from 'react';
import { useEmployeeContext } from '../../context/Employee.context';
import EmployeesCard from '../EmployeesCard/EmployeesCard';
import styles from './EmployeesList.module.scss';

const EmployeesList: React.FC = () => {
  const { employees, loading } = useEmployeeContext();

  return loading ? (
    <p>Loading employees...</p>
  ) : (
    <div className={styles.employeesList}>
      {employees.map((employee) => (
        <EmployeesCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeesList;
