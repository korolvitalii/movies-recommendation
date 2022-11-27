import MenuIcon from '@mui/icons-material/Menu'
import SettingIcon from '@mui/icons-material/Settings'

import {
  AppBar,
  Box,
  Button,
  Divider,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const list = () => (
    <Box>
      <Divider />
      <List>
        {['Settings'].map((text, index) => (
          <Link key={text + index} component={RouterLink} to="/settings">
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ minHeight: '75px' }}>
          <Toolbar>
            <Hidden only={['lg', 'xl']}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
              <Typography
                sx={{ flexGrow: 1, color: 'white' }}
                variant="h6"
                color="inherit"
                component="div">
                Movies recommendations
              </Typography>
            </Link>
            <Box display={{ xs: 'none', lg: 'block' }}>
              <Link component={RouterLink} to="/settings">
                <Button
                  key="settings"
                  onClick={() => null}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  Settings
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          onOpen={() => setIsDrawerOpen(true)}>
          {list()}
        </SwipeableDrawer>
      </Box>
    </>
  )
}

export default Navigation
