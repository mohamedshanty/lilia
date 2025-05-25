import React from "react";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";

const StatItem = ({ number, label, color, bgcolor, startCount }) => (
  <Box sx={{ textAlign: "center", p: 2 }}>
    <Box
      sx={{
        position: "relative",
        width: "120px",
        height: "120px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          border: `1px solid ${color}`,
          backgroundColor: bgcolor,
          transform: "rotate(45deg)",
          position: "absolute",
          boxShadow: `0 0 20px ${color}80`,
          borderRadius: "30px",
        }}
      />
      <Box
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            color: color,
            fontSize: "2.5rem",
            lineHeight: 1,
          }}
        >
          {startCount ? (
            <CountUp
              start={0}
              end={Number(number)}
              duration={2}
              separator=","
            />
          ) : (
            number
          )}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            fontSize: "1rem",
            mt: 1,
            color: "black",
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default StatItem;
