// --- mui
import { Box, Grid, Stack, Typography } from '@mui/material';
// --- components
import RecentlyAddedItem from './RecentlyAddedItem';
import RecentlyAddedCarousel from './RecentlyAddedCarousel';
// --- types
import type { SxPropsMap } from '@/lib/types';

const recentlyAddedProperties = [
  {
    title: '103/143 West Street, Crows Nest',
    bedrooms: '10 Bedroom',
    area: '150M',
    gareges: '2 Garage',
    owner: 'X Builder',
    price: 45.545,
    type: 'rent'
  },
  {
    title: '103/143 West Street, Crows Nest',
    bedrooms: '10 Bedroom',
    area: '150M',
    gareges: '2 Garage',
    owner: 'X Builder',
    price: 45.545,
    type: 'rent'
  },
  {
    title: '103/143 West Street, Crows Nest',
    bedrooms: '10 Bedroom',
    area: '150M',
    gareges: '2 Garage',
    owner: 'X Builder',
    price: 45.545,
    type: 'rent'
  },
  {
    title: '103/143 West Street, Crows Nest',
    bedrooms: '10 Bedroom',
    area: '150M',
    gareges: '2 Garage',
    owner: 'X Builder',
    price: 45.545,
    type: 'rent'
  },
  {
    title: '103/143 West Street, Crows Nest',
    bedrooms: '10 Bedroom',
    area: '150M',
    gareges: '2 Garage',
    owner: 'X Builder',
    price: 45.545,
    type: 'rent'
  },
  {
    title: '103/143 West Street, Crows Nest',
    bedrooms: '10 Bedroom',
    area: '150M',
    gareges: '2 Garage',
    owner: 'X Builder',
    price: 45.545,
    type: 'rent'
  },
]

const RecentlyAdded = () => {
  return (
    <Stack>
      <Typography
        variant='h3'
        component='span'
        sx={style.title}
      >
        Recently added
      </Typography>
      {/*Visible on md+ resolutions */}
      <Grid
        container
        spacing={{ xs: 1, sm: 1.5, md: 2, lg: 3 }}
        justifyItems='center'
        sx={style.grid}
      >
        {recentlyAddedProperties.map((item, idx) =>
          <Grid
            key={idx}
            item
            xs={12}
            sm={6}
            lg={4}
          >
            <RecentlyAddedItem property={item} />
          </Grid>
        )}
      </Grid>
      {/*Visible on xs-sm resolutions */}
      <RecentlyAddedCarousel>
        {recentlyAddedProperties.map((item, idx) =>
          <Box
            key={idx}
          >
            <RecentlyAddedItem property={item} />
          </Box>
        )}
      </RecentlyAddedCarousel>
    </Stack>
  )
}

export default RecentlyAdded;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  title: {
    color: 'primary.main',
    fontWeight: 300,
    marginBottom: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    }
  },

  grid: {
    display: {
      xs: 'none',
      md: 'flex'
    },
    justifyContent: 'center'
  }
}