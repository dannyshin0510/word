// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import { HomePage } from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GamePage from "./pages/GamePage";
import ContactPage from "./pages/ContactPage";

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="absolute" sx={{ backgroundColor: "#1a1a1a" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Word Hero
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/game">
            Play
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
