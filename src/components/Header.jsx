"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "FAQ", href: "/faq" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (nextOpen) => () => setOpen(nextOpen);

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          borderBottom: "2px solid",
          borderColor: "#d4c4a8",
          backgroundColor: "rgba(255, 251, 242, 0.96)",
          boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between", minHeight: "76px" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                component={Link}
                href="/"
                sx={{
                  position: "relative",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  border: "2px solid",
                  borderColor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/images/1000010711.jpg"
                  alt="Huerta's Albuquerque Jerky"
                  width={48}
                  height={48}
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
              </Box>
              <Typography
                component={Link}
                href="/"
                variant="h6"
                sx={{
                  textDecoration: "none",
                  color: "primary.main",
                  fontWeight: 800,
                  fontFamily: '"Alegreya", "Book Antiqua", Georgia, serif',
                  fontSize: "1.35rem",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                }}
              >
                Huerta's
                <Box component="span" sx={{ color: "text.secondary", fontFamily: '"Montserrat", sans-serif', fontWeight: 500, fontSize: "0.75rem", display: "block", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Albuquerque Jerky
                </Box>
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  color="inherit"
                  sx={{ fontWeight: 700 }}
                >
                  {item.label}
                </Button>
              ))}

              <Button component={Link} href="/shop" variant="contained" color="primary" sx={{ ml: 1 }}>
                Browse Flavors
              </Button>
            </Box>

            <IconButton
              edge="end"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
              Menu
            </Typography>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton component={Link} href={item.href}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem sx={{ pt: 2 }}>
              <Button component={Link} href="/shop" fullWidth variant="contained">
                Browse Flavors
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
