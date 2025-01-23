// GamePage.tsx
import React from 'react';
import { Button, Typography } from '@mui/material';
import { HangmanContainer } from '../components/HangmanContainer';
const GamePage: React.FC = () => {
  return (
    <div>
      <Typography variant="h2">Contact Us</Typography>
      <Button variant="contained" color="primary" href="/">
        Go Back to Home Page
      </Button>
      <HangmanContainer/>
    </div>
  );
};

export default GamePage;
