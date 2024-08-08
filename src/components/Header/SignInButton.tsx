// --- mui
import { Button } from '@mui/material';
// --- next api
import Link from 'next/link';
// --- types
import type { ButtonProps, SxProps, Theme } from '@mui/material';
import type { SxPropsMap } from '@/lib/types';


const SignInButton = ({ sx }: ButtonProps) => {
  return (

    <Button
      variant='contained'
      href={'/sign-in'}
      LinkComponent={Link}
      sx={[sx, style.btn] as SxProps<Theme>}
    >
      Sign In
    </Button>

  )
}

export default SignInButton;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  btn: {
    textTransform: "uppercase",
    fontWeight: 700,
  }
}