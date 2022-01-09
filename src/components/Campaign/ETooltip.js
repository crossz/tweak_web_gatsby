import React, { useState } from 'react'
import { useTheme, useMediaQuery } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const ETooltip = (props) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }

  return matches ? (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        {...props}
        PopperProps={{
          disablePortal: false,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        onClick={!props.disableHoverListener && handleTooltipOpen}
      >
        {props.children}
      </Tooltip>
    </ClickAwayListener>
  ) : (
    <Tooltip {...props}>{props.children}</Tooltip>
  )
}

export default ETooltip
