import React from 'react'
import WhatsappIcon from '@images/icons/whatsapp.svg'
import FacebookIcon from '@images/icons/facebook.svg'
import LinkIcon from '@images/icons/link.svg'
import MessengerIcon from '@images/icons/messenger.svg'
import useSiteMetadata from '@hooks/useSiteMetadata'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const useStyles = makeStyles((theme) => ({
  btn: {
    '& path': {
      fill: theme.palette.primary.main,
    },
    '& svg': {
      [theme.breakpoints.down('xs')]: {
        width: theme.spacing(2.5),
        height: theme.spacing(2.5),
      },
    },
  },
}))

const Links = ({ href }) => {
  const classes = useStyles()
  const { whatsapp, messenger, facebook } = useSiteMetadata()

  const links = [
    {
      Icon: FacebookIcon,
      type: 'link',
      link: facebook,
    },
    {
      Icon: WhatsappIcon,
      type: 'link',
      link: whatsapp,
    },
    {
      Icon: MessengerIcon,
      type: 'link',
      link: messenger,
    },
    {
      Icon: LinkIcon,
      type: 'copy',
      link: href,
    },
  ]

  return (
    <Box display='flex' mr={-1.5}>
      {links.map(({ Icon, type, link }, index) => (
        <Box key={index}>
          {type === 'link' && (
            <Link href={link} target='_blank'>
              <IconButton className={classes.btn}>
                <Icon></Icon>
              </IconButton>
            </Link>
          )}
          {type === 'copy' && (
            <CopyToClipboard text={link}>
              <IconButton className={classes.btn}>
                <Icon></Icon>
              </IconButton>
            </CopyToClipboard>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default Links
