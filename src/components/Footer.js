import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

export default function Footer() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const linkStyles = {
    display: 'block',
    textAlign: 'center',
    color: '#eeeeee',
    margin: '1vh',
    textDecoration: 'none',
    '&:hover': {
      color: '#f36523',
      scale: '1.10',
      transition: '.5s'
    },
    '&:not(:hover)': {
      transition: '.5s'
    },
    fontSize: isMobile ? '' : '1.25rem'
  };

  const menuTitles = {
    mt: '4vh',
    mb: '2vh',
    textAlign: 'center',
    color: '#FFFFFF',
    textDecoration: 'underline'
  };
  const menuText = {
    textAlign: 'center',
    color: '#eeeeee',
    fontSize: isMobile ? '' : '1.25rem'
  };
  const iconStyles = {
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.3)',
    color: '#eeeeee',
    fontSize: isMobile ? '3rem' : '2rem',
    mr: '1vw',
    borderRadius: '30%',
    '&:hover': {
      color: '#f36523',
      scale: '1.10',
      transition: '.5s'
    },
    '&:not(:hover)': {
      transition: '.5s'
    },
  };

  return (
    <Box>
      <Grid container spacing={1} sx={{ backgroundColor: 'primary.main', px: '5vw' }}>
        <Grid item xs={12} md={3} >
          <Box>
            {/* <img src={logo} alt='logo' style={{ height: '5vh', backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: '50%', }} /> */}
            <Typography variant='h4' sx={menuTitles}>
              TD Therapy Alliance
            </Typography>
          </Box>
          <Typography component={Link} sx={linkStyles} href='https://goo.gl/maps/LVANx7L2f6vnkDf28' target="_blank" rel="noopener noreferrer" >
            22742 Cypresswood Dr. #1174<br />
            Spring, TX, 77373<br />
          </Typography>
          <Typography component={Link} sx={linkStyles} href='mailto: admin@tdtherapyalliance.com' target="_blank" rel="noopener noreferrer" >
            Email: admin@tdtherapyalliance.com
          </Typography>
          <Typography component={Link} sx={linkStyles} href='tel::+7138382256' target="_blank" rel="noopener noreferrer" >
            Tel: (713) 838 2256
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={menuText}>
          <Typography variant='h4' sx={menuTitles}>
            Menu
          </Typography>
          <Typography component={Link} href="/" sx={linkStyles}>Home</Typography>
          <Typography component={Link} href="/About" sx={linkStyles}>About</Typography>
          <Typography component={Link} href="/Contact" sx={linkStyles}>Contact</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h4' sx={menuTitles}>
            Hours
          </Typography>
          <Typography variant='body1' sx={menuText}>
            Monday: 9-5 PM <br />
            Tuesday: 9-5 PM <br />
            Wednesday: 9-5 PM <br />
            Thursday: 9-5 PM <br />
            Friday: 9-5 PM <br />
            Saturday: Closed <br />
            Sunday: Closed <br />
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h4' sx={menuTitles}>
            Social Media
          </Typography>
          <Box sx={menuText}>
            <Link href='https://www.indeed.com/cmp/td-therapy-alliance/about/' target="_blank" rel="noopener noreferrer"><PersonIcon sx={iconStyles} /></Link>
            <Link href='https://www.twitter.com/tdtherapyally/' target="_blank" rel="noopener noreferrer"><TwitterIcon sx={iconStyles} /></Link>
            <Link href='https://www.linkedin.com/in/tdtherapyalliance/' target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={iconStyles} /></Link>
            <Link href='https://www.instagram.com/tdtherapyalliance/' target="_blank" rel="noopener noreferrer"><InstagramIcon sx={iconStyles} /></Link>
          </Box>
          {/* <Typography variant='h4' sx={menuTitles}>
            Some Useful Information
          </Typography> */}
          <Box sx={{ mb: '5vh', textAlign: 'center', }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.7561165607276!2d-95.34515309999999!3d30.043853900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b4d141e1f53f%3A0xee26d6878410a62c!2s22742%20Cypresswood%20Dr%20%231174%2C%20Spring%2C%20TX%2077373!5e0!3m2!1sen!2sus!4v1684249295022!5m2!1sen!2sus"
              width='80%'
              height="100%"
              title='Google Maps Location'
              allowFullScreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: '2vh' }} />
            {/* <Typography variant='body1' sx={{ color: '#eeeeee' }}>blahblah?</Typography>
            <Typography variant='body1' sx={{ color: '#eeeeee' }}>blahblahblahblahblahblahblah</Typography>
            <Typography variant='body1' sx={{ color: '#eeeeee' }}>blahblahblahblahblah?</Typography>
            <Typography variant='body1' sx={{ color: '#eeeeee' }}>blahblahblahblahblahblahblahblahblahblah</Typography> */}
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ backgroundColor: '#008e82', minHeight: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', flexWrap: 'wrap' }}>
        <Typography variant='body1' sx={{ color: '#eeeeee', paddingInline: '2vw' }}>
          ©2023 TD Therapy Alliance. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  )
}
