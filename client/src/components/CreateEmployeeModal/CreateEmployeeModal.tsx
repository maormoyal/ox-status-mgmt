import React, { useState, useRef, useEffect } from 'react';
import { useEmployeeContext } from '../../context/Employee.context';
import Dropdown from '../Dropdown/Dropdown';
import styles from './CreateEmployeeModal.module.scss';
type CreateEmployeeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateEmployeeModal: React.FC<CreateEmployeeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { addEmployee } = useEmployeeContext();
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Select status');
  const [avatar, setAvatar] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleCreate = () => {
    addEmployee(name, status, avatar);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog className={styles.modal} ref={dialogRef} onClose={onClose}>
      <div className={styles.modalContent}>
        <h2>Create New Employee</h2>
        <input
          type='text'
          placeholder='Employee Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Dropdown
          selectedValue={status}
          options={['Working', 'OnVacation', 'LunchTime', 'BusinessTrip']}
          handleChange={(value) => setStatus(value)}
        />
        <input
          type='text'
          placeholder='Avatar URL (Optional)'
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <div className={styles.modalActions}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.addButton} onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default CreateEmployeeModal;
