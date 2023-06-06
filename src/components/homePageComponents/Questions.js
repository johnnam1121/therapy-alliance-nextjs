import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

export default function Questions() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const stockColored = require('../../pictures/stockColored.jpeg');
  const containerStyle = {
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    minHeight: '30vh',
    background: `url(${stockColored})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundAttachment: 'fixed',
    alignItems: 'center',
    display: 'flex',
    
  };

  return (
    <Box>
      <Box sx={{ ...containerStyle }}>
        <Image
          src={stockColored.default}
          alt="Background Photo"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 20%"
        />
        <Grid container spacing={2}>
          <Grid item xs={1} md={1} />
          <Grid item xs={10} md={10} sx={{ mt: '4vh' }}>
            <Typography variant='h1' sx={{ textAlign: 'center', color: '#ffffff', fontSize: '3.25rem', zIndex: '5', position: 'relative' }}>
              Questions? <a href="https://tdtherapyalliance.com/#/Contact" style={{ color: '#000000' }}>Contact Us</a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
