import React, { useState } from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { EmployeeProvider } from './context/Employee.context';
import EmployeesList from './components/EmployeesList/EmployeesList';
import CreateEmployeeModal from './components/CreateEmployeeModal/CreateEmployeeModal';
const GraphQL_API_URL = import.meta.env.VITE_API_URL;

import styles from './App.module.scss';

const client = new ApolloClient({
  uri: GraphQL_API_URL,
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  return (
    <ApolloProvider client={client}>
      <EmployeeProvider>
        <div className={styles.appContainer}>
          <div className={styles.createButtonWrapper}>
            <button
              onClick={() => setCreateModalOpen(true)}
              className={styles.createButton}
            >
              Create +
            </button>
          </div>
          <EmployeesList />
          <CreateEmployeeModal
            isOpen={isCreateModalOpen}
            onClose={() => setCreateModalOpen(false)}
          />
        </div>
      </EmployeeProvider>
    </ApolloProvider>
  );
};

export default App;
