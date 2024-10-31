import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import bg1 from '../Images/background3.png';
const App = ({ sectionRefs }) => {

    const pages = ['Home', 'Portfolio', 'Services', 'About', 'Contact','Resume/CV'];
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

            sx={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${bg1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                p: 5,
            }}>

            <Box sx={{ flexGrow: 1, display: 'flex', m: 'auto', justifyContent: 'center' }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        variant='text'
                        onClick={() => SetFocus(page)}
                        sx={{
                            my: 2,
                            color: 'white',
                            display: 'block',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                textDecoration: 'underline',
                                fontWeight: 'bold'
                            }


                        }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
            <Box>

                <Typography   color='white' textAlign={'center'}>
                    Copyright © 2024 John Vincent S. Guioguio. All Rights Reserved.
                </Typography>
                <Typography  color='white'  textAlign={'center'}>
                    Certain media content © respective owners. Used with permission.
                </Typography>
            </Box>
        </Box>
    );
};

export default App;