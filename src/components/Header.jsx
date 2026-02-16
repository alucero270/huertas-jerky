"use client";

import * as React from "react";
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
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (nextOpen) => () => setOpen(nextOpen);

  return (
    <>
      <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Brand */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                component={Link}
                href="/"
                variant="h6"
                sx={{
                  textDecoration: "none",
                  color: "text.primary",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                Huerta’s Albuquerque Jerky
              </Typography>
            </Box>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
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

              {/* Primary CTA */}
              <Button
                component={Link}
                href="/shop"
                variant="contained"
                color="primary"
                sx={{ ml: 1 }}
              >
                Shop Jerky
              </Button>
            </Box>

            {/* Mobile nav button */}
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

      {/* Mobile drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 280 }} role="presentation" onClick={toggleDrawer(false)}>
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
                Shop Jerky
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
