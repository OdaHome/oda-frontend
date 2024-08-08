// --- mui
import { Box, BoxProps, SxProps, Theme } from "@mui/material";
// --- types
import type { SxPropsMap } from "@/lib/types";

interface IProps extends BoxProps {

}

/**
 * Custom Green overlay on the image to darken it for light font better visibility
 */
const OverlayedImageBox = ({ children, sx }: IProps) => {
  return (
    <Box
      sx={[style.wrapper, sx] as SxProps<Theme>}
      component='div'
    >
      <Box sx={style.overlay} ></Box>
      {children}
    </Box>
  )
}

export default OverlayedImageBox;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    position: 'relative',
    zIndex: -2,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    "> button": {
      fontSize: '40px'
    }
  },
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'imgOverlay',
    position: 'absolute',
    inset: '0 0 0 0',
    zIndex: -1
  }
}