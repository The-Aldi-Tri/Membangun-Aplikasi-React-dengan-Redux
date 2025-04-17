import { CircularProgress } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseLayout from '../Layouts/BaseLayout';
import Leaderboard from '../components/Leaderboard';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

function LeaderboardPage() {
  const leaderboards = useSelector((state) => state.leaderboards);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <BaseLayout>
      {!leaderboards || !leaderboards.length ? <CircularProgress /> : <Leaderboard />}
    </BaseLayout>
  );
}

export default LeaderboardPage;
