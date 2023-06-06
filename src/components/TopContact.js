import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box, CssBaseline, Grid, IconButton, Typography, useMediaQuery, SvgIcon } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

export default function TopContact() {

  const isMobile = useMediaQuery('(max-width:768px)');
  const iconStyles = {
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.3)',
    color: '#eeeeee',
    fontSize: '1.75rem',
    ml: '1vw',
    borderRadius: '30%'
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgColor: 'primary.main',
        minHeight: '6vh',
        px: isMobile ? '1vw' : '10vw',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <CssBaseline />
      <Grid container alignItems="center" justifyContent="flex-end">
        <Grid item xs={6} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          <IconButton edge="start" color='inherit' aria-label="menu" component={Link} href="https://www.indeed.com/cmp/td-therapy-alliance/about/" target="_blank" rel="noopener noreferrer" >
            <PersonIcon sx={iconStyles} />
          </IconButton>
          <IconButton edge="start" color='inherit' aria-label="menu" component={Link} href="https://www.twitter.com/tdtherapyally/" target="_blank" rel="noopener noreferrer" >
            <TwitterIcon sx={iconStyles} />
          </IconButton>
          <IconButton edge="start" color='inherit' aria-label="menu" component={Link} href="https://www.linkedin.com/in/tdtherapyalliance/" target="_blank" rel="noopener noreferrer" >
            <LinkedInIcon sx={iconStyles} />
          </IconButton>
          <IconButton edge="start" color='inherit' aria-label="menu" component={Link} href="https://www.instagram.com/tdtherapyalliance/" target="_blank" rel="noopener noreferrer" >
            <InstagramIcon sx={iconStyles} />
          </IconButton>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <IconButton edge="start" color='inherit' aria-label="menu" component={Link} href="mailto: admin@tdtherapyalliance.com">
              <EmailIcon sx={iconStyles} />
            </IconButton>
            <Box sx={{ mr: '1vw', display: { xs: "none", sm: "block" } }}>
              <Typography variant='body1' sx={{ color: '#eeeeee', textDecoration: 'none' }} component={Link} href='mailto: admin@tdtherapyalliance.com' target="_blank" rel="noopener noreferrer" >
                admin@tdtherapyalliance.com
              </Typography>
            </Box>
            <IconButton edge="start" color='inherit' aria-label="menu" component={Link} href="tel::+7138382256">
              <LocalPhoneIcon sx={iconStyles} />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography variant='body1' sx={{ color: '#eeeeee', textDecoration: 'none' }} component={Link} href='tel::+7138382256' target="_blank" rel="noopener noreferrer" >
                (713) 838-2256
              </Typography>
            </Box>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
