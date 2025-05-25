import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { theme } from "../customTheme/Theme";

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const currentTheme = useTheme();
  const isSmallScreen = useMediaQuery(currentTheme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(
    currentTheme.breakpoints.between("sm", "md")
  );

  const services = [
    {
      number: "1",
      icon: "/Image/icon-1.png",
      title: "Search Engine Optimization",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et.",
    },
    {
      number: "2",
      icon: "/Image/icon-2.png",
      title: "Speed Optimization & Data Analysis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et.",
    },
    {
      number: "3",
      icon: "/Image/icon-3.png",
      title: "Online Marketing Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et.",
    },
  ];

  return (
    <Box
      id="services"
      component="section"
      sx={{
        p: { xs: 4, sm: 6, md: 10 },
        bgcolor: "#F9F9FF",
        maxWidth: { xs: "85%", md: "100%" },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Our Amazing Services
        </Typography>

        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "text.secondary",
            mb: 4,
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Discover Services We Are Provided
        </Typography>

        {/* Horizontal Timeline - يظهر فقط في الشاشات الكبيرة */}
        {!isSmallScreen && !isMediumScreen && (
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              mb: 4,
              width: "100%",
            }}
          >
            {/* Timeline line */}
            <Box
              sx={{
                position: "absolute",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                maxWidth: "750px",
                width: "100%",
                height: "2px",
                backgroundColor: "#FBD8C4",
                zIndex: 1,
              }}
            />

            {/* Timeline dots */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: "800px",
                position: "relative",
                zIndex: 2,
              }}
            >
              {services.map((service, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor:
                      hoveredIndex === index
                        ? theme.palette.primary.main
                        : "white",
                    color: hoveredIndex === index ? "white" : "#FBD8C4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    position: "relative",
                    zIndex: 2,
                    border: `2px solid #FBD8C4`,
                    transition: "0.5s",
                    userSelect: "none",
                  }}
                >
                  {service.number}
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Services */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2, sm: 3 },
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              onMouseEnter={() => !isSmallScreen && setHoveredIndex(index)}
              onMouseLeave={() => !isSmallScreen && setHoveredIndex(null)}
              onClick={() =>
                isSmallScreen &&
                setHoveredIndex(hoveredIndex === index ? null : index)
              }
              sx={{
                mt: { xs: 1, md: "20px" },
                transition: "0.3s",
                position: "relative",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                p: { xs: 3, sm: 4, md: 5 },
                textAlign: "center",
                height: { xs: "auto", sm: 300 },
                minHeight: { xs: 200, sm: 300 },
                mb: { xs: 2, sm: 0 },
                backgroundColor:
                  hoveredIndex === index ? "#FAEFEE" : "transparent",
                transform: hoveredIndex === index ? "translateY(-5px)" : "none",
                border:
                  hoveredIndex === index
                    ? `1px solid ${theme.palette.primary.main}`
                    : "1px solid transparent",
                boxShadow:
                  hoveredIndex === index
                    ? `0px 4px 10px ${theme.palette.primary.main}`
                    : "none",
                "&:hover": {
                  "@media (hover: hover)": {
                    backgroundColor: "#FAEFEE",
                    transform: "translateY(-5px)",
                    border: `1px solid ${theme.palette.primary.main}`,
                    boxShadow: `0px 4px 10px ${theme.palette.primary.main}`,
                  },
                },
              }}
            >
              <img
                src={service.icon}
                alt="icon"
                style={{
                  width: isSmallScreen ? "50px" : "70px",
                  height: "auto",
                  marginBottom: "15px",
                }}
              />
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                }}
              >
                {service.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
