import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  Divider,
} from "@mui/material";

const plans = [
  {
    title: "Basic Plan",
    price: 36,
    priceColor: "#FF975A",
    bgcolor: "#FFF4EE",
    features: [
      "Unlimited Styles",
      "Secure Online Transfer",
      "Cloud Storage",
      "24/7 Customer Service",
      "Automatic Backup",
    ],
    buttonColor: "#f7b08a",
  },
  {
    title: "Personal Plan",
    price: 50,
    priceColor: "#71DC85",
    bgcolor: "#F1FBF3",
    features: [
      "Unlimited Styles",
      "Secure Online Transfer",
      "Cloud Storage",
      "24/7 Customer Service",
      "Automatic Backup",
    ],
    buttonColor: "#5eae81",
  },
  {
    title: "Premium Plan",
    price: 70,
    priceColor: "#FC6765",
    bgcolor: "#FFF0EF",
    features: [
      "Unlimited Styles",
      "Secure Online Transfer",
      "Cloud Storage",
      "24/7 Customer Service",
      "Automatic Backup",
    ],
    buttonColor: "#f87171",
  },
];

export default function PricingSection() {
  return (
    <Box
      id="pricing"
      component="section"
      sx={{ py: { xs: 6, md: 12 }, mb: 15 }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" fontWeight="700" gutterBottom>
            Our Pricing
          </Typography>
          <Typography color="text.secondary" variant="subtitle1">
            Choose Your Best Pricing Plan
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 15, md: 4 }} justifyContent="center">
          {plans.map(
            (
              { title, price, priceColor, features, buttonColor, bgcolor },
              i
            ) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                <Box
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: 2,
                    boxShadow: "0 4px 15px rgb(0 0 0 / 0.05)",
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    textAlign: "center",
                    mt: 3,
                    "&:hover": {
                      transition: "all 0.5s",
                      bgcolor: bgcolor,
                      boxShadow: `0 4px 15px ${buttonColor}`,
                      border: `1px solid ${buttonColor}`,
                      transform: "translateY(7px)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight="700"
                      sx={{ mb: 2, textAlign: "center" }}
                    >
                      {title}
                    </Typography>

                    <Divider sx={{ mb: 2 }} />

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        gap: 1,
                        mb: 3,
                        position: "relative",
                        "&:before": {
                          content: '"$"',
                          position: "absolute",
                          top: "2px",
                          left: "80px",
                          fontSize: "20px",
                          color: priceColor,
                        },
                      }}
                    >
                      <Typography
                        variant="h3"
                        fontWeight="700"
                        sx={{ color: priceColor }}
                      >
                        {price}
                      </Typography>
                      <Typography variant="body2" sx={{ color: priceColor }}>
                        /Mo
                      </Typography>
                    </Box>

                    <Divider sx={{ mb: 2 }} />

                    <Box
                      component="ul"
                      sx={{
                        textAlign: "center",
                        p: 0,
                        pt: 3,
                        m: 0,
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      {features.map((feature, idx) => (
                        <Typography
                          component="li"
                          variant="body1"
                          color="text.secondary"
                          key={idx}
                          sx={{ fontSize: 18 }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  <Divider sx={{ mb: 2 }} />

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: buttonColor,
                      fontWeight: "700",
                      borderRadius: "12px",
                      py: 1.5,
                      boxShadow: `0 8px 15px ${buttonColor}60`,
                      transition: "background-color 0.3s ease",
                      "&:hover": {
                        bgcolor: buttonColor,
                        filter: "brightness(1.1)",
                        boxShadow: `0 12px 20px ${buttonColor}80`,
                      },
                    }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
}
