// --- mui
import { Box, BoxProps, SxProps, Theme } from "@mui/material";
// --- types
import type { SxPropsMap } from "@/lib/types";

interface IProps extends BoxProps {
  contentWrapper?: boolean
}

/**
 * Component for managing the main content container's maximum with
 */
const MaxWidthBox = ({ children, sx, component, contentWrapper }: IProps) => {
  return (
    <Box
      sx={[style.wrapper, sx, contentWrapper ? style.contentWrapper : null] as SxProps<Theme>}
      component={component}
    >
      {children}
    </Box>
  )
}

export default MaxWidthBox;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    width: 'min(100%, 1300px)',
    margin: '0 auto',
    paddingInline: 2
  },

  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: {
      xs: 4,
      sm: 6,
      md: 7,
      lg: 8
    },
    paddingBlock: {
      xs: 2,
      md: 3
    }
  }
}