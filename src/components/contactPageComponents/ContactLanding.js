import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

export default function ContactLanding() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const backgroundPhoto = require('../../pictures/Contact.jpeg');
  const background = {
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    minHeight: '30vh',
    background: `url(${backgroundPhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    zIndex: 0
  };

  return (
    <Box sx={background}>
      <Image
        src={backgroundPhoto.default}
        alt="Background Photo"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <Grid container>
        <Grid item xd={12} md={12} sx={{ textAlign: 'center', p: '6vw', alignItems: 'center', zIndex: '3' }} >
          <Typography variant='h1'>Contact Us</Typography>
          <Typography variant='h5' sx={{ color: '#eeeeee', px: '10vw', mt: '3vh' }}>
            For any further questions please feel free to reach out to us below.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}