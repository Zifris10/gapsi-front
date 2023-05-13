import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography
} from '@mui/material';

export const Navbar = () => {
  return (
    <Box sx={{
      flexGrow: 1
    }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            e-Commerce Gapsi
          </Typography>
          <Avatar alt="e-Commerce Gapsi" src="/vite.svg" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}