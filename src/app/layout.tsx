// --- style
import '@/globals.css'
// --- react api
import { ReactNode } from 'react';
// --- types
import type { Metadata } from "next";
import type { SxPropsMap } from '@/lib/types';
// --- theme
import ThemeRegistry from '@/lib/theme/ThemeRegistry';
// --- components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
// --- mui
import { Box } from '@mui/material';

export const metadata: Metadata = {
  title: "Oda Home",
  description: "Find your best real estate",
}

interface IProps {
  children: ReactNode
}

const RootLayout = ({ children }: IProps) => {
  return (
    <html lang="en">
      <Box component='body' sx={style.wrapper}>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </Box>
    </html>
  );
}

export default RootLayout;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    paddingBlock: 2
  }
}
