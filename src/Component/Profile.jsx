import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';
import { Avatar, Button, Typography, useMediaQuery } from '@mui/material';
import profile from '../Images/profile.jpg';
import bg1 from '../Images/background1.png';

export default function BasicGrid({sectionRefs}) {
    
    const matches = useMediaQuery('(max-width:600px)');
    

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

            ref={sectionRefs.current['Home']}
            sx={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${bg1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                p: 5,
            }}>
            <Grid2 container spacing={0}>
                <Grid2 size={matches?12:5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                    <Avatar src={profile} sx={{ width: "50%", height: 'auto', aspectRatio: '1/1',m:'auto' }}></Avatar>
                </Grid2>
                <Grid2 size={matches?12:7}>
                    <Typography variant='h5' align='justify' fontFamily={'Qualy Bold'} textAlign={matches?'center':'justify'} color="white" sx={{ p: 5 }}>
                        "Hi, I’m John Vincent S. Guioguio, a freelance web developer, video editor, and animator. I bring ideas to life through web technologies like Laravel and React.js, and I create stunning visuals with Blender. Additionally, I utilize AWS for cloud computing solutions and GitHub for version control and collaboration, enhancing the performance and scalability of my projects."
                    
                        <Button variant='text' sx={{fontFamily:'Qualy Bold'}} onClick={()=>{SetFocus('About')}}>More</Button>
                        </Typography>
                </Grid2>
            </Grid2>
        </Box>
    );
}
