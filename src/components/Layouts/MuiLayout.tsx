import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Outlet } from 'react-router-dom'
import { GapsiLogo } from '../../assets'
import { Grid } from '@mui/material'
import Footer from '../Footer'

const MuiLayout = () => {
  return (
    <Grid container minHeight="100vh" display="flex" flexDirection="column">
      <AppBar position="static" sx={{ bgcolor: "#f6f6f6" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex" },
                alignItems: "center",
                color: "#777777",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <img src={GapsiLogo} width={45} height={30} />
              </IconButton>
              <Typography variant="body1">e-Commerce Gaspi</Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <MoreVertIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box paddingY={5} flexGrow={1}>
        <Outlet />
      </Box>
      <Footer />
    </Grid>
  )
}

export default MuiLayout