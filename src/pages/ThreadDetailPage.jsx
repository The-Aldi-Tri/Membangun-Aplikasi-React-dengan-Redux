import { CircularProgress } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import BaseLayout from '../Layouts/BaseLayout';
import ThreadDetail from '../components/ThreadDetail';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

const ThreadDetailPage = () => {
  const threadDetail = useSelector((state) => state.threadDetail);

  const dispatch = useDispatch();

  let { threadId } = useParams();

  React.useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [dispatch, threadId]);

  return <BaseLayout>{!threadDetail ? <CircularProgress /> : <ThreadDetail />}</BaseLayout>;
};

export default ThreadDetailPage;
