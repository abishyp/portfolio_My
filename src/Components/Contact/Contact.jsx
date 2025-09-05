import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import Lottie from "lottie-react";
import contactAnimation from "../../Assets/contact_desing.json";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) tempErrors.email = "Invalid email";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setOpenSnackbar(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        py: 4,
        pl: { xs: 3, md: 9 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Side: Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{
                p: 5,
                borderRadius: 4,
                background: "rgba(48, 62, 78, 0.85)",
                backdropFilter: "blur(12px)",
                color: "white",
              }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                gutterBottom
                sx={{
                  background: "linear-gradient(90deg, #319795, #3182ce)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Contact Me
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 4, color: "rgba(255,255,255,0.8)" }}
              >
                Let’s connect — drop me a message 👇
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              >
                <TextField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{
                    sx: {
                      color: "#bbb",
                      "&.Mui-focused": { color: "#319795", fontWeight: "bold" },
                    },
                  }}
                  InputProps={{
                    sx: {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: 3,
                      color: "white",
                      "&.Mui-focused fieldset": {
                        borderColor: "#319795",
                        boxShadow: "0 0 6px rgba(49,151,149,0.6)",
                      },
                    },
                  }}
                />

                <TextField
                  label="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{
                    sx: {
                      color: "#bbb",
                      "&.Mui-focused": { color: "#3182ce", fontWeight: "bold" },
                    },
                  }}
                  InputProps={{
                    sx: {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: 3,
                      color: "white",
                      "&.Mui-focused fieldset": {
                        borderColor: "#3182ce",
                        boxShadow: "0 0 6px rgba(49,130,206,0.6)",
                      },
                    },
                  }}
                />

                <TextField
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={!!errors.message}
                  helperText={errors.message}
                  multiline
                  rows={5}
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{
                    sx: {
                      color: "#bbb",
                      "&.Mui-focused": { color: "#805AD5", fontWeight: "bold" },
                    },
                  }}
                  InputProps={{
                    sx: {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderRadius: 3,
                      color: "white",
                      "&.Mui-focused fieldset": {
                        borderColor: "#805AD5",
                        boxShadow: "0 0 6px rgba(128,90,213,0.6)",
                      },
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 3,
                    mt: 2,
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    px: 4,
                    py: 1.5,
                    background: "linear-gradient(135deg, #319795, #3182ce)",
                    boxShadow: "0 6px 15px rgba(49,130,206,0.4)",
                    transition: "0.3s",
                    "&:hover": {
                      background: "linear-gradient(135deg, #3182ce, #319795)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Right Side: Lottie Animation */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Lottie
                animationData={contactAnimation}
                loop={true}
                style={{ width: "100%", maxWidth: 400 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          ✅ Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
