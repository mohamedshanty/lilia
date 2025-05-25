import { Button, Stack, useTheme } from "@mui/material";
import React from "react";

export default function CustomButton({ label }) {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        px: 4,
        py: 1.5,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 20,
        boxShadow: `0 0px 10px ${theme.palette.primary.main}`,
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: theme.palette.secondary.main,
          boxShadow: `0 0px 10px ${theme.palette.primary.main}`,
        },
      }}
    >
      {label}
    </Button>
  );
}
