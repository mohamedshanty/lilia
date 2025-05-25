import { Box } from "@mui/material";
import { theme } from "../customTheme/Theme";
import React from "react";

export default function Loader() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#fff",
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              width: 20,
              height: 20,
              bgcolor: theme.palette.primary.main,
              borderRadius: "50%",
              animation: "bounce 0.6s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </Box>

      <style>
        {`
            @keyframes bounce {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.5); }
            }
          `}
      </style>
    </Box>
  );
}
