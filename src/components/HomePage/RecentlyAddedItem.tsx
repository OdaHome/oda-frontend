// --- mui
import { Box, Chip, Card, Stack, Typography } from '@mui/material';
// --- types
import type { SxPropsMap } from '@/lib/types';

const RecentlyAddedItem = ({ property }: { property: any }) => {
  return (
    <Card elevation={7} sx={style.wrapper}>
      <Box sx={style.imgWrapper}>
        <img src='./assets/images/cities/tbilisi.jpg'></img>
      </Box>
      <Stack sx={style.content}>
        <Typography
          sx={style.title}
          variant='h5'
          component='span'
        >
          {property.title}
        </Typography>
        <Stack sx={style.info}>
          <Typography variant='body2' component='span'>
            {property.bedrooms}
          </Typography>
          <Typography variant='body2' component='span'>
            {property.area}
          </Typography>
          <Typography variant='body2' component='span'>
            {property.type}
          </Typography>
        </Stack>
        <Stack sx={style.info}>
          <Typography variant='body2' component='span'>
            Posted by {property.owner}
          </Typography>
          {/* <Chip
            sx={style.chip}
            label={`$${property.price}`}
            color='primary'
          /> */}
        </Stack>
      </Stack>
    </Card>
  )
}

export default RecentlyAddedItem;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    border: 1,
    borderColor: 'primary.main',
    padding: {
      xs: '10px 10px',
      sm: '10px 15px',
      md: '15px 20px',
    },
    borderRadius: 4,
    display: 'flex',
    flexDirection: {
      xs: 'column',
      md: 'row'
    },
    gap: {
      xs: 1.5,
      md: 2,
      lg: 3
    },
    margin: {
      xs: '0 auto',
      sm: '0'
    }
  },

  imgWrapper: {
    height: {
      xs: 120,
      sm: 130,
      md: '100%'
    },
    width: {
      sm: '100%',
      md: 100
    },
    flexShrink: 0,
    borderRadius: 3,
    overflow: 'hidden',
    '> img': {
      height: '100%',
      width: '100%',
      objectFit: 'cover'
    }
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 1
  },

  title: {
    color: 'common.black',
    fontWeight: 700
  },

  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '> span': {
      color: 'grey.500',
      fontWeight: 300
    }
  },
  // chip: {
  //   color: 'text.primary'
  // }
}