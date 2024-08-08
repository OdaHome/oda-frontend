// --- mui
import { Stack, Typography } from '@mui/material';
// --- types
import type { SxPropsMap } from '@/lib/types';
// --- UI
import CitiesCarousel from '@/components/HomePage/CitiesCarousel';
import OverlayedImageBox from '@/UI/OverlayedImageBox';

// --- List of available cities

const citiesList = [
  { name: 'Tbilisi', fileName: 'tbilisi.jpg' },
  { name: 'Kutaisi', fileName: 'kutaisi.jpg' },
  { name: 'Batumi', fileName: 'batumi.jpg' },
  { name: 'Gori', fileName: 'gori.jpg' },
  { name: 'Mtskheta', fileName: 'mtskheta.jpg' }
]

const Cities = () => {

  return (
    <Stack direction='column' spacing={{ xs: 2, md: 4, lg: 5 }}>
      <Typography
        component='h2'
        sx={style.title}
      >
        We are available in many well-known cities
      </Typography>
      <CitiesCarousel>
        {citiesList.map((city, idx) =>
          <OverlayedImageBox
            key={idx}
            sx={{ ...style.item, backgroundImage: `url(./assets/images/cities/${city.fileName})` }}
          >
            <Typography
              component='span'
              sx={style.item_title}
            >
              {city.name}
            </Typography>
          </OverlayedImageBox>
        )}
      </CitiesCarousel>
    </Stack>
  )
}

export default Cities;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {

  title: {
    color: 'primary.main',
    display: 'inline-block',
    maxWidth: {
      xs: 250,
      sm: 300,
      md: 400,
    },
    margin: '0 auto',
    textAlign: 'center',
    fontWeight: 500,
    alignSelf: 'center',
    typography: {
      xs: 'h4',
      md: 'h3'
    }
  },

  item: {
    height: {
      xs: 230,
      sm: 280,
      md: 'clamp(330px, 40vw, 400px)',
    },
    textAlign: 'center',
    paddingTop: {
      xs: 4,
      lg: 5
    },
    boxShadow: 5
  },

  item_title: {
    color: 'text.primary',
    textTransform: 'uppercase',
    letterSpacing: 1,
    typography: {
      xs: 'h5',
      sm: 'h4'
    }
  }
}