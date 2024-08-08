// --- mui
import { Button, Divider, Stack, StackProps, SxProps, Theme } from '@mui/material';
// --- next api
import Link from 'next/link';
// --- components
import SignInButton from './SignInButton';
// --- types
import type { SxPropsMap } from '@/lib/types';


// -=-=-=-=- List of Navigation Links -=-=-=-=- 

const navItems = [
  { link: '/', title: 'home' },
  { link: 'contact', title: 'contact us' },
  { link: '/about', title: 'about' },
  { link: '/properties', title: 'properties' },
];

const Links = ({ sx }: StackProps) => {
  return (
    <Stack sx={[style.wrapper, sx] as SxProps<Theme>} direction={{ md: 'row' }}>
      {navItems.map((item) => (
        <Button
          key={item.link}
          href={item.link}
          LinkComponent={Link}
          sx={style.link}
        >
          {item.title}
        </Button>
      ))}
      <Divider orientation='horizontal' sx={style.divider} />
      <SignInButton sx={style.link} />
    </Stack>
  )
}

export default Links;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    gap: {
      lg: 2,
      xs: 1
    },
  },

  link: {
    fontSize: 12,
    letterSpacing: 2.5
  },
  divider: {
    backgroundColor: 'primary.main',
    margin: '8px 0',
    width: '100%',
    display: {
      xs: 'block',
      md: 'none'
    }
  }
}