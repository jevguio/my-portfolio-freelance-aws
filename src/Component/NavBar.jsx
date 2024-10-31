import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem'; 
import logo from '../Images/logo1.png'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import { Avatar, useMediaQuery } from '@mui/material';
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
function ResponsiveAppBar({ sectionRefs,pages }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  

  const menuRef = React.useRef(null);

  const icon = document.getElementById('icon');
  icon.href=logo;
  const title = document.getElementById('title');
  title.innerText='Jev Guio - Portfolio';
  // Create refs for each section
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleCloseNavMenu();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuRef]);

  

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
  const [showAppBar, setShowAppBar] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowAppBar(false); // Hide AppBar on scroll down
    } else {
      setShowAppBar(true);  // Show AppBar on scroll up
    }
    setLastScrollY(currentScrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const matches = useMediaQuery('(max-width:600px)'); 
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#011222' , transform: showAppBar ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.3s ease-in-out'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar alt='Jev Guio' sizes='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, width: 60, height: 50 }} src={logo}></Avatar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Qualy Bold',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Jev Guio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              onClose={handleCloseNavMenu}
              ref={menuRef}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => SetFocus(page)}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar alt='Jev Guio' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} src={logo} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Qualy Bold',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Jev Guio
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                variant='text'
                onClick={() => SetFocus(page)}
                sx={{ my: 2,
                     color: 'white',
                    display: 'block', 
                    textTransform: 'none',
                    '&:hover':{
                        backgroundColor:'transparent',
                        textDecoration:'underline',
                        fontWeight:'bold'
                    }
                    

                 }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {!matches&& socialMed.map((val) => (
              <Tooltip key={val.toolTip} title={val.toolTip}>
                <IconButton sx={{ color: 'white' }} onClick={(e) => handleOpenUrl(val.url)}>
                  {val.icon}
                </IconButton>
              </Tooltip>
            ))}


          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
