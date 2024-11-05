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
  Divider
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import CustomizedRating from '../Component/StyleRating';

const ContactForm = ({ sectionRefs }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const projects = [
    {
      title: "Pertinacity - Hypbest (STI Bohol) - 2020",
      description: "Served as cinematographer and editor for a school competition video. Responsibilities included planning shots, filming, and editing, resulting in a polished final video that effectively conveyed the theme and engaged the audience.",
    },
    {
      title: "Portfolio Website",
      description: "Built a freelance portfolio showcasing skills in video editing, website development (Laravel, React.js, Material UI), and AWS for hosting and scalable deployment.",
    },
    {
      title: "Facebook Clone - School Work Challenge",
      description: "Built a replica of Facebook for a school project, with a focus on layout accuracy and UI design using React.js and Material UI. Responsibilities included implementing responsive design, functional components",
    },
    {
      title: "Buwan ng Wika Event",
      description: "This project highlights high realism in weapon design, showcasing detailed craftsmanship to reflect authentic cultural artifacts. Additionally, I was responsible for editing the teaser video for Buwan ng Wika at my school, where I was hired as a freelance video editor for the event.",
    },
    {
      title: "Purok Management System - (PMS)",
      description: "Freelance Windows application in C# for community management, with admin and staff controls for secure member registration, event management, and attendance tracking with penalties.",
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
    <>
    <Typography fontWeight={'bold'}>Google Developer Student Clubs - Cristal-e College (GDSC-CeC)</Typography>
    <Typography> - 1st Senior Programmer (2022-2023)</Typography> 
    <Typography> - Creative Leader (2023-2024)</Typography>
    </>, 
    <>
    <Typography fontWeight={'bold'}>Freelance Developer </Typography>
    <Typography> – website development, </Typography> 
    <Typography> - video editing</Typography> 
    </>,
  ];
  const Skills = [
    {
      label: "Adobe Premiere (3 years)",
      rate: 4.4
    },
    {
      label: "Adobe After Effects (2 years)",
      rate: 4.1
    },
    {
      label: "React (2 years)",
      rate: 4.8
    },
    {
      label: "PHP (2 years)",
      rate: 4.2

    },
    {
      label: "MySQL (2 years)",
      rate: 4.0
    },
    {
      label: "C# (3 years)",
      rate: 4.6
    },
    {
      label: "Unity (4 years)",
      rate: 4.8
    },
    {
      label: "AWS (1 year)",
      rate: 3.93
    },
    {
      label: "Blender (4 years)",
      rate: 4.4
    },
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

      {/* <Typography variant="h4" fontFamily={'Qualy Bold'} textAlign={'center'} component="div" lineHeight="28px" fontWeight="400" sx={{ pt: 4, pb: 0, px: 4 }}>
        Resume
      </Typography> */}
      <Card

        ref={sectionRefs.current['Resume/CV']}
        sx={{ maxWidth: 650, mx: 'auto', my: 0, boxShadow: 'none' }}>
        <Box px={6} py={2} bgcolor="white" fontSize="16px"
          ref={sectionRefs.current['Resume/CV']}>
          {/* Basic Info */}
          <Box >
            {/* <Typography variant="h4" component="h1" fontSize="17pt" lineHeight="28px" fontWeight="400" padding={0}>
              John Vincent Guioguio
            </Typography> */}
            <Typography variant="h6" component="h2" fontSize="12pt" color="text.primary" fontWeight="bold">
              Full-Stack Developer | Web Development, Video Editing, 3D Blender, & AWS
            </Typography>
            <Box display="block" mb={2}>
              <Typography variant="body2" component="div" display="inline" className="locality">
                Panglao, Bohol
              </Typography>
            </Box>
            <Typography variant="body2" mt={2} mb={2} fontSize={'12pt'} textAlign={"justify"}>
              An innovative and dedicated IT graduate specializing in web development and video editing. With expertise in technologies such as Laravel, React.js, and Material UI, I bring creative solutions to life through freelance work. I am committed to delivering high-quality projects that meet client needs. My skills in both software development and multimedia production enable me to offer a versatile service range to clients across different industries.
            </Typography>
          </Box>

          {/* Personal Details */}
          <Box mt={3} borderBottom="1px solid #ccc" pb={1} mb={2}>
            <Typography variant="h6" fontSize="12pt" color="text.secondary" fontWeight={'bold'} sx={{
              display: 'flex', // Use flex to align icon and text properly
              alignItems: 'center', // Center align items vertically 
              color: '#011222',
            }}>
              <PersonIcon sx={{ pr: 2, py: 0, m: 0, }}></PersonIcon>
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
            <Typography variant="h6" fontSize="12pt" color="text.secondary" fontWeight={'bold'} sx={{
              display: 'flex', // Use flex to align icon and text properly
              alignItems: 'center', // Center align items vertically 
              color: '#011222',
            }}>
              <WorkIcon sx={{ pr: 2, py: 0, m: 0, }}></WorkIcon>
              Work Experience
            </Typography>
          </Box>
          <Box mt={2}>
            <Typography fontSize={'medium'} fontWeight="bolder">
              Freelance Fullstack Developer, Video Editor, 3D Blender, & AWS
            </Typography>
            <Box display="inline-block" >
              <Typography variant="body2" component="span" className="work_company" fontWeight="bold">
                Self Employed -
                Panglao, Bohol
              </Typography>
            </Box>
            <Typography variant="body2" mt={1} sx={{
              display: 'flex', // Use flex to align icon and text properly
              alignItems: 'center', // Center align items vertically 
              fontWeight: 'bold',
              color: '#011222',
            }}>
              <CalendarMonthIcon sx={{ pr: 1, pl: 1, py: 0, m: 0, }}></CalendarMonthIcon>
              June 2021 to Present
            </Typography>
            <Typography variant="body2" fontSize="12pt" mt={1} >
              As a Freelance Fullstack Developer, Video Editor, and 3D Blender, I deliver high-quality digital services to clients, including:
              <br /> • Developing responsive websites using Laravel, React.js, AWS, and Material UI.
              <br /> • Editing and producing professional videos using Adobe Premiere Pro.
              <br /> • Offering a client-centric approach, ensuring projects meet budget and time requirements.
            </Typography>
          </Box>
          <Box mt={4}>
            <Typography fontSize="12pt" fontWeight="bold" sx={{
              display: 'flex', // Use flex to align icon and text properly
              color: '#011222',
              alignItems: 'center', // Center align items vertically 
            }}>
              <SchoolIcon sx={{ pr: 2, py: 0, m: 0, }}></SchoolIcon>
              Education
            </Typography>
            <Divider sx={{
              my: 2
            }}></Divider>
            <Box display="block" >
              <Typography variant="body2" component="div" className="work_company" fontSize={'medium'} fontWeight="bolder">
                Bachelor's Degree in BS in Information Technology
              </Typography>
              <Typography variant="body2" component="div" fontWeight={'bold'} >
                Cristal e-College Bohol - Tawala, Panglao, Bohol
              </Typography>
              <Typography variant="body2" component="div" sx={{
                display: 'flex', // Use flex to align icon and text properly
                color: '#011222',
                alignItems: 'center', // Center align items vertically 
                fontWeight: 'bold', 
              }}>
                <CalendarMonthIcon sx={{ pr: 1, pl: 1, py: 0, m: 0, }}></CalendarMonthIcon>
                June 2019 to May 2024
              </Typography>
            </Box>
            <Typography variant="body2" mt={2} fontWeight="bold">
              Relevant Projects:
            </Typography>

            <ul>
              {projects.map((project, index) => (

                <li key={index}>

                  <Typography variant="body2" fontSize="12pt" mt={1}>
                    <b>{project.title}</b> - {project.description}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography variant="body2" mt={2} fontWeight="bold" sx={{
              display: 'flex', // Use flex to align icon and text properly
              alignItems: 'center', // Center align items vertically 
            }}>
              Achievements:
            </Typography>
            <ul>

              {achievements.map((achievement, index) => (
                <li key={index}>

                  <Typography variant="body2" fontSize={'12pt'} sx={{
                    p: 0, m: 0, textDecoration: 'dot'
                  }} >
                    {achievement}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography variant="body2" mt={2} fontWeight="bold">
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
            <Typography variant="body2" mt={2} fontWeight="bold">
              Skills:
            </Typography>
            <Box>

              {Skills.map((val, index) => (
                <CustomizedRating
                  key={index}
                  icon={<Box sx={{ border: 'solid #011222 1px', backgroundColor: '#011222', width: '4em', height: '.5em', m: 0.1, display: 'block' }}></Box>}
                  emptyIcon={<Box sx={{ border: 'solid #011222 1px', width: '4em', height: '.5em', display: 'block', m: 0.1 }}></Box>}
                  label={val.label}
                  value={val.rate}
                  max={5}
                  precision={0.01}
                />

              ))}
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default ContactForm;
