import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "rgba(26, 32, 44, 0.6)", // semi-transparent dark
        backdropFilter: "blur(12px) saturate(150%)", // frosted glossy effect
        WebkitBackdropFilter: "blur(12px) saturate(150%)", // Safari support
        borderTop: "1px solid rgba(255, 255, 255, 0.2)", // subtle glass border
        color: "white",
        py: 3,
        textAlign: "center",
        mt: "auto",
        boxShadow: "0 -4px 30px rgba(0, 0, 0, 0.3)", // glossy shadow
      }}
    >
      {/* Social Icons */}
      <Box sx={{ mb: 1 }}>
        <IconButton
          component="a"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": { color: "#00ffcc", transform: "scale(1.2)" },
          }}
        >
          <GitHub />
        </IconButton>

        <IconButton
          component="a"
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": { color: "#0077b5", transform: "scale(1.2)" },
          }}
        >
          <LinkedIn />
        </IconButton>

        <IconButton
          component="a"
          href="mailto:abishyp6385@gmail.com"
          sx={{
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": { color: "#ff4c4c", transform: "scale(1.2)" },
          }}
        >
          <Email />
        </IconButton>
      </Box>

      {/* Footer Text */}
      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
