import React from "react";
import styled from "styled-components";
import { Button, Typography, Box } from "@mui/material";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column; /* Use hyphen for multi-word properties */
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px; /* padding is in pixels by default */
`;

export const HomePage: React.FC = () => {
  return (
    <Container>
      <Typography component="h1" gutterBottom>
        Hello, friends of Danny!
      </Typography>
      <Typography variant="h5" color="white" paragraph>
        now go learn something.
      </Typography>
      <Box mt={4}>
        <Button
          variant="contained"
          size="large"
          href="/game"
          sx={{ mx: 1, backgroundColor: "#1a1a1a" }}
        >
          Play
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          href="#"
          sx={{ mx: 1, borderColor: "#fafafa", color: "#fafafa" }}
        >
          don't Contact Us
        </Button>
      </Box>
    </Container>
  );
};
