import React from 'react'
import ClockIcon from '@components/CampaignV2/images/clock.svg'
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Hidden,
  Box,
  Button,
  Typography,
} from '@material-ui/core'
import { PROMOTION_CODE } from '@components/CampaignV2/utils/constant'
import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
  root: {},
  icon: {
    flexShrink: 0,
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
    },
  },
  whiteBgIcon: {
    '& path': {
      stroke: theme.palette.prophecyPrimary.main,
    },
  },
  button: {
    height: theme.spacing(6),
    marginLeft: 'auto',
    fontSize: theme.typography.body1.fontSize,
    padding: theme.spacing(0, 3.5),
    fontWeight: theme.typography.fontWeightBold,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
    },
  },
  codeWrapper: {
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0.5),
    },
  },
}))
const PromotionContent = ({ whiteBg }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <>
      <Box
        color={whiteBg ? 'prophecyPrimary.main' : 'secondary.contrastText'}
        justifyContent={isMobile ? 'flex-start' : 'center'}
        display='flex'
        height='100%'
        alignItems='center'
        fontWeight='fontWeightBold'
        flexWrap={isMobile ? 'wrap' : 'nowrap'}
        flexGrow={1}
        py={1}
      >
        <Box
          width={isMobile ? '100%' : 'auto'}
          alignItems='center'
          display='flex'
          flexShrink={0}
        >
          <ClockIcon
            className={classnames(classes.icon, {
              [classes.whiteBgIcon]: whiteBg,
            })}
          />
          <Box
            pl={0.5}
            fontSize={isMobile ? 'body2.fontSize' : 'h6.fontSize'}
            component='span'
          >
            限时优惠
            <Hidden xsDown>
              <Box fontWeight='fontWeightLight' component='span'>
                ｜
              </Box>
            </Hidden>
          </Box>
        </Box>
        <Box overflow='hidden' alignItems='center' display='flex'>
          <Box
            fontSize={isMobile ? 'body2.fontSize' : 'body1.fontSize'}
            flexShrink={0}
          >
            输入
          </Box>
          <Box
            fontSize={isMobile ? 'body2.fontSize' : 'h6.fontSize'}
            bgcolor={whiteBg ? 'secondary.main' : 'secondary.contrastText'}
            alignItems='center'
            height={isMobile ? 18 : 32}
            display='flex'
            color={whiteBg ? 'secondary.contrastText' : 'prophecyPrimary.main'}
            borderRadius={4}
            px={isMobile ? 1 : 1.5}
            mx={isMobile ? 0.5 : 1.5}
            component='span'
            className={classes.codeWrapper}
          >
            {PROMOTION_CODE}
          </Box>
          <Typography component='div' noWrap>
            即享$1,500推廣價
            <Box
              fontWeight='fontWeightLight'
              fontSize='body2.fontSize'
              component='span'
              pl={0.5}
              mt={0.5}
            >
              (*只限首200名首次預約者)
            </Box>
          </Typography>
        </Box>
      </Box>
      {whiteBg && (
        <Button
          className={classes.button}
          size='small'
          variant='contained'
          color='secondary'
        >
          立即预约
        </Button>
      )}
    </>
  )
}

export default PromotionContent
