import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import CustomButton from "../customButton/CustomButton";
import React from "react";

export default function Experience() {
  return (
    <Box
      id="experience"
      component="section"
      sx={{
        bgcolor: "#F8E7E7",
        p: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems={"center"}>
          <Grid size={{ lg: 10 }}>
            <Stack pt={2}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#333333",
                  mb: 2,
                  fontSize: "1.8rem",
                }}
              >
                We Have 10+ Years of Experience. We always stay with our
                clients.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#666666",
                  mb: 4,
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ lg: 2 }}>
            <CustomButton label={"Contact Us"} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
