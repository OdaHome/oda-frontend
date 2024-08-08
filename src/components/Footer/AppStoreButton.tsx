// --- mui
import { Button, Box, Typography } from '@mui/material';
// --- mui icons
import AppleIcon from '@mui/icons-material/Apple';
// --- types
import type { SxPropsMap } from '@/lib/types';

const AppStoreButton = () => {
  return (
    <Button
      variant='contained'
      color='primary'
      href='https://www.apple.com/app-store/'
      target='_blank'
      rel='noopener noreferrer'
      sx={style.button}
    >
      <AppleIcon sx={style.icon} />
      <Box sx={style.textContainer}>
        <Typography sx={style.smallText}>Download on the</Typography>
        <Typography sx={style.largeText}>App Store</Typography>
      </Box>
    </Button>
  );
};

export default AppStoreButton;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    textTransform: 'none',
    backgroundColor: 'primary.light',
    borderRadius: 2,
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'common.black'
    },
  },
  icon: {
    fontSize: '40px',
    marginRight: '10px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
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
