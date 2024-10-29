import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Typography,
  Box,
  Alert
} from '@mui/material';

const ContactForm = ({sectionRefs}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(null); // For submission error handling

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) tempErrors.email = 'Email is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: '1707e228-e807-4fbf-a09b-73483718619b',
            ...formData,
          }),
        });
        
        if (response.ok) {
          setSubmitted(true);
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          setSubmissionError(null); // Clear any previous submission errors
        } else {
          throw new Error('Failed to submit the form');
        }
      } catch (error) {
        setSubmissionError('There was an issue submitting the form. Please try again later.');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Card 
    
    ref={sectionRefs.current['Contact']}
    sx={{ maxWidth: 600, margin: 'auto', my: 5, boxShadow: 3 }}>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Typography variant="h4" fontFamily={'Qualy Bold'} component="div" textAlign={'center'} sx={{m:5}} gutterBottom>
            Contact Me
          </Typography>

          {submitted && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Message sent successfully!
            </Alert>
          )}

          {submissionError && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {submissionError}
            </Alert>
          )}

          <Box display="flex" flexDirection="column" gap={3}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              required
            />
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              required
            />
          </Box>
        </CardContent>

        <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            Send Message
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default ContactForm;
