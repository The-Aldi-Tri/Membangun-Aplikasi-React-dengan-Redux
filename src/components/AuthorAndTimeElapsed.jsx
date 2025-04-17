import { Stack, Typography } from '@mui/material';
import { getTimeElapsed } from '../utils/getTimeElapsed';

const AuthorAndTimeElapsed = ({ ownerName, createdAt }) => {
  return (
    <>
      <Typography variant="body2" color="text.secondary">
        {getTimeElapsed(createdAt)}
      </Typography>
      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2" color="text.secondary">
          Dibuat oleh
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          {ownerName}
        </Typography>
      </Stack>
    </>
  );
};

export default AuthorAndTimeElapsed;
