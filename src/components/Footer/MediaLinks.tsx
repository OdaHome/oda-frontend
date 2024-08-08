'use client'

// --- mui
import { IconButton, Stack } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// --- types
import type { SxPropsMap } from '@/lib/types';

const MediaLinks = () => {
  return (
    <Stack direction='row'>
      <IconButton
        href='https://www.facebook.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FacebookRoundedIcon fontSize='large' sx={style.facebook} />
      </IconButton>
      <IconButton
        href='https://www.twitter.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <TwitterIcon fontSize='large' sx={style.twitter} />
      </IconButton>
      <IconButton
        href='https://www.instagram.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <InstagramIcon fontSize='large' sx={style.instagram} />
      </IconButton>
      <IconButton
        href='https://www.linkedin.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LinkedInIcon fontSize='large' sx={style.linkedin} />
      </IconButton>
    </Stack>
  )
}

export default MediaLinks;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  facebook: {
    color: '#1877F2'
  },
  twitter: {
    color: '#1DA1F2'
  },
  instagram: {
    color: '#EC3397'
  },
  linkedin: {
    color: "#0A66C2"
  }
}
