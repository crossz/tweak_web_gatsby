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
import { PROMOTION_CODE } from '@utils/constant'
import classnames from 'classnames'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { toast } from 'react-toastify'
import { CopyToClipboard } from 'react-copy-to-clipboard'

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
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0.5),
    },
  },
}))
const PromotionContent = ({ whiteBg }) => {
  const classes = useStyles()
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const handleCopy = (e) => toast.success('優惠碼複製成功！')

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
            {t('cp_v2.promotion.title')}
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
            {t('cp_v2.promotion.enter')}
          </Box>
          <CopyToClipboard text={PROMOTION_CODE} onCopy={handleCopy}>
            <Box
              fontSize={isMobile ? 'body2.fontSize' : 'h6.fontSize'}
              bgcolor={whiteBg ? 'secondary.main' : 'secondary.contrastText'}
              alignItems='center'
              height={isMobile ? 18 : 32}
              display='flex'
              color={
                whiteBg ? 'secondary.contrastText' : 'prophecyPrimary.main'
              }
              borderRadius={4}
              px={isMobile ? 1 : 1.5}
              mx={isMobile ? 0.5 : 1.5}
              component='span'
              className={classes.codeWrapper}
            >
              {PROMOTION_CODE}
            </Box>
          </CopyToClipboard>
          <Typography component='div' noWrap>
            {t('cp_v2.promotion.price')}
            {/* <Box
              fontWeight='fontWeightLight'
              fontSize='body2.fontSize'
              component='span'
              pl={0.5}
              mt={0.5}
            >
              (*{t('cp_v2.promotion.tip')})
            </Box> */}
          </Typography>
        </Box>
      </Box>
      {whiteBg && (
        <Button
          className={classes.button}
          size='small'
          variant='contained'
          color='secondary'
          id='ECP_Stickybar_EH'
        >
          {t('common.book_now')}
        </Button>
      )}
    </>
  )
}

export default PromotionContent
