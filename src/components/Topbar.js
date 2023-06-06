import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, CssBaseline, IconButton, Menu, MenuItem, Typography, useMediaQuery, } from "@mui/material";
import { useState } from "react";
import logo from "../pictures/logo.png";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Topbar() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyles = {
    zIndex: 3,
    color: "#555555",
    border: "1px solid",
    mr: "1vw",
    outline: "#555555",
    "&:hover": { backgroundColor: "#f36523" },
  };

  const boldName = {
    flexGrow: "1",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "1.25rem",
  };

  return (
    <Box
      sx={{ backgroundColor: "primary.light", px: isMobile ? "1vw" : "10vw", top: 0, position: "sticky", zIndex: 10, }}>
      <CssBaseline />
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", minHeight: "5vh", }}>
        <motion.div whileHover={{ rotate: [0, -7, 7, -7, 7, 0], transition: { duration: 0.3 }, }}        >
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" component={Link} href="/">
            <Image src={logo} alt="logo" height={"25"} />
          </IconButton>
        </motion.div>
        <Typography variant="h5" component="div" sx={boldName}>
          TD Therapy Alliance
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button variant="outlined" component={Link} href="/" sx={linkStyles}>
            Home
          </Button>
          <Button variant="outlined" component={Link} href="/about" sx={linkStyles}>
            About
          </Button>
          <Button variant="outlined" component={Link} href="/contact" sx={linkStyles}>
            Contact
          </Button>
        </Box>
        {isMobile && (
          <div>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleClick} sx={{ zIndex: "3" }}>
              <MenuIcon />
            </IconButton>
            {/* note to self. menu code is from mui documentation */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    backgroundColor: "white",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem component={Link} onClick={handleClose} href="/">
                Home
              </MenuItem>
              <MenuItem component={Link} onClick={handleClose} href="/about">
                About
              </MenuItem>
              <MenuItem component={Link} onClick={handleClose} href="/contact">
                Contact
              </MenuItem>
            </Menu>
          </div>
        )}
      </Box>
    </Box>
  );
}
