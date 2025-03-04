import React from 'react';
import { Button, Typography, Box } from '@mui/material';

export const HomePage: React.FC = () => {
  return (
    <Box 
      sx={{
        width: '100vw', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: 2,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        welcome to daily bakery!
      </Typography>
      <Typography variant="h5" color="primary" paragraph>
        Play daily.
      </Typography>
      <Box mt={4}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          href="/about"
          sx={{ mx: 1 }}
        >
          Play
        </Button>
        <Button 
          variant="outlined" 
          color="secondary" 
          size="large" 
          href="/contact"
          sx={{ mx: 1 }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

