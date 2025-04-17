import React from 'react';
import ProtectedLayout from '../Layouts/ProtectedLayout';
import NewThread from '../components/NewThread';

const NewThreadPage = () => {
  return (
    <ProtectedLayout>
      <NewThread />
    </ProtectedLayout>
  );
};

export default NewThreadPage;
