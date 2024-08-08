'use client'

// --- mui
import { Box } from '@mui/material';
// --- types
import type { SxPropsMap } from '@/lib/types';
// embla api
import useEmblaCarousel from 'embla-carousel-react';
/// react api
import { ReactElement } from 'react';


type DivElementList = ReactElement<HTMLDivElement>[];

interface IProps {
  children: DivElementList,
}

/**
 * Replavces RecentlyAdded's Grid Component on lower resolutions
 */
const RecentlyAddedCarousel = ({ children }: IProps) => {


  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start'
  })

  return (
    <Box sx={style.embla} ref={emblaRef}>

      <Box sx={style.embla__container}>
        {children}
      </Box>
    </Box>
  )
}

export default RecentlyAddedCarousel;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  embla: {
    overflow: 'hidden',
    flex: 1,
    position: 'relative',
    paddingBlock: 2,
    display: {
      xs: 'block',
      md: 'none'
    }
  },

  embla__container: {
    display: 'flex',
    flexDirection: 'row',
    '> div': {
      flex: {
        xs: '0 0 200px',
        sm: '0 0 260px',
      },
      minWidth: 0,
      marginX: {
        xs: 0.5,
        sm: 1,
      },
    },
  },
}