import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Typography,
  Box,
  Alert,
  useMediaQuery
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
    
    ref={sectionRefs.current['Resume/CV']}
    sx={{ maxWidth: 600, margin: 'auto', my: 5, boxShadow: 3 }}>
      <Box p={4} bgcolor="white" fontSize="16px"
      ref={sectionRefs.current['Resume/CV']}>
      {/* Basic Info */}
      <Box mt={-2}>
        <Typography variant="h4" component="h1" fontSize="17pt" lineHeight="28px" fontWeight="400" padding={0}>
          John Vincent Guioguio
        </Typography>
        <Typography variant="h6" component="h2" fontSize="9pt" color="text.primary" fontWeight="bold">
          Full-Stack Developer | Web Development, Video Editing, 3D Blender, & AWS
        </Typography>
        <Box display="block" mb={2}>
          <Typography variant="body2" component="div" display="inline" className="locality">
            Panglao
          </Typography>
        </Box>
        <Typography variant="body2" mt={2} mb={2}>
          An innovative and dedicated IT graduate specializing in web development and video editing. With expertise in technologies such as Laravel, React.js, and Material UI, I bring creative solutions to life through freelance work. I am committed to delivering high-quality projects that meet client needs. My skills in both software development and multimedia production enable me to offer a versatile service range to clients across different industries.
        </Typography>
      </Box>

      {/* Personal Details */}
      <Box mt={3} borderBottom="1px solid #ccc" pb={1} mb={2}>
        <Typography variant="h6" fontSize="12pt">
          Personal Details
        </Typography>
      </Box>
      <Box mt={1.5}>
        <Typography variant="body2">
          <strong>Citizenship:</strong> Filipino
        </Typography>
      </Box>

      {/* Work Experience */}
      <Box mt={3} borderBottom="1px solid #ccc" pb={1} mb={2}>
        <Typography variant="h6" fontSize="12pt">
          Work Experience
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography fontSize="10.5pt" fontWeight="bold">
        Freelance Fullstack Developer, Video Editor, 3D Blender, & AWS
        </Typography>
        <Box display="inline-block" color="text.secondary">
          <Typography variant="body2" component="span" className="work_company" fontWeight="bold">
            Self Employed
          </Typography>
          <Typography variant="body2" component="span" className="inline-block" style={{ paddingLeft: 5, paddingRight: 5 }}>
            -
          </Typography>
          <Typography variant="body2" component="span" className="inline-block">
            Panglao
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" mt={1}>
          June 2021 to Present
        </Typography>
        <Typography variant="body2" fontSize="9pt" mt={1}>
          As a Freelance Fullstack Developer, Video Editor, and 3D Blender, I deliver high-quality digital services to clients, including:
          <br /> • Developing responsive websites using Laravel, React.js, AWS, and Material UI.
          <br /> • Editing and producing professional videos using Adobe Premiere Pro.
          <br /> • Offering a client-centric approach, ensuring projects meet budget and time requirements.
        </Typography>
      </Box>
    </Box>
    </Card>
  );
};

export default ContactForm;
