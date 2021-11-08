import React from 'react'
import Linkedin from '@images/icons/linkedin.svg'
import Youtube from '@images/icons/youtube.svg'
import Whatsapp from '@images/icons/whatsapp.svg'
import Facebook from '@images/icons/facebook.svg'
import useSiteMetadata from '@hooks/useSiteMetadata'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
  icon: {
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
}))

const SocialLinks = () => {
  const classes = useStyles()
  const { whatsapp, linkedin, youtube, facebook } = useSiteMetadata()
  const socialList = [
    {
      icon: Facebook,
      url: facebook,
    },
  ]
  console.log('whatsapp', whatsapp)
  return (
    <Box display='flex'>
      <Link href={facebook} target='_blank'>
        <Facebook className={classes.icon}></Facebook>
      </Link>
      <Link href={youtube} target='_blank'>
        <Youtube className={classes.icon}></Youtube>
      </Link>
      <Link href={whatsapp} target='_blank'>
        <Whatsapp className={classes.icon}></Whatsapp>
      </Link>
      <Link href={linkedin} target='_blank'>
        <Linkedin className={classes.icon}></Linkedin>
      </Link>
    </Box>
  )
}

export default SocialLinks
