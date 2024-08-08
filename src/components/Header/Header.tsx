// --- mui
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
// --- ui
import MaxWidthBox from '@/UI/MaxWidthBox';
// --- components
import Links from './Links';
import DrawerLinks from './DrawerLinks';
// --- types
import type { SxPropsMap } from "@/lib/types";

const Header = () => {

  return (
    <MaxWidthBox>
      <AppBar
        component='header'
        sx={style.wrapper}
        elevation={0}
      >
        <Toolbar>
          <Typography
            variant='h2'
            component='span'
            sx={style.logo}
          >
            Oda Home
          </Typography>
          <Links
            sx={style.links}
          />
          <DrawerLinks />
        </Toolbar>
      </AppBar>
    </MaxWidthBox>
  );
}

export default Header;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    position: 'static',
    backgroundColor: 'transparent'
  },
  logo: {
    color: 'primary.main',
    flex: 1,
    fontWeight: 500
  },
  links: {
    display: {
      md: 'flex',
      xs: 'none'
    },
  }
}
