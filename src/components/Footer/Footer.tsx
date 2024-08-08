// --- mui
import { Button, Stack, Typography } from '@mui/material';
// --- types
import type { SxPropsMap } from '@/lib/types';
// --- UI
import MaxWidthBox from '@/UI/MaxWidthBox';
// --- components
import MediaLinks from './MediaLinks';
import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
// --- next api
import Link from 'next/link';

const Footer = () => {
  return (
    <MaxWidthBox
      component='footer'
      sx={style.wrapper}
    >
      <Stack
        direction='column'
        spacing={{ xs: 1, sm: 1.5, md: 3 }}
        sx={style.primary}
      >
        <Typography
          variant='h2'
          component='span'
          sx={style.logo}
        >
          Oda Home
        </Typography>
        <Typography
          variant='subtitle1'
          color='grey.500'
        >
          We provide the modern platform for either landlords and customers, to get in touch with each other easily. For better experience, hire our agents and they will make all the heavy work for you
        </Typography>
        <MediaLinks />
        <Typography
          variant='subtitle1'
          color='grey.500'
        >
          © 2024 . All rights reserved by (შპს სახელი).
        </Typography>
      </Stack>
      <Stack sx={style.section}>
        <Typography
          variant='h6'
          component='span'
          sx={style.title}
        >
          Quick Links
        </Typography>
        <Button
          href='/sign-up'
          LinkComponent={Link}
          sx={style.link}
        >
          Sign up
        </Button>
        <Button
          href='/'
          LinkComponent={Link}
          sx={style.link}
        >
          FAQ
        </Button>
        <Button
          href='/'
          LinkComponent={Link}
          sx={style.link}
        >
          Privacy & Policy
        </Button>
      </Stack>
      <Stack sx={style.section}>
        <Typography
          variant='h6'
          component='span'
          sx={style.title}
        >
          Our Company
        </Typography>
        <Button
          href='/about'
          LinkComponent={Link}
          sx={style.link}
        >
          About Us
        </Button>
        <Button
          href='/contact'
          LinkComponent={Link}
          sx={style.link}
        >
          Contact Us
        </Button>
      </Stack>
      <Stack sx={style.section}>
        <Typography
          variant='h6'
          component='span'
          sx={style.title}
        >
          Download Mobile App
        </Typography>
        <Stack direction='column' spacing={2} sx={{ marginBlock: 2 }}>
          <AppStoreButton />
          <PlayStoreButton />
        </Stack>
      </Stack>
    </MaxWidthBox>
  )
}

export default Footer;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    display: 'grid',
    justifyItems: {
      xs: 'center',
      md: 'flex-start'
    },
    alignItems: 'flex-start',
    gridTemplateAreas: {
      xs: `
        "company links"
        "app app"
        "primary primary"
      `,
      md: `
        "primary company app"
        "primary links app"
      `,
      lg: `
        "primary company links app"
      `
    },
    gridTemplateColumns: {
      xs: 'repeat(2, minmax(0, 1fr))',
      md: 'minmax(0, 400px) repeat(2, minmax(0, auto))',
      lg: '1.5fr repeat(3, 1fr)'
    },
    gridTemplateRows: {
      xs: 'repeat(auto-fill, minmax(0, 1fr))',
      md: '1fr 1fr',
      lg: '1fr'
    },
    gridAutoFlow: 'reverse',
    gap: {
      xs: 1.5,
      sm: 2.5,
      md: 4.5,
      lg: 5
    },
    marginTop: 4
  },

  primary: {
    padding: {
      xs: '0 10px',
      md: '0 20px 0 0',
      lg: '0 40px 0 0'
    },
    textAlign: {
      xs: 'center',
      md: 'left'
    },
    gridArea: 'primary',
    alignItems: {
      xs: 'center',
      md: 'flex-start'
    },
    justifyContent: 'flex-start'
  },

  logo: {
    color: 'primary.main',
    flex: 1,
    fontWeight: 500
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    alignItems: {
      xs: 'center',
      md: 'flex-start'
    },
    ":nth-of-type(2)": {
      gridArea: 'company',
    },
    ":nth-of-type(3)": {
      gridArea: 'links'
    },
    ":nth-of-type(4)": {
      gridArea: 'app',
    }
  },

  title: {
    color: 'primary.main'
  },

  link: {
    minWidth: 0,
    color: 'secondary.main',
    fontWeight: 400,
    textTransform: 'capitalize'
  }
}