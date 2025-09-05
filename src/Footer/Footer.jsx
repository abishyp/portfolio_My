import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a202c", // dark elegant background
        color: "white",
        py: 2,
        textAlign: "center",
        mt: 6,
      }}
    >
      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
