// Material UI
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// theme constants
import colors from "./colors";
import customBreakpoints from "./breakpoints";
import roboto from "./font";
// utils
import paletteShadesGenerator from "@/utils/helpers/paletteShadesGenerator";

/**
 * Customizing Theme
*/

const theme = createTheme({

  breakpoints: {
    values: {
      ...customBreakpoints
    }
  },

  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: '0',
          paddingRight: '0',
          [`@media (min-width:${customBreakpoints.sm}px)`]: {
            paddingLeft: '0',
            paddingRight: '0',
          },
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '15px 10px',
        },
        label: {
          fontSize: 15
        }
      }
    }
  },

  palette: {
    mode: 'light',
    primary: paletteShadesGenerator(colors.primary),
    secondary: paletteShadesGenerator(colors.secondary),
    surface: paletteShadesGenerator(colors.surface),
    common: {
      black: colors.black,
      white: colors.white,
    },
    background: {
      paper: colors.background,
      default: colors.background
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary
    },
    imgOverlay: colors.imgOverlay
  },

  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: 56,
    },
    h2: {
      fontSize: 45
    },
    h3: {
      fontSize: 38
    },
    h4: {
      fontSize: 28
    },
    h5: {
      fontSize: 22
    },
    h6: {
      fontSize: 20
    },
    body1: {
      fontSize: 18
    },
    body2: {
      fontSize: 16
    },
    subtitle1: {
      fontSize: 14
    }
  }
});

export default responsiveFontSizes(theme);