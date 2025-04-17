import { Box, Container, Paper } from '@mui/material';
import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const BaseLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <LoadingBar />
      <Header />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper elevation={3} sx={{ p: 6 }}>
          {children}
        </Paper>
      </Container>
      <BottomNav />
    </Box>
  );
};

export default BaseLayout;
