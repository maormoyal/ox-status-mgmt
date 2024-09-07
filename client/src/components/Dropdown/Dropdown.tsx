import React, { useState, useEffect } from 'react';
import styles from './Dropdown.module.scss';

type DropdownProps = {
  selectedValue: string;
  options: string[];
  handleChange: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  selectedValue,
  options,
  handleChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedValue);

  useEffect(() => {
    setSelectedOption(selectedValue);
  }, [selectedValue]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelection = (option: string) => {
    handleChange(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button
        className={`${styles.dropdownHeader} ${styles[selectedOption]}`}
        onClick={toggleDropdown}
      >
        {selectedOption}
        <span className={styles.arrow}>{isOpen ? '⯅' : '⯆'}</span>
      </button>
      {isOpen && (
        <div className={styles.optionsContainer}>
          {options
            .filter((option) => option !== selectedOption)
            .map((option) => (
              <span
                className={`${styles.optionItem} ${styles[option]}`}
                key={option}
                onClick={() => handleSelection(option)}
              >
                {option}
              </span>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
