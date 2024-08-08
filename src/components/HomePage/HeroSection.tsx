// --- mui
import { Typography } from '@mui/material';
// --- UI
import OverlayedImageBox from '@/UI/OverlayedImageBox';
// --- types
import type { SxPropsMap } from '@/lib/types';

const HeroSection = () => {
  return (
    <OverlayedImageBox sx={style.wrapper}>
      <Typography
        variant='h1'
        component='span'
        sx={style.heroText}
      >
        Easy way to find a perfect property
      </Typography>
      <Typography
        variant='h5'
        component='span'
        sx={style.secondaryText}
      >
        We provide a complete service for the sale, purchase or rental of real estate.
      </Typography>
    </OverlayedImageBox>
  )
}

export default HeroSection;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    backgroundImage: 'url(./assets/images/hero-section-image.jpg)',
    height: 'clamp(350px, 50vw, 600px)',
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

  heroText: {
    fontWeight: 700,
    color: 'white',
    maxWidth: {
      xs: 350,
      sm: 450
    },
    display: 'inline-block',
    textAlign: {
      xs: 'center',
      sm: 'left'
    }
  },

  secondaryText: {
    fontWeight: 300,
    color: 'text.secondary',
    maxWidth: 400,
    display: 'inline-block',
    textAlign: {
      xs: 'center',
      sm: 'left'
    }
  }
}