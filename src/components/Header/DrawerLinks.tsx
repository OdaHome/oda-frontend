'use client'

// --- mui
import { Drawer, IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// --- types
import type { SxPropsMap } from '@/lib/types';
// --- react api
import { useState } from 'react';
import Links from './Links';

const DrawerLinks = () => {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <IconButton sx={style.btn} onClick={toggleDrawer(true)}>
        <MenuRoundedIcon fontSize='large' sx={style.icon} />
      </IconButton>
      <Drawer
        anchor='right'
        open={open}
        onClose={toggleDrawer(false)}
        sx={style.drawer}
      >
        <Links sx={style.links} />
      </Drawer>
    </>
  )
}

export default DrawerLinks;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  btn: {
    display: {
      md: 'none',
      xs: 'flex'
    }
  },
  icon: {
    color: 'primary.main'
  },
  drawer: {
    '& .MuiDrawer-paper': {
      padding: '20px 15px',
      width: '240px',
      display: {
        xl: 'flex',
        md: 'none'
      }
    }
  },
  links: {
    alignItems: 'flex-end'
  }
}