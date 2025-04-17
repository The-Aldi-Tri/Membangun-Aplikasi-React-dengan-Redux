import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { Chip, Divider, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  asyncToggleDownVoteThread,
  asyncToggleNeutralizeVoteThread,
  asyncToggleUpvoteThread,
} from '../states/threads/action';
import { truncateText } from '../utils/truncateText';
import AuthorAndTimeElapsed from './AuthorAndTimeElapsed';
import LikeDislikeButton from './LikeDislikeButton';

const ThreadItem = ({ thread }) => {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Stack key={thread.id} spacing={0.5}>
      <Chip label={'#' + thread.category} variant="outlined" sx={{ width: 'fit-content' }} />
      <Link onClick={() => navigate(`/threads/${thread.id}`)}>
        <Typography variant="body1">{thread.title}</Typography>
      </Link>
      <Typography variant="body2">{truncateText(thread.body)}</Typography>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <LikeDislikeButton
          upVotes={thread.upVotesBy}
          downVotes={thread.downVotesBy}
          onUpVote={() => dispatch(asyncToggleUpvoteThread(thread.id))}
          onDownVote={() => dispatch(asyncToggleDownVoteThread(thread.id))}
          onNeutralizeVote={() => dispatch(asyncToggleNeutralizeVoteThread(thread.id))}
        />
        <Stack direction="row" spacing={0.5}>
          <ReplyOutlinedIcon fontSize="small" />
          <Typography variant="body2">{thread.totalComments}</Typography>
        </Stack>
        <AuthorAndTimeElapsed
          ownerName={users.find((user) => user.id === thread.ownerId)?.name || 'Unknown User'}
          createdAt={thread.createdAt}
        />
      </Stack>
      <Divider />
    </Stack>
  );
};

export default ThreadItem;
