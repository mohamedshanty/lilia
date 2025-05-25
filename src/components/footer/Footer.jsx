// @ts-ignore
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  // @ts-ignore
  Facebook,
  Twitter,
  Instagram,
  ArrowForwardIos,
  FacebookOutlined,
} from "@mui/icons-material";
import { theme } from "../customTheme/Theme";

const Footer = () => {
  const linkSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Press", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", url: "#" },
        { name: "Help Center", url: "#" },
        { name: "Contact", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms of Service", url: "#" },
        { name: "Cookie Policy", url: "#" },
      ],
    },
  ];

  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        pt: 6,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  color: "#888888",
                }}
              >
                Lilia<span style={{ color: "red" }}>.</span>
              </Typography>
              <Typography
                variant="body2"
                // @ts-ignore
                sx={{ mb: 2, color: theme.customColors.maintext }}
              >
                NewYork, USA
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              // @ts-ignore
              sx={{ mb: 2, color: theme.customColors.maintext }}
            >
              Support@example.com
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              // @ts-ignore
              sx={{ mb: 2, color: theme.customColors.maintext }}
            >
              +1 212 500-6755
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: "white",
                  borderRadius: "50%",
                  p: 1,
                  transition: "0.5s",
                  "&:hover": {
                    bgcolor: theme.palette.secondary.main,
                  },
                }}
              >
                <FacebookOutlined />
              </IconButton>
              <IconButton
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: "white",
                  borderRadius: "50%",
                  p: 1,
                  transition: "0.5s",
                  "&:hover": {
                    bgcolor: theme.palette.secondary.main,
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: "white",
                  borderRadius: "50%",
                  p: 1,
                  transition: "0.5s",
                  "&:hover": {
                    bgcolor: theme.palette.secondary.main,
                  },
                }}
              >
                <Instagram />
              </IconButton>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
            <Grid container spacing={4}>
              {linkSections.map((section) => (
                <Grid size={{ xs: 12, md: 4 }} key={section.title}>
                  <Typography variant="h6" gutterBottom>
                    {section.title}
                  </Typography>
                  <List>
                    {section.links.map((link) => (
                      <ListItem
                        key={link.name}
                        disableGutters
                        sx={{
                          "&:hover": {
                            transform: "translateX(4px)",
                            transition: "transform 0.3s ease",
                          },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                          <ArrowForwardIos fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>
                          <Link
                            href={link.url}
                            underline="hover"
                            sx={{
                              // @ts-ignore
                              color: `${theme.customColors.maintext}`,
                            }}
                          >
                            {link.name}
                          </Link>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2 }} />
        {/* Footer Footer */}
        <Box
          sx={{
            py: 3,
            textAlign: "cetner",
          }}
        >
          <Typography
            variant="body2"
            // @ts-ignore
            color={theme.customColors.maintext}
            sx={{ textAlign: "center" }}
          >
            © {new Date().getFullYear()}{" "}
            <span style={{ color: theme.palette.primary.main }}>lilia</span> All
            rights reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
