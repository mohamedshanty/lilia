import React from "react";
import { Box, Container, Grid } from "@mui/material";
import StatItem from "./StatItem";
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Statistics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
    threshold: 0.1,
  });

  return (
    <Box
      id="statistics"
      component="section"
      sx={{
        pb: 10,
        backgroundColor: "#ffffff",
        backgroundImage: "url('/public/Image//counters-bg.png')",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 60,
          height: 60,
          border: "3px solid #f7b08a",
          borderRadius: "50%",
          top: 50,
          right: 50,
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid container justifyContent="space-around">
            <Grid
              size={{ xs: 12, md: 6, lg: 3 }}
              mt={10}
              component={motion.div}
              variants={itemVariants}
            >
              <StatItem
                number="700"
                label="Projects"
                color="#4e73df"
                bgcolor="#e8f0fe"
                startCount={inView}
              />
            </Grid>
            <Grid
              size={{ xs: 12, md: 6, lg: 3 }}
              mt={20}
              component={motion.div}
              variants={itemVariants}
            >
              <StatItem
                number="1100"
                label="Clients"
                color="#1cc88a"
                bgcolor="#e6f7f0"
                startCount={inView}
              />
            </Grid>
            <Grid
              size={{ xs: 12, md: 6, lg: 3 }}
              mt={10}
              component={motion.div}
              variants={itemVariants}
            >
              <StatItem
                number="500"
                label="Coffee"
                color="#f6c23e"
                bgcolor="#fef8e6"
                startCount={inView}
              />
            </Grid>
            <Grid
              size={{ xs: 12, md: 6, lg: 3 }}
              mt={20}
              component={motion.div}
              variants={itemVariants}
            >
              <StatItem
                number="800"
                label="Awards"
                color="#e74a3b"
                bgcolor="#fde8e6"
                startCount={inView}
              />
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
