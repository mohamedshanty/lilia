import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DigitalMarketingIcon from "@mui/icons-material/ConnectWithoutContact";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Analytics & Research",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et.",
    icon: <AnalyticsIcon fontSize="large" />,
    iconColor: "#4CAF50",
    hoverColor: "rgba(76, 175, 80, 0.1)",
  },
  {
    title: "Design & Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et.",
    icon: <DesignServicesIcon fontSize="large" />,
    iconColor: "#2196F3",
    hoverColor: "rgba(33, 150, 243, 0.1)",
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et.",
    icon: <DigitalMarketingIcon fontSize="large" />,
    iconColor: "#FF5722",
    hoverColor: "rgba(255, 87, 34, 0.1)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
    threshold: 0.1,
  });

  return (
    <Box
      sx={{
        pt: 15,
        pb: 15,
        margin: "0 auto",
        bgcolor: "white",
        position: "relative",
      }}
      id="features"
      component="section"
    >
      <Box
        sx={{
          position: "absolute",
          width: 100,
          height: 100,
          bgcolor: "rgba(94, 174, 129, 0.3)",
          borderRadius: "50%",
          top: 20,
          left: 40,
          zIndex: 0,
        }}
      />
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
        {/* الحاوية مع variants لتطبيق staggerChildren */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid
                size={{ xs: 12, md: 4 }}
                key={index}
                component={motion.div}
                variants={cardVariants}
              >
                <Box
                  elevation={0}
                  sx={{
                    height: "300px",
                    p: 4,
                    borderRadius: 8,
                    transition: "all 0.3s ease",
                    border: "1px solid transparent",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      backgroundColor: service.hoverColor,
                      transform: "translateY(-10px)",
                      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "transparent",
                        color: service.iconColor,
                        p: 2,
                        textAlign: "center",
                        width: "fit-content",
                        border: `2px solid ${service.iconColor}`,
                        borderRadius: "8px",
                        mb: 3,
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        color: "text.primary",
                        textAlign: "center",
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.6,
                        textAlign: "center",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
