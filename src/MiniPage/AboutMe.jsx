import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Tooltip, Typography, useMediaQuery } from '@mui/material';
import profile from '../Images/profile.jpg';
import bg1 from '../Images/background4.png';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
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
          <Grid2 size={matches ? 12 : 5} sx={{display: 'flex', alignItems: 'center', justifyContent: 'right' }}>

            <Card  sx={{  width:'80%',m:'auto'}}> 
                <CardMedia
                  component="img"
                  width={'100%'} 
                  sx={{height:"40vh",aspectRatio:'7/8'}}
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
                </CardContent> 
              <CardActions>

                <Box sx={{ display: 'flex', alignContent:'center',justifyContent:'center', m:'auto'}}>
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
            <Typography variant='h6' color='white' sx={{ textAlign: 'justify', pt: 5, width: '90%', m: 'auto'  }}>


              Hi! I’m John Vincent S. Guioguio, a passionate and dedicated freelancer with a strong background in web development,
              video editing, and animation.I have honed my skills by working on various projects, from creating responsive websites
              to producing captivating animations.
              I specialize in building professional and creative solutions that bring my clients' ideas to life. Whether it’s developing
              dynamic web applications using Laravel and React.js, or creating visually engaging animations with Blender,
              I strive to deliver work that exceeds expectations.

              I’m all about combining creativity with technical expertise to produce high-quality results. Each project I take on
              is an opportunity for me to help businesses and individuals reach their goals through innovative solutions and effective storytelling.
            </Typography>
          </Grid2>
        </Grid2>
    </Box>
  );
}
