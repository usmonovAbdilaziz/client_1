// src/components/Home.js
import React from 'react';
import { Button, Typography } from '@mui/material';
import { useAuth } from './AuthProvider';

 const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome, {auth.user.username}
      </Typography>
      <Button variant="contained" color="secondary" onClick={auth.logout}>
        Logout
      </Button>
    </div>
  );
};
export default Home;
