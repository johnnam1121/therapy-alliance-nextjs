"use client"
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Footer from '@/components/Footer';
import TopContact from '@/components/TopContact';
import Topbar from '@/components/Topbar';
import ContactForm from '@/components/contactPageComponents/ContactForm';
import ContactLanding from '@/components/contactPageComponents/ContactLanding';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00a99d',
      light: '#f2f2f2',
      dark: '#eeeeee',
    },
    secondary: {
      main: '#00a99d',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      color: '#eeeeee',
      fontSize: '4rem',
      '@media (max-width: 768px)': {
        fontSize: '10vw',
      },
    },
    h2: {
      fontSize: '3.25rem',
      color: '#000000',
    },
    h3: {
      fontSize: '2.5rem',
      color: '#555555',
    },
    h4: {
      fontSize: '1.75rem',
      color: '#00a99d',
    },
    h5: {
      fontSize: '1rem',
      color: '#00a99d',
    },
    h6: {
      color: '#eeeeee',
      fontSize: '1.1rem',
    },
    body1: {
      color: '#777777',
      fontSize: '1rem'
    },
  },
});

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: '1'
      }}
    >
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: theme.palette.primary.main }}>
          <TopContact />
          <Topbar />
          <ContactLanding />
          <ContactForm />
          <Footer />
        </Box>
      </ThemeProvider>
    </motion.div >
  );
}