import { Box, Grid, Typography } from '@mui/material';
import stockColored from '../../pictures/stockColored.jpeg';
import Link from 'next/link';

export default function Questions() {
  const containerStyle = {
    position: 'relative',
    padding: 0,
    overflow: 'hidden',
    minHeight: '30vh',
    background: `url(${stockColored.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundAttachment: 'fixed',
    alignItems: 'center',
    display: 'flex',
    zIndex: '0'
  };

  return (
    <Box sx={{ ...containerStyle }}>
      <Grid container spacing={2}>
        <Grid item xs={1} md={1} />
        <Grid item xs={10} md={10} sx={{ mt: '4vh' }}>
          <Typography variant='h1' sx={{ textAlign: 'center', color: '#ffffff', fontSize: '3.25rem', zIndex: '5', position: 'relative' }}>
            Questions? <Link href="/Contact" style={{ color: '#000000' }}>Contact Us</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};