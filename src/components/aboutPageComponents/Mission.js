import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

export default function Mission() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const textStyles = {
    color: "#888888",
    mb: '3vh'
  }

  const sectionTitles = {
    color: '#777777',
    mb: '1vh'
  }

  return (
    <Box>
      <Grid container sx={{ backgroundColor: 'primary.dark', px: '15vw' }}>
        <Grid item xs={12} md={12} sx={{ mb: '5vh', mt: isMobile ? '5vh' : '10vh' }}>
          <Typography variant='h3'>
            Who Are We
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='h4' sx={sectionTitles}>
            Mission:
          </Typography>
          <Typography variant='h5' sx={textStyles}>
            At TD Therapy Alliance, our mission is to foster professional growth and development among our therapists in order
            to provide the highest quality services to our patients. We believe that by setting a higher standard in healthcare,
            we can make a positive impact on the lives of those we serve. Our commitment to excellence extends to every aspect
            of our practice. By prioritizing the well-being of our patients, we aim to achieve optimal health
            outcomes and help them live their best lives.
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant='h4' sx={sectionTitles}>
            Vision:
          </Typography>
          <Typography variant='h5' sx={textStyles}>
            Our vision is to transform the industry by providing our team with comprehensive training,
            promoting consistency and excellence in therapy services. By investing in our therapists'
            professional development, we aim to cultivate leading health care providers of the future.
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} sx={{ mb: isMobile ? '3vh' : '10vh' }}>
          <Typography variant='h4' sx={sectionTitles}>
            Values:
          </Typography>
          <Typography variant='h5' sx={textStyles}>
            At TD Therapy Alliance, our core value is to provide exceptional and patient-centered care through a
            commitment to promoting growth and excellence in our therapists. We prioritize consistency, innovation,
            and the highest standards of professional development to ensure transformative outcomes and
            optimal well-being for our patients.
          </Typography>
        </Grid>
      </Grid>
    </Box >
  );
}












// <Grid container sx={{ backgroundColor: 'primary.light', px: '10vw', my: '10vh' }}>
// <Typography variant='h2'>Who We Are</Typography>
// <Grid item xs={12} md={12} >
//   <Typography variant='h2'>Who We Are</Typography>
//   <Typography variant='h3' sx={sectionTitles}>Mission Statement:</Typography>
//   <Typography variant='h5' sx={sectionTitles}>
//     We seek to improve the home health industry by raising the bar...
//     We seek to improve the home health industry by raising the bar...
//     We seek to improve the home health industry by raising the bar...
//     We seek to improve the home health industry by raising the bar...
//     We seek to improve the home health industry by raising the bar...
//   </Typography>
// </Grid>
// </Grid>
