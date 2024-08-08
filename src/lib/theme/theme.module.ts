/**
 * Extending custom mui Theme by adding custom variables to existing interfaces using module augmentation
 */

// mui
import '@mui/material/styles';
// react api
import { CSSProperties } from 'react';

type IColor = CSSProperties['color'];

declare module '@mui/material/styles' {
  interface Palette {
    surface: {
      main: IColor,
      dark: IColor,
      light: IColor,
      contrastText: IColor,
    },
    imgOverlay: IColor
  }

  interface PaletteOptions {
    surface?: {
      main: IColor,
      dark: IColor,
      light: IColor,
      contrastText: IColor,
    },
    imgOverlay: IColor
  }
}

/**
 *  Enabling custom variables to be passed as props' values to specific mui elements
 */
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    surface: true;
  }
}
