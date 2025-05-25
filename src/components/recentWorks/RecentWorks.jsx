import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Link,
} from "@mui/material";
import "react-medium-image-zoom/dist/styles.css";
import LinkIcon from "@mui/icons-material/Link";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Zoom from "react-medium-image-zoom";
import { theme } from "../customTheme/Theme";
import { motion } from "framer-motion";

const RecentWorks = () => {
  const categories = ["All Works", "Design", "Development", "Branding"];
  const projects = [
    { title: "Project Title 1", category: "Design", url: "#" },
    { title: "Project Title 2", category: "Development", url: "#" },
    { title: "Project Title 3", category: "Branding", url: "#" },
    { title: "Project Title 4", category: "Design", url: "#" },
    { title: "Project Title 5", category: "Development", url: "#" },
    { title: "Project Title 6", category: "Branding", url: "#" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Works");
  const imageRefs = useRef([]);

  const filteredProjects =
    selectedCategory === "All Works"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const openZoom = (index) => {
    if (imageRefs.current[index]) {
      imageRefs.current[index].click();
    }
  };

  // تأثيرات الحركة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      component="section"
      id="portfolio"
      sx={{ py: 8, px: { xs: 2, md: 10 }, textAlign: "center" }}
    >
      <Container maxWidth={"lg"}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          Our Recent Works
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: "text.secondary",
            fontSize: { xs: "1rem", md: "1.2rem" },
          }}
        >
          We've Done Lot's Of Work, Let's Check Some From Here
        </Typography>

        <Box
          sx={{
            mb: 6,
            boxShadow: "2px 2px 10px #dbdbdb",
            maxWidth: 450,
            width: "100%",
            mx: "auto",
            p: 1,
            borderRadius: 10,
          }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant="text"
              onClick={() => setSelectedCategory(category)}
              sx={{
                mx: 1,
                color:
                  selectedCategory === category
                    ? theme.palette.primary.main
                    : "black",
                textTransform: "none",
                "&:hover": { color: theme.palette.primary.main },
              }}
            >
              {category}
            </Button>
          ))}
        </Box>

        <Grid
          container
          spacing={4}
          key={selectedCategory}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => {
            const imageSrc = `/Image/item-${index + 1}.jpg`;
            return (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={index}
                component={motion.div}
                variants={itemVariants}
              >
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: 3,
                    cursor: "pointer",
                    position: "relative",
                    p: 1,
                    overflow: "hidden",
                    "&:hover .overlay": {
                      transform: "translateY(0)",
                      opacity: 1,
                    },
                    "&:hover .img-container": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Box
                    className="img-container"
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      transition: "transform 0.3s",
                      height: 240,
                    }}
                  >
                    <Zoom>
                      <img
                        ref={(el) => (imageRefs.current[index] = el)}
                        src={imageSrc}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          cursor: "zoom-in",
                        }}
                      />
                    </Zoom>

                    {/* Overlay */}
                    <Box
                      className="overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.6)",
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2,
                        transform: "translateY(-100%)",
                        opacity: 0,
                        transition: "all 0.3s ease",
                        zIndex: 10,
                      }}
                    >
                      <Link
                        href={project.url}
                        target="_blank"
                        underline="none"
                        color="inherit"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <LinkIcon />
                        Visit Project
                      </Link>
                      <Box sx={{ display: "flex", gap: 2 }}>
                        <IconButton
                          sx={{ color: "white" }}
                          aria-label="Zoom Image"
                          size="large"
                          onClick={() => openZoom(index)}
                        >
                          <ZoomInIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>

                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.category}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default RecentWorks;
