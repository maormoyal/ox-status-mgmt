import React, { useMemo } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { TEmployee } from '../../types/employee.type';
import styles from './EmployeesCard.module.scss';
import deleteIcon from '../../assets/delete.icon.svg';
import { useEmployeeContext } from '../../context/Employee.context';

type EmployeesCardProps = {
  employee: TEmployee;
};

const EmployeesCard: React.FC<EmployeesCardProps> = ({ employee }) => {
  const { updateEmployee, deleteEmployee } = useEmployeeContext();

  const dropdownOptions = useMemo(() => {
    return ['Working', 'OnVacation', 'LunchTime', 'BusinessTrip'];
  }, []);

  return (
    <div className={styles.employeeCard}>
      <div className={styles.avatarWrapper}>
        <img
          className={styles.avatar}
          src={employee.avatar}
          alt={employee.name}
          width={300}
        />
      </div>
      <div className={styles.contentWrapper}>
        <h3>{employee.name}</h3>
        <Dropdown
          selectedValue={employee.status}
          options={dropdownOptions}
          handleChange={(status) =>
            updateEmployee(employee.id, employee.name, status)
          }
        />
      </div>
      <button
        className={styles.deleteBtn}
        onClick={() => deleteEmployee(employee.id)}
      >
        <img src={deleteIcon} alt='Delete icon' width={20} />
      </button>
    </div>
  );
};

export default EmployeesCard;
