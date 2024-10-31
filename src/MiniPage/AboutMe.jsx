import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, IconButton, Tooltip, Typography, useMediaQuery } from '@mui/material';
import profile from '../Images/profile.jpg';
import bg1 from '../Images/background4.png';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import CustomizedRating from '../Component/StyleRating';
import SquareIcon from '@mui/icons-material/Square';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
export default function AboutMe({ sectionRefs }) {

  const socialMed = [{
    toolTip: 'GitHub',
    icon: <GitHubIcon ></GitHubIcon>,
    url: 'https://github.com/jevguio'
  }, {
    toolTip: 'Instagram',
    icon: <InstagramIcon></InstagramIcon>,
    url: 'https://instagram.com/jevguio'

  }, {
    toolTip: 'Facebook',
    icon: <FacebookIcon></FacebookIcon>,
    url: 'https://www.facebook.com/g.u.i.o.j.e.v'
  }, {
    toolTip: 'LinkedIn',
    icon: <LinkedInIcon></LinkedInIcon>,
    url: 'https://www.linkedin.com/in/john-vincent-guioguio-21a5201b6'
  },
  ];
  const matches = useMediaQuery('(max-width:900px)');

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
      rate: 4.1
    },
    {
      label: "Blender (4 years)",
      rate: 4.4
    },
  ];

  const handleOpenUrl = (url) => {
    window.open(url, '_blank');
  };

  const SetFocus = (target) => {
    if (target === "posts") {
      // Add any specific logic for "posts" here if necessary
    }

    if (sectionRefs.current[target]) {
      const element = sectionRefs.current[target].current;

      // Get the AppBar (header) and calculate its offset height
      const header = document.querySelector('.MuiAppBar-root'); // Specific class for MUI AppBar
      const headerOffset = header ? header.offsetHeight : 0;

      // Calculate the top position of the element relative to the document
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      // Scroll to the position adjusted by the AppBar height
      window.scrollTo({
        top: elementPosition - headerOffset, // Adjust for the header height
        behavior: 'smooth' // Smooth scrolling
      });
    }
  };

  return (
    <Box

      ref={sectionRefs.current['About']}
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.9)),url(${bg1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        p: matches ? 5 : 10,
      }}>
      <Grid2 container spacing={0}>
        <Grid2 size={matches ? 12 : 5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>

          <Card sx={{ width: '80%', m: 'auto' }}>
            <CardMedia
              component="img"
              width={'100%'}
              sx={{ height: "40vh", aspectRatio: '7/8' }}
              image={profile}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" textAlign={'center'}>
                John Vincent Guioguio
              </Typography>
              <Typography size={'small'} textAlign={'center'} fontWeight={'bold'} sx={{ color: 'text.secondary', width: '80%', m: 'auto' }}>
                Creator - Founder - Owner - Jev Guio
              </Typography>
              <Box sx={{
                m: 'auto',
                width: '80%'
              }}>
              </Box>
            </CardContent>
            <CardActions>

              <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', m: 'auto' }}>
                {socialMed.map((val) => (
                  <Tooltip key={val.toolTip} title={val.toolTip}>
                    <IconButton sx={{ color: 'gray' }} onClick={(e) => handleOpenUrl(val.url)}>
                      {val.icon}
                    </IconButton>
                  </Tooltip>
                ))}


              </Box>
            </CardActions>
          </Card>
        </Grid2>
        <Grid2 size={matches ? 12 : 7}>
          <Typography variant='h4' fontFamily={'Qualy Bold'} color='white' sx={{ textAlign: 'center', pt: 5, width: '90%', m: 'auto' }}>About Me (Freelance Journey)</Typography>
          <Typography variant='h6' color='white' sx={{ textAlign: 'justify', pt: 5, width: '90%', m: 'auto' }}>


            Hi! I’m John Vincent S. Guioguio, a passionate and dedicated freelancer with a strong background in web development, video editing, and animation. I have honed my skills by working on various projects, from creating responsive websites to producing captivating animations. I specialize in building professional and creative solutions that bring my clients' ideas to life.

            My expertise includes developing dynamic web applications using Laravel and React.js, where I focus on delivering user-friendly interfaces and robust backend functionality. I also leverage AWS for deploying applications and enhancing scalability, ensuring that my projects can grow with my clients' needs. Additionally, I have a solid grasp of Material UI, which allows me to enhance the user experience with aesthetically pleasing designs.

            In the realm of multimedia, I create visually engaging animations using Blender and edit high-quality videos with Adobe Premiere Pro and Adobe After Effects. My creative process is fueled by a deep understanding of storytelling, allowing me to effectively communicate messages through compelling visuals and narratives.

            I strive to deliver work that exceeds expectations, combining creativity with technical expertise to produce high-quality results. Each project I take on is an opportunity for me to help businesses and individuals reach their goals through innovative solutions and effective storytelling. You can view my code and projects on my GitHub and I am always eager to collaborate and explore new ideas, ensuring that my clients receive personalized service tailored to their unique needs.
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
}
