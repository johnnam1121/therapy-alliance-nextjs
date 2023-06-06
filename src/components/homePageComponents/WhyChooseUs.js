import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ReasonOne from '../../pictures/ReasonOne.png';
import ReasonThree from '../../pictures/ReasonThree.png';
import ReasonTwo from '../../pictures/ReasonTwo.png';
import backgroundPhoto from '../../pictures/therapyStock.jpeg';

export default function WhyChooseUs() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const whyChooseUs = { textAlign: 'center', minHeight: '45vh', alignItems: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.15)', };
  const textStyles = { textAlign: 'center', fontWeight: 'bold', mb: '5vh', px: isMobile ? '8vw' : '3vw', zIndex: '10', position: 'relative' }
  const imgRow = { textAlign: 'center', px: '7vw', py: '5vh', }
  const imgStyles = {
    height: isMobile ? '20vh' : '15vh',
    width: isMobile ? '60vw' : '10vw',
    marginBottom: '3vh',
    borderRadius: '50%',
    marginTop: isMobile ? '5vh' : 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  const buttonStyles = {
    color: '#ffffff',
    backgroundColor: '#00a99d',
    '&:hover': { backgroundColor: '#f36523' },
    fontSize: isMobile ? '4vw' : '1.25vw',
    mb: '5vh',
  }

  const background = {
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    background: `url(${backgroundPhoto.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    zIndex: 0
  };

  return (
    <Box sx={{ backgroundColor: 'primary.light' }}>
      <Box sx={background}>
        <Grid container sx={whyChooseUs} spacing={2}>
          <Grid item xs={false} sm={3} />
          <Grid item xs={12} sm={6}>
            <Typography variant='h1' sx={textStyles}>
              Why Choose Us
            </Typography>
            <Typography variant='h5' sx={textStyles}>
              <span style={{ color: '#3dd3c3', fontSize: isMobile ? '' : '1.25rem' }}>
                Here at TD Therapy Alliance, we take pride in developing our staff in order to
                provide the best quality services for our patients
              </span>
            </Typography>
          </Grid>
          <Grid item xs={false} sm={3} />
        </Grid>
      </Box>
      <Box>
        <Grid container sx={imgRow} spacing={5}>
          <Grid item xs={12} md={4}>
            <Image src={ReasonOne} alt='Developed Therapist' style={imgStyles} />
            <Typography variant='h4' sx={{ mb: '2vh' }}>
              Developed Therapist
            </Typography>
            <Typography variant='body 1'>
              Our highly trained and qualified therapists are specialized in numerous fields to meet your unique needs.
              We pride ourselves on being able to deliver comprehensive medical knowledge in a diverse selection of languages.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image src={ReasonTwo} alt='Training Program' style={imgStyles} />
            <Typography variant='h4' sx={{ mb: '2vh' }}>
              Dedicated Staff
            </Typography>
            <Typography variant='body 1'>
              Our reliable team members are committed to customer responsiveness and submit notes in a well timed manner.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image src={ReasonThree} alt='Developed Therapist' style={imgStyles} />
            <Typography variant='h4' sx={{ mb: '2vh' }}>
              Training Program
            </Typography>
            <Typography variant='body 1'>
              Our training programs are implemented in order to provide the necessary resources for our therapists to
              strive in their profession. We provide year-round support to ensure our therapists are constantly improving.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', }}><Button sx={buttonStyles} component={Link} href="/About">See More</Button></Box>
    </Box>
  );
}