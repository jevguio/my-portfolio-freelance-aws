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
  useMediaQuery,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const ContactForm = ({ sectionRefs }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const projects = [
    {
      title: "Vendetta (Midterm Project)",
      description: "Action film script set on a school campus, featuring advanced character development and a hidden room element.",
    },
    {
      title: "Portfolio Website",
      description: "Built a freelance portfolio showcasing skills in video editing, website development (Laravel, React.js, Material UI), and AWS for hosting and scalable deployment.",
    },
    {
      title: "Arduino-RFID Attendance System",
      description: "Integrated W5500 Ethernet module with Arduino Uno for real-time RFID data tracking and logging into a Laravel-based system.",
    },
    {
      title: "School Management Database",
      description: "Developed a database system for managing school operations, including student and teacher records, login backlogs, and content uploads.",
    },
  ];

  const achievements = [
    "Programmer of the Year – ITMAWD, April 2020",
    "Best in Research – ITMAWD, 2020",
    "Tagisan ng Talino Codefest Champion (Local Level) – 2020",
    "Tagisan ng Sining Champion (Local Level) – 2020",
    "Best in Mobile Application – 2019",
    "STI National Codefest (2018) – 2nd Place nationally",
    "Successfully completed the Bandit wargame challenges",
    "Implemented complex hardware-software integrations using Arduino, RFID readers, and networking modules",
  ];

  const affiliations = [
    "Google Developer Student Clubs (GDSC) - Leadership roles in programming and creative content",
    "Freelance Developer – Providing website development, video editing services",
  ];
  const Skills = [
    "Adobe Premiere (3 years)",
    "Adobe After Effects (2 years)",
    "React (2 years)",
    "PHP (2 years)",
    "MySQL (2 years)",
    "C# (3 years)",
    "Unity (4 years)",
    "AWS (1 year)",
    "Blender (4 years)",
  ];
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
    <>

      <Typography variant="h4" fontFamily={'Qualy Bold'} textAlign={'center'} component="div" lineHeight="28px" fontWeight="400" sx={{ pt: 4, pb: 0, px: 4 }}>
        Resume
      </Typography>
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
          <Box mt={2}>
            <Typography fontSize="10.5pt" fontWeight="bold">
              Education
            </Typography>
            <Box display="inline-block" color="text.secondary">
              <Typography variant="body2" component="span" className="work_company" fontWeight="bold">
                Bachelor's Degree in BS in Information Technology
              </Typography>
              <Typography variant="body2" component="span" className="inline-block" style={{ paddingLeft: 5, paddingRight: 5 }}>
                Cristal e-College Bohol - Panglao
              </Typography>
              <Typography variant="body2" component="span" className="inline-block">
                June 2019 to May 2024
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" mt={2}>
              Relevant Projects:
            </Typography>

            <ul>
              {projects.map((project, index) => (

                <li key={index}>

                  <Typography variant="body2" fontSize="9pt" mt={1}>
                    <b>{project.title}</b> - {project.description}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography variant="body2" color="text.secondary" mt={2}>
              Achievements:
            </Typography>
            <ul>

              {achievements.map((achievement, index) => (
                <li key={index}>

                  <Typography variant="body2" sx={{
                    p: 0, m: 0, textDecoration: 'dot'
                  }} >
                    {achievement}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography variant="body2" color="text.secondary" mt={2} >
              Affiliations:
            </Typography>
            <ul>

              {affiliations.map((achievement, index) => (
                <li key={index}>

                  <Typography variant="body2" sx={{
                    p: 0, m: 0, textDecoration: 'dot'
                  }} >
                    {achievement}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography variant="body2" color="text.secondary" mt={2} >
              Skills:
            </Typography>
            <ul>

              {Skills.map((achievement, index) => (
                <li key={index}>

                  <Typography variant="body2" sx={{
                    p: 0, m: 0, textDecoration: 'dot'
                  }} >
                    {achievement}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default ContactForm;
