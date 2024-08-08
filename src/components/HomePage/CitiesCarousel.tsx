'use client'

// --- mui
import { Box, IconButton, Stack, SxProps, Theme } from '@mui/material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
// --- embla carousel
import useEmblaCarousel from 'embla-carousel-react'
// --- types
import type { SxPropsMap } from '@/lib/types';
// --- react api
import { ReactElement, useCallback } from 'react';


type DivElementList = ReactElement<HTMLDivElement>[];

interface IProps {
  children: DivElementList,
}

/**
 * Custom carousel component that takes list of div elements as children
 */
const CitiesCarousel = ({ children }: IProps) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start'
  })


  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      if (!emblaApi.canScrollNext())
        emblaApi?.scrollTo(0)
      else
        emblaApi.scrollNext()
    }

  }, [emblaApi])

  return (
    <Stack sx={style.wrapper}>
      <IconButton onClick={scrollPrev} sx={style.btn}>
        <ArrowBackIosRoundedIcon sx={style.arrow} />
      </IconButton>
      <Box sx={style.embla} ref={emblaRef}>

        <Box sx={style.embla__container}>
          {children}
        </Box>
      </Box>
      <IconButton onClick={scrollNext} sx={style.btn}>
        <ArrowBackIosRoundedIcon sx={[style.arrow, style.next] as SxProps<Theme>} />
      </IconButton>
    </Stack >
  )
}

export default CitiesCarousel;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {

  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1
  },

  embla: {
    overflow: 'hidden',
    flex: 1,
    position: 'relative',
    paddingBlock: 2,
  },

  embla__container: {
    display: 'flex',
    flexDirection: 'row',
    '> div': {
      flex: {
        xs: '0 0 min(43vw, 160px)',
        sm: '0 0 200px',
        md: '0 0 calc(33.3% - 16px)',
        lg: '0 0 calc(25% - 16px)'
      },
      minWidth: 0,
      marginRight: {
        xs: 0.5,
        sm: 0.75,
        md: 1
      },
      marginLeft: {
        xs: 0.5,
        sm: 0.75,
        md: 1
      },
    },
  },

  btn: {
    color: 'primary.main',
    display: {
      xs: 'none',
      md: 'inline-flex'
    }
  },

  arrow: {
    width: 40,
    height: 40
  },

  next: {
    rotate: '180deg'
  },

}
