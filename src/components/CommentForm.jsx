import { Button, Stack, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../hooks/useInput';
import { asyncAddComment } from '../states/threadDetail';

const CommentForm = () => {
  const [comment, onCommentChange] = useInput('');
  const threadDetail = useSelector((state) => state.threadDetail);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncAddComment({ content: comment, threadId: threadDetail.id }));
  };

  return (
    <Stack spacing={0.5}>
      <TextField
        value={comment}
        onChange={onCommentChange}
        name="comment"
        id="comment"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        placeholder="Tulis komentar Anda"
      />
      <Button variant="contained" sx={{ bgcolor: '#2c3e50' }} type="submit" onClick={handleSubmit}>
        Kirim Komentar
      </Button>
    </Stack>
  );
};

export default CommentForm;
