import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useInput } from '../hooks/useInput';
import { asyncAddThread } from '../states/threads';

const NewThread = () => {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncAddThread({ title, category, body }));
    navigate('/');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h1">
          Buat Diskusi Baru
        </Typography>
        <TextField
          fullWidth
          id="title"
          label="Judul"
          name="title"
          value={title}
          onChange={onTitleChange}
        />
        <TextField
          fullWidth
          name="category"
          label="Kategori"
          id="category"
          value={category}
          onChange={onCategoryChange}
        />
        <TextField
          fullWidth
          name="body"
          label="Isi"
          id="body"
          multiline
          rows={4}
          value={body}
          onChange={onBodyChange}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ bgcolor: '#2c3e50' }}>
          Buat
        </Button>
      </Stack>
    </Box>
  );
};

export default NewThread;
