// --- mui
import { Button, Typography } from '@mui/material';
// --- next api
import Link from 'next/link';
// --- components
import OverlayedImageBox from '@/UI/OverlayedImageBox';
// --- types
import type { SxPropsMap } from '@/lib/types';

const LandLordsBanner = () => {
  return (
    <OverlayedImageBox sx={style.wrapper}>
      <Typography
        variant='h1'
        component='span'
        sx={style.title}
      >
        Do you have a real estate for sale?
      </Typography>
      <Typography
        variant='h5'
        component='span'
        sx={style.secondary}
      >
        Register as landlord and publish your product on our platform within a few clicks. Customers will contact you themselves.
      </Typography>
    </OverlayedImageBox>
  )
}

export default LandLordsBanner;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    backgroundImage: 'url(./assets/images/contact-us-banner-image.jpg)',
    height: 'clamp(400px, 40vw, 550px)',
    paddingX: {
      xs: 2,
      sm: 4,
      md: 8,
      lg: 12
    },
    paddingY: {
      xs: 4,
      md: 8,
      lg: 10
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: {
      xs: 'center',
      sm: 'flex-start'
    },
    gap: 5
  },

  title: {
    fontWeight: 700,
    color: 'text.primary',
    maxWidth: 550,
    textAlign: {
      xs: 'center',
      sm: 'left'
    }
  },

  secondary: {
    fontWeight: 300,
    color: 'text.primary',
    maxWidth: 500,
    textAlign: {
      xs: 'center',
      sm: 'left'
    }
  },

}