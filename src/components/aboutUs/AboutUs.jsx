import React from "react";
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  useTheme,
  Grid,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function AboutUs() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#F9F9FF",
        mt: 3,
      }}
      id="about"
      component="section"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Image */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              minHeight: 400,
              backgroundColor: "#F9F9FF",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/Image/about.png"
              alt="About Us"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                backgroundColor: "#F9F9FF",
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: "bold",
                mb: 3,
                color: theme.palette.text.primary,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                mb: 3,
                color: "#888888",
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              We Know The Way Of Success
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.8,
                color: theme.palette.text.secondary,
                fontSize: "1rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              sed do eiusm tempor incididunt ut labore et dolore magna.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                lineHeight: 1.8,
                color: theme.palette.text.secondary,
                fontSize: "1rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusm tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <List>
              {[
                "Competitive Prices",
                "Built With Amazing Features",
                "Quality Work",
                "Easy To Edit & User Friendly Design",
              ].map((text) => (
                <ListItem key={text} disableGutters sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                    }}
                  >
                    {text}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
