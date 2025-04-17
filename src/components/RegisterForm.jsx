import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useInput } from '../hooks/useInput';
import { asyncRegisterUser } from '../states/authUser/action';

const RegisterForm = () => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncRegisterUser({ name, email, password }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h1">
          Register
        </Typography>
        <TextField
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={onNameChange}
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={onEmailChange}
        />
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={onPasswordChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            bgcolor: '#2c3e50',
            '&:hover': {
              bgcolor: '#1a252f',
            },
          }}
        >
          Register
        </Button>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="body2">
            Sudah punya akun?{' '}
            <Link underline="hover" onClick={() => navigate('/login')}>
              Login di sini.
            </Link>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default RegisterForm;
