"use client";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Footer from "../components/Footer";
import TopContact from "../components/TopContact";
import Topbar from "../components/Topbar";
import HandshakeQuote from "../components/homePageComponents/HandshakeQuote";
import Landing from "../components/homePageComponents/Landing";
import Questions from "../components/homePageComponents/Questions";
import TherapyBanner from "../components/homePageComponents/TherapyBanner";
import WhyChooseUs from "../components/homePageComponents/WhyChooseUs";
// #00a693 (a dark greenish-blue)
// #45b1e8 (a bright sky blue)
// #ff9900 (a bold orange)
// #ff4d4d (a vibrant red)

// Light Gray (#F5F5F5)
// Beige (#F5F5DC)
// Light Blue (#E6F3F7)

// original colors
// 00a99d (PANTONE 3272)  // greenish
// f36523 (PANTONE 171)   // orange
// f70809 (PANTONE 485)   // red
// 3fa9f5 (PANTONE 279 C) // blue

const theme = createTheme({
  palette: {
    primary: {
      main: "#00a99d",
      light: "#f2f2f2",
      dark: "#eeeeee",
    },
    secondary: {
      main: "#00a99d",
    },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      color: "#eeeeee",
      fontSize: "4rem",
      "@media (max-width: 768px)": {
        fontSize: "10vw",
      },
    },
    h2: {
      fontSize: "3.25rem",
      color: "blue",
    },
    h3: {
      fontSize: "2.5rem",
      color: "#555555",
    },
    h4: {
      fontSize: "1.75rem",
      color: "#00a99d",
    },
    h5: {
      fontSize: "1rem",
      color: "#00a99d",
    },
    h6: {
      color: "#eeeeee",
      fontSize: "1.1rem",
      "@media (max-width: 768px)": {
        fontSize: "0.75rem",
      },
    },
    body1: {
      color: "#777777",
      fontSize: "1rem",
    },
  },
});

export default function page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "easeInOut",
        duration: "1",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: theme.palette.primary.main }}>
          <TopContact />
          <Topbar />
          <Landing />
          <TherapyBanner />
          <WhyChooseUs />
          <Questions />
          <HandshakeQuote />
          <Footer />
        </Box>
      </ThemeProvider>
    </motion.div>
  );
}
