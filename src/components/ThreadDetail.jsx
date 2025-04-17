import { Chip, Link, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  asyncToggleDownVoteThreadDetail,
  asyncToggleNeutralizeVoteThreadDetail,
  asyncToggleUpVoteThreadDetail,
} from '../states/threadDetail';
import AuthorAndTimeElapsed from './AuthorAndTimeElapsed';
import Comment from './Comment';
import CommentForm from './CommentForm';
import LikeDislikeButton from './LikeDislikeButton';

const ThreadDetail = () => {
  const threadDetail = useSelector((state) => state.threadDetail);
  const authUser = useSelector((state) => state.authUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!threadDetail) {
    return null;
  }

  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
        <Chip
          label={'#' + threadDetail.category}
          variant="outlined"
          sx={{ width: 'fit-content' }}
        />
        <Typography variant="h4" fontWeight="bold">
          {threadDetail.title}
        </Typography>
        <Typography variant="body1">{threadDetail.body}</Typography>
        <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
          <LikeDislikeButton
            upVotes={threadDetail.upVotesBy}
            downVotes={threadDetail.downVotesBy}
            onUpVote={() => dispatch(asyncToggleUpVoteThreadDetail(threadDetail.id))}
            onDownVote={() => dispatch(asyncToggleDownVoteThreadDetail(threadDetail.id))}
            onNeutralizeVote={() =>
              dispatch(asyncToggleNeutralizeVoteThreadDetail(threadDetail.id))
            }
          />
          <AuthorAndTimeElapsed
            ownerName={threadDetail.owner.name}
            createdAt={threadDetail.createdAt}
          />
        </Stack>
      </Stack>
      <Stack spacing={1}>
        <Typography variant="h6">Beri Komentar</Typography>
        {authUser ? (
          <CommentForm />
        ) : (
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Link onClick={() => navigate('/login')} sx={{ '&:hover': { cursor: 'pointer' } }}>
              Login
            </Link>
            <Typography>untuk memberi komentar</Typography>
          </Stack>
        )}
      </Stack>
      <Stack spacing={1}>
        <Typography variant="h6">{'Komentar (' + threadDetail.comments.length + ')'}</Typography>
        {threadDetail.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ThreadDetail;
