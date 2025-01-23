// AboutPage.tsx
import React from 'react';
import { Button, Typography, Box } from '@mui/material';

const AboutPage: React.FC = () => {
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
        Welcome to Wurd!
      </Typography>
      <Typography variant="h5" color="textSecondary" paragraph>
        Discover amazing features and explore what we have to offer.
      </Typography>
      <Box mt={4}>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          href="/about"
          sx={{ mx: 1 }}
        >
          Learn More
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

export default AboutPage;
