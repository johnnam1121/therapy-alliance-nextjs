import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  const isMobile = useMediaQuery("(max-width:768px)");

  const buttonStyles = {
    mt: "7vh",
    display: "block",
    mx: "auto",
    color: "#ffffff",
    backgroundColor: "#00a99d",
    "&:hover": { backgroundColor: "#f36523" },
    fontSize: isMobile ? "4vw" : "1.5vw",
    borderRadius: "10%",
    width: isMobile ? "30vw" : "10vw",
    whiteSpace: "nowrap",
  };

  const backgroundPhoto = require("../../pictures/physicalTherapy.jpeg");
  const background = {
    position: "relative",
    padding: 0,
    overflow: "hidden",
    minHeight: "80vh",
    background: `url(${backgroundPhoto})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 30%",
    alignItems: "center",
    display: "flex",
    width: "100%",
    zIndex: 0,
  };

  return (
    <Box sx={background}>
      <Image
        src={backgroundPhoto.default}
        alt="Background Photo"
        layout="fill"
        objectFit="cover"
        objectPosition="50% 30%"
      />
      <Grid container>
        <Grid item xd={12} md={12} sx={{ textAlign: "center", p: "6vw", alignItems: "center", zIndex: "3", }}>
          <Typography variant="h1">
            Let Us Connect You To
            <br /> Your{" "}
            <span style={{ color: "#f36523", fontStyle: "italic" }}>
              Dream
            </span>{" "}
            Job Today!
          </Typography>
          <Button sx={buttonStyles} component={Link} href="/Contact">
            Apply Now!
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
