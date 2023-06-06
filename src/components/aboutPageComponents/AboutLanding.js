import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

export default function AboutLanding() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const backgroundPhoto = require('../../pictures/hand.jpeg');
  const background = {
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    minHeight: '50vh',
    background: `url(${backgroundPhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 40%',
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
        objectPosition="50% 40%"
      />
      <Grid container>
        <Grid item xd={12} md={12} sx={{ textAlign: 'center', p: '6vw', alignItems: 'center', zIndex: '3' }} >
          <Typography variant='h1'>About Us</Typography>
          <Typography variant='h5' sx={{ color: '#eeeeee', px: '10vw', mt: '3vh' }}>
            We seek to improve the home health industry by raising the bar for quality care.
            With years of experience in the field, we have identified areas where the industry
            could benefit from better training and higher standards. At TD Therapy Alliance,
            we are committed to making a positive difference in the lives of our patients by
            providing quality services that prioritize their well-being above all else.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}