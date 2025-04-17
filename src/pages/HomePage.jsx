import { CircularProgress } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseLayout from '../Layouts/BaseLayout';
import Threads from '../components/Threads';
import { asyncPopulateThreadAndUsers } from '../states/shared/action';

const HomePage = () => {
  const threads = useSelector((states) => states.threads);
  const users = useSelector((states) => states.users);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncPopulateThreadAndUsers());
  }, [dispatch]);

  return (
    <BaseLayout>
      {!threads || threads.length === 0 || !users || users.length === 0 ? (
        <CircularProgress />
      ) : (
        <>
          <Threads />
        </>
      )}
    </BaseLayout>
  );
};

export default HomePage;
