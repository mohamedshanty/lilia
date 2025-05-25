import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
  Container,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation schema using yup
const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Enter at least 3 characters"),
    subject: yup
      .string()
      .required("Subject is required")
      .min(3, "Enter at least 3 characters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email"),
    message: yup
      .string()
      .required("Message is required")
      .min(10, "Enter at least 10 characters"),
  })
  .required();

export default function ContactUs() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    alert("Message sent successfully!\n\n" + JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        bgcolor: "#F9F9FF",
        py: 8,
        px: { xs: 2, md: 6 },
        position: "relative",
        overflow: "hidden",
        minHeight: "500px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 80,
          height: 80,
          bgcolor: "#d2f5d2",
          borderRadius: "50%",
          top: 40,
          left: "10%",
          opacity: 0.5,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 120,
          height: 120,
          border: "3px solid #f9b89b",
          borderRadius: "50%",
          top: 30,
          right: "5%",
          opacity: 0.3,
          zIndex: 0,
        }}
      />
      <Container maxWidth={"lg"}>
        <Box
          sx={{ position: "relative", zIndex: 1, mb: 6, textAlign: "center" }}
        >
          <Typography fontWeight={700} variant="h5" mb={1} color="#333">
            Contact Us
          </Typography>
          <Typography color="text.secondary" fontWeight={500}>
            Get In Touch
          </Typography>
        </Box>

        <Grid
          container
          spacing={6}
          justifyContent="center"
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                border: "1px solid #f9b89b",
                bgcolor: "#F9F1F7",
                boxShadow: "0 0 15px rgba(249,184,155,0.15)",
                display: "flex",
                flexDirection: "column",
                gap: 7,
              }}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems="center"
                spacing={5}
              >
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    border: "1px solid #f9b89b",
                    color: "#f9b89b",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 60,
                    height: 60,
                    boxShadow: "0 0 12px #f9b89b",
                    transform: "rotate(45deg)",
                  }}
                >
                  <LocationOnIcon
                    fontSize="large"
                    sx={{ transform: "rotate(-45deg)" }}
                  />
                </Box>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography fontWeight={700} color="#555">
                    NewYork, USA
                  </Typography>
                  <Typography color="text.secondary">10 Street Name</Typography>
                </Box>
              </Stack>

              <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems="center"
                spacing={5}
              >
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    border: "1px solid #a5d6a7",
                    color: "#a5d6a7",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 60,
                    height: 60,
                    boxShadow: "0 0 12px #a5d6a7",
                    transform: "rotate(45deg)",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <EmailOutlinedIcon
                    fontSize="large"
                    sx={{ transform: "rotate(-45deg)" }}
                  />
                </Box>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography fontWeight={700} color="#555">
                    Lilia@infos.com
                  </Typography>
                  <Typography color="text.secondary">
                    Support@example.com
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction={{ xs: "column", md: "row" }}
                alignItems="center"
                spacing={5}
              >
                <Box
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    border: "1px solid #ef9a9a",
                    color: "#ef9a9a",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 60,
                    height: 60,
                    boxShadow: "0 0 12px #ef9a9a",
                    transform: "rotate(45deg)",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <PhoneEnabledOutlinedIcon
                    fontSize="large"
                    sx={{ transform: "rotate(-45deg)" }}
                  />
                </Box>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography fontWeight={700} color="#555">
                    +1 212 500-6755
                  </Typography>
                  <Typography color="text.secondary">
                    +1 212 117-2210
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                {/* Name */}
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Name"
                      variant="outlined"
                      fullWidth
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ""}
                      sx={{
                        bgcolor: "transparent",
                        borderRadius: 4,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 4,
                          borderColor: "#f9b89b",
                        },
                        "& fieldset": {
                          borderColor: "#f9b89b",
                        },
                        "&:hover fieldset": {
                          borderColor: "#fb8c00",
                        },
                        "&.Mui-error fieldset": {
                          borderColor: "#e53935",
                        },
                      }}
                    />
                  )}
                />

                {/* Subject */}
                <Controller
                  name="subject"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Subject"
                      variant="outlined"
                      fullWidth
                      error={!!errors.subject}
                      helperText={errors.subject ? errors.subject.message : ""}
                      sx={{
                        bgcolor: "transparent",
                        borderRadius: 4,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 4,
                        },
                        "& fieldset": {
                          borderColor: "#f9b89b",
                        },
                        "&:hover fieldset": {
                          borderColor: "#fb8c00",
                        },
                        "&.Mui-error fieldset": {
                          borderColor: "#e53935",
                        },
                      }}
                    />
                  )}
                />

                {/* Email */}
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                      sx={{
                        bgcolor: "transparent",
                        borderRadius: 4,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 4,
                        },
                        "& fieldset": {
                          borderColor: "#f9b89b",
                        },
                        "&:hover fieldset": {
                          borderColor: "#fb8c00",
                        },
                        "&.Mui-error fieldset": {
                          borderColor: "#e53935",
                        },
                      }}
                    />
                  )}
                />

                {/* Message */}
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Your Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      minRows={4}
                      error={!!errors.message}
                      helperText={errors.message ? errors.message.message : ""}
                      sx={{
                        bgcolor: "transparent",
                        borderRadius: 4,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 4,
                        },
                        "& fieldset": {
                          borderColor: "#f9b89b",
                        },
                        "&:hover fieldset": {
                          borderColor: "#fb8c00",
                        },
                        "&.Mui-error fieldset": {
                          borderColor: "#e53935",
                        },
                      }}
                    />
                  )}
                />

                {/* Send Message*/}
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    bgcolor: "#fb8c00",
                    fontWeight: "bold",
                    py: 1.5,
                    borderRadius: 3,
                    boxShadow: "0 6px 12px rgba(251,140,0,0.5)",
                    "&:hover": {
                      bgcolor: "#ef6c00",
                      boxShadow: "0 8px 16px rgba(239,108,0,0.7)",
                    },
                  }}
                >
                  Send Message
                </Button>
                {isSubmitSuccessful && (
                  <Typography color="success.main" textAlign="center">
                    Message sent successfully!
                  </Typography>
                )}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
