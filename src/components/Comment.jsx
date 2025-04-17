import { Avatar, Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncNeutralizeVoteComment,
  asyncToggleDownVoteComment,
  asyncToggleUpVoteComment,
} from '../states/threadDetail/action';
import { getTimeElapsed } from '../utils/getTimeElapsed';
import LikeDislikeButton from './LikeDislikeButton';

const Comment = ({ comment }) => {
  const threadDetail = useSelector((state) => state.threadDetail);

  const dispatch = useDispatch();

  return (
    <Box>
      <Stack spacing={1}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Stack direction="row" spacing={0.5}>
            <Avatar sx={{ height: '1em', width: '1em' }} alt={comment.owner.name + ' Avatar'} />
            <Typography>{comment.owner.name}</Typography>
          </Stack>
          <Typography variant="body2">{getTimeElapsed(comment.createdAt)}</Typography>
        </Box>
        <Typography>{comment.content}</Typography>
        <LikeDislikeButton
          upVotes={comment.upVotesBy}
          downVotes={comment.downVotesBy}
          onUpVote={() =>
            dispatch(asyncToggleUpVoteComment({ threadId: threadDetail.id, commentId: comment.id }))
          }
          onDownVote={() =>
            dispatch(
              asyncToggleDownVoteComment({ threadId: threadDetail.id, commentId: comment.id }),
            )
          }
          onNeutralizeVote={() =>
            dispatch(
              asyncNeutralizeVoteComment({ threadId: threadDetail.id, commentId: comment.id }),
            )
          }
        />
      </Stack>
      <Divider />
    </Box>
  );
};

export default Comment;
