import React from "react";
import {
  Box,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import CustomButton from "../customButton/CustomButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: "100vh",
        bgcolor: "#F7F7F7",
        mt: -8,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-37%",
          left: "-101px",
          maxWidth: "474px",
          width: "70%",
          zIndex: 100,
          height: "756px",
          background: "#f9d8c6",
          borderRadius: "50%",
          transform: "rotate(36deg)",
          opacity: 0.2,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: "-38%",
          left: "-181px",
          opacity: "0.09",
          background: "rgb(245, 164, 117)",
          maxWidth: "474px",
          width: "70%",
          zIndex: 1000,
          height: "756px",
          transform: "rotate(36deg)",
          borderRadius: "50%",
        },
      }}
    >
      <Container
        maxWidth="lg"
        ref={ref}
        style={{
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 100,
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <motion.div
            variants={textVariants}
            style={{ maxWidth: 500, width: "100%" }}
          >
            <Box
              sx={{
                m: "0 auto",
                textAlign: "left",
                alignItems: { xs: "center", md: "left" },
                justifyContent: "center",
                transform: { xs: "translateY(50%)", md: "translateY(0)" },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "gray",
                  mb: 2,
                  fontSize: isMobile ? "1rem" : "1.25rem",
                }}
              >
                Welcome To Lilia Agency
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  fontSize: isMobile ? "2.5rem" : "4rem",
                  lineHeight: 1.2,
                  color: "#3E3E3E",
                }}
              >
                Digital Agency With Excellence Services
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 4, width: "100%" }}>
                <CustomButton label={"Learn More"} />
                <CustomButton label={"Contact Us"} />
              </Stack>
            </Box>
          </motion.div>

          <motion.div
            variants={imageVariants}
            style={{
              display: isMobile ? "none" : "block",
              position: "relative",
            }}
          >
            <Box component={"img"} src="/Image/home.jpg" alt="Hero Image" />
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
