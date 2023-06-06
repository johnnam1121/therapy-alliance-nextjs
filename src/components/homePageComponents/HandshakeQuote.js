import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import handshake from '../../pictures/handshake.jpg';
import Image from 'next/image';

export default function HandshakeQuote() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const imageStyles = {
    height: isMobile ? '100%' : '80%',
    width: isMobile ? '100%' : '80%',
    borderRadius: '20%',
    overflow: 'hidden',
  }

  return (
    <Box sx={{ backgroundColor: 'primary.light', px: '10vw' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', mt: isMobile ? '3vh' : '0', alignItems: 'center' }}>
          <Image src={handshake} alt='handshake photo' style={imageStyles} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ mb: isMobile ? '5vh' : '0', p: 3, mt: '3vh' }}>
          <Typography variant='h3' sx={{ mt: isMobile ? '0' : '5vh', mb: '3vh', }}>
            We will work for you!
          </Typography>
          <Typography variant='h5' sx={{ color: '#777777' }}>
            We (David and Tony) are graduates from the same institution and created TD Therapy Alliance to transform
            the home health industry. We aim to improve healthcare standards and establish a stronger therapy network.
            Upon entering the home health setting following our education, we initially encountered difficulties due
            to our lack of familiarity and unclear expectations.
          </Typography>
          <Typography variant='h5' sx={{ color: '#777777', my: '3vh' }}>
            However, through our experience in the field, we have
            identified areas where the standard of care can be improved. Join us in our mission to drive positive change
            and contribute directly to reshaping the future of healthcare. Together, let's make a significant impact with
            TD Therapy Alliance.
          </Typography>
          <Typography sx={{ fontFamily: "Lucida Calligraphy", mt: '7vh', fontSize: '1.5rem' }}>
            "Beyond Recovery, Towards Optimal Health: Our Vision For Therapy"
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
// position: isMobile ? '' : 'absolute',
// <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
// <Typography style={{ fontFamily: "Lucida Calligraphy", }}>
//   "Beyond Recovery, Towards Optimal Health: Our Vision For Therapy"
// </Typography>
// </Box>
