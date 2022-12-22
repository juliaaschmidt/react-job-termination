import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import LogoComponent from "./LogoComponent";
// import mylogo from "../img/tmp_logo.png";
import MuiPaper from "@mui/material/Paper";
import "./ResponsiveAppBar.css";
import { Link } from "react-router-dom";

const pages = ["Beratungstermin"];
const settings = ["About", "Erfahrungsberichte", "Kosten"];
// const settings = ["Über uns", "Erfahrungsberichte", "Kosten"];

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        color: "black",
        // display: "flex",
        // justifyContent: "space-between",
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "flex" },
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "space-between",
          }}
        >
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Playfair Display",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          > */}

          <Link style={{ textDecoration: "none", color: "black" }} to={`/`}>
            <LogoComponent />
          </Link>
          {/* </Typography> */}

          {/* sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              background-color="white"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              className="items"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="right">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/${page}`}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
            // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            {/* LOGO  */}
          </Typography>
          <Box
            style={{ flex: 0.12 }}
            sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <button
                key={page}
                className="button navbarbutton"
                onClick={handleCloseNavMenu}
                // sx={{ my: 2, color: "black", display: "block" }}
              >
                <Link
                  className="style_logo"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  to={`/${page}`}
                >
                  {page}
                </Link>
              </button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0.15 }}>
            <Tooltip title="Mehr Erfahren" className="style_classy">
              <IconButton
                className="svg_icons"
                onClick={handleOpenUserMenu}
                color="inherit"
                sx={{ mr: 0, p: 0 }}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link
                      className="style_classy"
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/${setting}`}
                    >
                      {setting === "About" ? "Über uns" : setting}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
