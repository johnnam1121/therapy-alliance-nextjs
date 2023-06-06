import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Grid, TextField, Typography, useMediaQuery } from '@mui/material';
import axios from "axios";
import React, { useState } from "react";

export default function ContactForm() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const buttonStyles = {
    color: '#ffffff',
    backgroundColor: '#00a99d',
    '&:hover': { backgroundColor: '#f36523' },
    fontSize: isMobile ? '4vw' : '1vw',
    borderRadius: '10%',
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name && email && message) {
      try {
        await axios.post("https://formspree.io/f/meqwdnng", {
          name,
          email,
          message
        });
        setSubmissionStatus("success");
      } catch (error) {
        setSubmissionStatus("error");
      }
    }
  };

  const renderSubmissionStatus = () => {
    if (submissionStatus === "success") {
      return (
        <Grid container spacing={2} sx={{ backgroundColor: 'primary.light', px: '10vw', py: '5vh' }}>
          <Grid item xs={12} md={12}>
            <Typography variant="h6" sx={{ color: "#777777" }}>
              Thank you for your message! We will get back to you soon.
            </Typography>
          </Grid>
        </Grid>
      );
    } else if (submissionStatus === "error") {
      return (
        <Grid container spacing={2} sx={{ backgroundColor: 'primary.light', px: '10vw', py: '5vh' }}>
          <Grid item xs={12} md={12}>
            <Typography variant="h6">
              An unexpected error has occurred when sending the message. Please try again at another time or email us directly at admin@tdtherapyalliance.com.
            </Typography>
          </Grid>
        </Grid>
      );
    }
    return null;
  };

  return (
    <Grid container spacing={2} sx={{ backgroundColor: 'primary.light', px: '10vw', py: '5vh', }}>
      <Grid item xs={12} md={12}>
        <Typography variant="h3">
          Contact Us
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        {submissionStatus !== "success" &&
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              multiline
              rows={4}
              fullWidth
              required
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<SendIcon />}
              style={buttonStyles}>
              Send
            </Button>
          </form>
        }
        {renderSubmissionStatus()}
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ px: isMobile ? '0' : '3vw' }}>
          <Typography variant="h4" sx={{ mb: '3vh', mt: isMobile ? '3vh' : '0' }}>
            Job Seekers
          </Typography>
          <Typography variant="h5" sx={{ color: '#555555', mb: '5vh', fontSize: isMobile ? '' : '1.25rem' }}>
            Call (713) 838-2256 to have a direct conversation with a recruiter
            regarding career opportunities or complete our Contact Form.
          </Typography>
          <Typography variant="h4" sx={{ mb: '3vh' }}>
            Request Staffing
          </Typography>
          <Typography variant="h5" sx={{ color: '#555555', mb: '5vh', fontSize: isMobile ? '' : '1.25rem' }}>
            Please Call (713) 838-2256 in order to find out how TD Therapy Alliance
            can meet your staffing needs or complete our Contact Form.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
