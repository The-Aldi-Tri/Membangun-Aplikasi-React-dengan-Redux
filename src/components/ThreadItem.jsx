import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { Chip, Divider, Link, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  asyncToggleDownVoteThread,
  asyncToggleNeutralizeVoteThread,
  asyncToggleUpVoteThread,
} from '../states/threads';
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
      <Link
        onClick={() => navigate(`/threads/${thread.id}`)}
        sx={{ '&:hover': { cursor: 'pointer' } }}
      >
        <Typography variant="h5" fontWeight="bold">
          {thread.title}
        </Typography>
      </Link>
      <Typography variant="body2">{truncateText(thread.body)}</Typography>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <LikeDislikeButton
          upVotes={thread.upVotesBy}
          downVotes={thread.downVotesBy}
          onUpVote={() => dispatch(asyncToggleUpVoteThread(thread.id))}
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
