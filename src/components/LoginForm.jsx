import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useInput } from '../hooks/useInput';
import { asyncSetAuthUser } from '../states/authUser';

const LoginForm = () => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h1">
          Login
        </Typography>
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
          Login
        </Button>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="body2">
            Belum punya akun?{' '}
            <Link onClick={() => navigate('/register')} sx={{ '&:hover': { cursor: 'pointer' } }}>
              Daftar di sini.
            </Link>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default LoginForm;
