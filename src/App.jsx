import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Container, ThemeProvider } from "@mui/material";
import Home from "./page/Home";
import Header from "./components/Header/Header";
import { theme } from "./components/customTheme/Theme";

import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Loader from "./components/loader/Loader";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme}>
      <Fab
        color="primary"
        size="medium"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          right: 20,
          transition: "0.5s",
          opacity: visible ? 1 : 0,
          bottom: visible ? 20 : "auto",
          zIndex: 1000,
          display: visible ? "block" : "none",
          "&:hover": {
            bgcolor: theme.palette.secondary.main,
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}
