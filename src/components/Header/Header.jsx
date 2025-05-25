import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  IconButton,
  Container,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./Navbar.css";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "home" },
  { label: "About Us", to: "about" },
  { label: "Services", to: "services" },
  { label: "Portfolio", to: "portfolio" },
  { label: "Team", to: "team" },
  { label: "Blog", to: "blog" },
  { label: "Contact", to: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeSection, setActiveSection] = useState("");

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const toggleDrawer = () => setOpen(!open);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 1 : 0}
        sx={{
          bgcolor: scrolled ? "#F7F7F7" : "transparent",
          color: "primary.main",
          p: 2,
          transition: "background-color 0.3s ease",
          zIndex: 8888,
        }}
      >
        <Container maxwidth={"md"}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h4">
              <Link
                to={"#home"}
                style={{
                  color:
                    // @ts-ignore
                    theme.customColors.maintext,
                }}
              >
                lilia
                <span style={{ color: theme.palette.primary.main }}>.</span>
              </Link>
            </Typography>

            {isMobile ? (
              <IconButton
                onClick={toggleDrawer}
                className={`hamburger ${open ? "open" : ""}`}
                sx={{ bgcolor: "none" }}
              >
                <span></span>
                <span></span>
                <span></span>
              </IconButton>
            ) : (
              <Box display="flex" gap={2}>
                {links.map((link, index) => (
                  <Button
                    key={index}
                    onClick={() => scrollToSection(link.to)}
                    href={`#${link.to}`}
                    className={activeSection === link.to ? "active" : ""}
                    sx={{
                      // @ts-ignore
                      color: theme.customColors.maintext,
                      transition: "0.3s",
                      textTransform: "none",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar />
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { width: "100%", height: "auto", mt: "88px" },
        }}
      >
        <List>
          {links.map((text, index) => (
            <ListItem button key={index} onClick={toggleDrawer}>
              <ListItemText primary={text.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
