import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Container,
} from "@mui/material";
import CustomButton from "../customButton/CustomButton";
import { theme } from "../customTheme/Theme";

export default function NewsletterSubscribe() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) setError(false);
  };

  return (
    <Container maxWidth={"lg"}>
      <Box
        id="newsletter"
        component="section"
        sx={{
          bgcolor: theme.palette.primary.light,
          borderRadius: 2,
          p: { xs: 3, sm: 7 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ minWidth: 250 }}>
          <Typography variant="h4" fontWeight={"bold"} color="#333" mb={0.5}>
            Subscribe to our newsletter
          </Typography>
          <Typography
            fontWeight={400}
            // @ts-ignore
            sx={{ color: theme.customColors.maintext }}
            fontSize={14}
          >
            Get started with Lilia, Start working together Easily
          </Typography>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          flexGrow={1}
          maxWidth={600}
          alignItems={{ xs: "left", md: "center" }}
          sx={{ mt: { xs: -7, sm: 0 } }}
        >
          <TextField
            placeholder="Enter your email"
            variant="outlined"
            size="small"
            fullWidth
            value={email}
            onChange={handleChange}
            error={error}
            helperText={error ? "Please enter a valid email" : ""}
          />
          <CustomButton label={"Subscribe"} />
        </Stack>
      </Box>
    </Container>
  );
}
