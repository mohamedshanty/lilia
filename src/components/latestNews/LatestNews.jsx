import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Stack,
  Divider,
  Container,
} from "@mui/material";
import CustomButton from "../customButton/CustomButton";
import { theme } from "../customTheme/Theme";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    image: "/Image/1.jpg",
    title: "Post Title Goes Here",
    date: "18 sep",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...",
    author: "Salem Doe",
  },
  {
    id: 2,
    image: "/Image/2.jpg",
    title: "Post Title Goes Here",
    date: "18 sep",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...",
    author: "Razan Smith",
  },
  {
    id: 3,
    image: "/Image/3.jpg",
    title: "Post Title Goes Here",
    date: "18 sep",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...",
    author: "Salem Doe",
  },
];

export default function LatestNews() {
  return (
    <Box
      id="blog"
      component="section"
      sx={{
        mx: "auto",
        py: 6,
        px: 2,
        textAlign: "center",
        bgcolor: "white",
      }}
    >
      <Container maxWidth={"lg"}>
        <Typography variant="h5" fontWeight={700} mb={1}>
          Latest News
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          mb={5}
          sx={{ fontWeight: 500 }}
        >
          Our Latest Articles And News For Our Clients
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {posts.map((post) => (
            <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  position: "relative",
                  boxShadow:
                    "0px 10px 20px rgba(0,0,0,0.05), 0px 6px 6px rgba(0,0,0,0.04)",
                  textAlign: "left",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={post.image}
                    alt={post.title}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -20,
                      right: 16,
                      bgcolor: "orange",
                      color: "#fff",
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      boxShadow: "0 4px 8px rgba(255, 165, 0, 0.6)",
                      fontSize: 12,
                      userSelect: "none",
                    }}
                  >
                    <span>{post.date.split(" ")[0]}</span>
                    <span style={{ textTransform: "lowercase" }}>
                      {post.date.split(" ")[1]}
                    </span>
                  </Box>
                </Box>

                <CardContent sx={{ pb: 0, px: 2 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{
                      color: "red !important",
                      pb: 1,
                      fontSize: "18px",
                    }}
                  >
                    <Link to="/" style={{ color: "black" }}>
                      {post.title}
                    </Link>
                  </Typography>

                  <Divider />

                  <Typography
                    variant="body2"
                    sx={{
                      minHeight: 100,
                      fontWeight: 400,
                      // @ts-ignore
                      color: theme.customColors.maintext,
                      py: 2,
                      lineHeight: 2,
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                </CardContent>

                <Divider sx={{ mx: 2 }} />

                <CardActions
                  sx={{
                    px: 2,
                    pt: 1,
                    pb: 2,
                    justifyContent: "space-between",
                    fontSize: 14,
                    // @ts-ignore
                    color: theme.customColors.maintext,
                  }}
                >
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    by: {post.author}
                  </Typography>
                  <Button
                    size="small"
                    sx={{
                      color: "tomato",
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Stack mt={6} justifyContent="center" alignItems="center">
          <CustomButton label={"View All"} />
        </Stack>
      </Container>
    </Box>
  );
}
