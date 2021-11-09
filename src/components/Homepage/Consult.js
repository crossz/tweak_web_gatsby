import React from 'react'
import { makeStyles } from '@material-ui/core/'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import ConsultImage from '@images/homepage_consult.jpg'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {},
  bg: {
    width: '100%',
    height: theme.spacing(66),
    backgroundImage: `url(${ConsultImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center right',
  },
}))

const Consult = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth='xl'>
      <Grid container>
        <Grid item xs={5}>
          <Box className={classes.bg}></Box>
        </Grid>
        <Grid item xs={7}>
          <Box>
            <Typography variant='h5' color='primary' component='div'>
              立即登記 線上專業諮詢
              <Box>
                只需輸入簡單資料，便可與我們保持聯繫，亦可享用線上醫療諮詢服務或特快預約測試，接收專業資訊、測試提示、活動推廣及首輪優惠等。條款及細則
              </Box>
            </Typography>
            <Box>
              <Button variant='outlined' color='primary'>
                了解更多
              </Button>
              <Button variant='contained' color='secondary'>
                立即登記
              </Button>
            </Box>
            <Link to=''>了解更多我們的產品</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Consult
