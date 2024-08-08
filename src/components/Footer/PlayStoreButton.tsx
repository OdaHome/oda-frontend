// --- mui
import { Button, Box, Typography } from '@mui/material';
// --- components
import PlayStoreIcon from './PlayStoreIcon';
// --- types
import type { SxPropsMap } from '@/lib/types';

const PlayStoreButton = () => {
  return (
    <Button
      variant='contained'
      color='primary'
      href='https://play.google.com/store/apps'
      target='_blank'
      rel='noopener noreferrer'
      sx={style.button}
    >
      <PlayStoreIcon />
      <Box sx={style.textContainer}>
        <Typography sx={style.smallText}>Get it on</Typography>
        <Typography sx={style.largeText}>Google Play</Typography>
      </Box>
    </Button>
  );
};

export default PlayStoreButton;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    textTransform: 'none',
    backgroundColor: 'primary.light',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'common.black'
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '10px',
  },
  smallText: {
    fontSize: '12px',
    lineHeight: '1'
  },
  largeText: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
};
