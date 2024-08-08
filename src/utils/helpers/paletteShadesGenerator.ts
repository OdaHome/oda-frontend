import { alpha, getContrastRatio } from "@mui/material/styles";
import colors from "@/lib/theme/colors";

/**
 * 
 * @param color 
 * @returns object containing main color and its dark and light shades, in addition with contrast color for text
 */
export default function paletteShadesGenerator(color: string) {
  return {
    main: color,
    dark: alpha(color, 0.9),
    light: alpha(color, 0.5),
    contrastText: getContrastRatio(color, '#fff') > 4.3 ? colors.white : colors.black,
  }
}