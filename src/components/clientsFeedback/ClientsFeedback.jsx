import React from "react";
import Slider from "react-slick";
import { Box, Typography, Avatar, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const feedbacks = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    name: "Silvia Hatmun",
    role: "Graphic Designer",
    avatar: "/Image/1 (1).jpg",
    color: "#f87171",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    name: "Joe Paulian",
    role: "Web Developer",
    avatar: "/Image/2 (1).jpg",
    color: "#f7b08a",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    name: "Cristina Jordan",
    role: "Web Designer",
    avatar: "/Image/3 (1).jpg",
    color: "#5eae81",
  },
];

const ClientsFeedback = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    centerMode: false,
    centerPadding: "0px",
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
    appendDots: (dots) => (
      <Box sx={{ mt: 3 }}>
        <ul
          style={{
            margin: 0,
            padding: 0,
            display: "flex",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {dots}
        </ul>
      </Box>
    ),
    customPaging: (i) => (
      <Box
        sx={{
          width: 18,
          height: 8,
          bgcolor: "#f7b08a",
          borderRadius: 4,
          opacity: 0.4,
          cursor: "pointer",
          "&:hover": { opacity: 1 },
        }}
      />
    ),
  };

  return (
    <Box
      id="clients-feedback"
      component="section"
      sx={{
        bgcolor: "#F9F9FF",
        py: { xs: 6, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
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

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <Typography variant="h4" fontWeight="700" gutterBottom>
          Clients Feedback
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={6}>
          What Clients Talk About Us
        </Typography>

        <Slider {...settings}>
          {feedbacks.map(({ id, text, name, role, avatar, color }) => (
            <Box
              key={id}
              sx={{
                bgcolor: "transparent",
                borderRadius: 2,
                minHeight: 350,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                border: "2px solid #F0F0F0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  transform: "translateY(29px)",
                  gap: 2,
                  p: 0,
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    bgcolor: color,
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                    position: "absolute",
                    top: -24,
                    left: "50%",
                    transform: "translateX(-50%)",
                    boxShadow: `0 0 15px ${color}`,
                    lineHeight: 48,
                    my: 2,
                  }}
                >
                  “
                </Box>

                <Box
                  sx={{
                    mt: 2,
                  }}
                >
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mt: 4, mb: 4, px: 2 }}
                  >
                    {text}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      src={avatar}
                      sx={{ width: 64, height: 64, mb: 1 }}
                    />
                    <Typography variant="subtitle1" fontWeight="700">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {role}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default ClientsFeedback;
