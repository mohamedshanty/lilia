import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  IconButton,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Razan Smith",
    role: "Web Designer",
    image: "/Image/1.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jack Hakman",
    role: "Web Developer",
    image: "/Image/2.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Salem Doe",
    role: "Marketer",
    image: "/Image/3.png",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

// تعريف Variants للحركة
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TeamSection() {
  return (
    <Box
      id="team"
      component="section"
      sx={{
        bgcolor: "#f8f9ff",
        py: { xs: 6, md: 10 },
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
        <Typography
          variant="h4"
          component="h2"
          fontWeight="700"
          gutterBottom
          sx={{ color: "#333", mb: 1 }}
        >
          Our Team
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={6}>
          Meet Our Awesome Team Member
        </Typography>

        {/* حاوية الحركة */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Grid container spacing={5} justifyContent="center">
            {teamMembers.map(({ name, role, image, socials }, i) => (
              <Grid
                size={{ xs: 12, sm: 6, md: 4 }}
                key={i}
                component={motion.div}
                variants={itemVariants}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    position: "relative",
                    width: "100%",
                    height: "80%",
                    "&:hover .social-icons": {
                      opacity: 1,
                      visibility: "visible",
                      right: 10,
                    },
                  }}
                >
                  <Box
                    sx={{ width: "100%", height: "100%", overflow: "hidden" }}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 3,
                        mb: 2,
                        transition: "0.5s",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                  </Box>

                  <Box
                    className="social-icons"
                    sx={{
                      position: "absolute",
                      top: "80px",
                      right: "-10px",
                      transform: "translateY(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      opacity: 0,
                      visibility: "hidden",
                      transition: "all 0.3s ease",
                      zIndex: 10,
                    }}
                  >
                    <Link
                      href={socials.facebook}
                      target="_blank"
                      color="inherit"
                    >
                      <IconButton
                        sx={{
                          bgcolor: "#3b5998",
                          color: "white",
                          "&:hover": { bgcolor: "#314d86" },
                          p: 1,
                        }}
                      >
                        <FacebookIcon />
                      </IconButton>
                    </Link>
                    <Link
                      href={socials.twitter}
                      target="_blank"
                      color="inherit"
                    >
                      <IconButton
                        sx={{
                          bgcolor: "#00acee",
                          color: "white",
                          "&:hover": { bgcolor: "#0089cc" },
                          p: 1,
                        }}
                      >
                        <TwitterIcon />
                      </IconButton>
                    </Link>
                    <Link
                      href={socials.linkedin}
                      target="_blank"
                      color="inherit"
                    >
                      <IconButton
                        sx={{
                          bgcolor: "#0e76a8",
                          color: "white",
                          "&:hover": { bgcolor: "#0b5c7f" },
                          p: 1,
                        }}
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </Link>
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="600"
                      color="#666"
                      mb={0.5}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#f7b08a"
                      fontWeight="500"
                    >
                      {role}
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
