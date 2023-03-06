import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import BasicCard from './basket';
import Image from 'next/image';
import menuIcon from '../public/images/icon-menu.svg'
import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import styles from './layout.module.css';

const pages = ['Collections', 'Men', 'Women', 'About', 'Contact']

function ResponsiveAppBar() {

  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText sx={{'& .MuiListItemText-primary':{fontWeight:700}}} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (

    <AppBar position="static" elevation={0} className='bg-white border-bottom'>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer('left', true)}
            >
              <Image src={menuIcon} sx={{
                display: { xs: 'block', md: 'none' },
              }} />
            </IconButton>

            <Box>
                <React.Fragment>
                  <Drawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                  > 
                    {list('left')}
                  </Drawer>
                </React.Fragment>
            </Box>
          </Box>
          <Typography
            variant="h5"
            noWrap
            color='darkblue'
            sx={{
              mr: 2,             
              flexGrow: {md:0, xs:1},
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            SNEAKERS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                href='#'
                key={page}
                style={{textDecoration:'none', fontWeight:700, display: 'block', color:'darkblue'}}
                className={`m-2 ${styles.navHover}`}
              >
                {page}
              </Link>
            ))}
          </Box>
          <BasicCard/>       
          <Avatar sx={{ '&:hover': {outline: '0.2rem solid hsl(26, 100%, 55%)'}}} alt="Remy Sharp" src="/images/image-avatar.png" />
        </Toolbar>
    </AppBar>
  )
}
export default ResponsiveAppBar;