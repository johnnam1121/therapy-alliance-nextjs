import { Box, Grid, Typography } from '@mui/material';
import backgroundPhoto from "../../pictures/physicalTherapy.jpeg";

export default function AboutLanding() {
  const background = {
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    minHeight: '50vh',
    background: `url(${backgroundPhoto.src})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 40%',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    zIndex: 0
  };

  return (
    <Box sx={background}>
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