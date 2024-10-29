import { Grid } from "@mui/material"; // Changed to MUI Material
import { Box, Typography } from "@mui/material";
import React from "react";
import s1img from '../Images/webdev.png';
import s2img from '../Images/videdit.png';
import s3img from '../Images/animation.png';
import { styled } from '@mui/system';

const ServiceCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff', // Changed to white for contrast
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
}));

const services = [
  {
    title: 'Web Development',
    description: `I design and develop modern, responsive websites using Laravel and React.js.`,
    icon: s1img,
  },
  {
    title: 'Video Editing',
    description: `I provide high-quality video editing services to make your content shine.`,
    icon: s2img,
  },
  {
    title: 'Blender 3D Animations',
    description: `I provide Blender animation services to make your idea come to life.`,
    icon: s3img,
  },
];

const Services = ({sectionRefs}) => {
  return (
    <Box
    
    ref={sectionRefs.current['Services']}
    sx={{ padding: '50px', backgroundColor: '#f0f0f0' }}>
      <Typography variant="h3" align="center" fontFamily={'Qualy Bold'} sx={{ marginBottom: '30px', fontWeight: 'bold' }}>
        Services
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <ServiceCard>
              <Box 
                component="img" 
                src={service.icon} 
                sx={{ width: '50%', marginBottom: '15px' }} // Adjusted width for better visibility
                alt={service.title} // Added alt attribute for accessibility
              />
              <Typography fontFamily={'Qualy Bold'} variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                {service.title}
              </Typography>
              <Typography variant="body1">{service.description}</Typography>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
