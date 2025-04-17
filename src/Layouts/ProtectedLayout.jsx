import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import BaseLayout from './BaseLayout';

const ProtectedLayout = ({ children }) => {
  const authUser = useSelector((state) => state.authUser);

  if (!authUser) return <Navigate to="/login" />;

  return <BaseLayout>{children}</BaseLayout>;
};

export default ProtectedLayout;
