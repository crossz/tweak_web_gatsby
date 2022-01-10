import React, { useState } from 'react'
import {
  makeStyles,
  Box,
  Container,
  Typography,
  alpha,
  ImageListItem,
  ImageList,
  Button,
  Link,
  Grid,
  FormControl,
  FormHelperText,
  CircularProgress,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import RightIcon from '@images/icons/right.svg'
import { Formik } from 'formik'
import { oriSchema } from '@utils/schema'
import { throttle } from 'lodash-es'
import { DIALING_CODES, PARTNERS } from '@utils/constant'
import {
  EInputBase,
  EFormLabel,
  ESelect,
  CancelButton,
} from '@themes/components/ETextField'
import { toast } from 'react-toastify'
import ReCaptcha from '@components/ReCaptcha'
import { API_URL } from 'gatsby-env-variables'
import SimpleGoogleMap from '@components/Map/SimpleGoogleMap'

const useStyles = makeStyles((theme) => ({
  root: {},
  box01: {
    textAlign: 'center',
    padding: theme.spacing(9.5, 9.25),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1),
      paddingTop: theme.spacing(6.25),
      paddingBottom: theme.spacing(5.5),
    },
  },
  titleWrapper: {
    margin: theme.spacing(0, 2),
    marginBottom: theme.spacing(9.5),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(5.5),
    },
  },
  box01Title: {
    marginBottom: theme.spacing(2),
  },
  box01Content: {
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
  bannerWrapper: {
    height: 250,
    display: 'grid',
    [theme.breakpoints.down('xs')]: {
      height: 140,
    },
  },
  bannerBg: {
    gridArea: '1/1',
  },
  bannerCover: {
    height: '100%',
    width: '100%',
    backgroundColor: alpha(theme.palette.primary.main, 0.85),
    display: 'grid',
    position: 'relative',
    gridArea: '1/1',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(3),
    },
  },
  box02: {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    position: 'relative',
    paddingBottom: 190,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1),
      paddingBottom: 193,
    },
  },
  box02Title: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    marginTop: -184,
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      marginTop: -92,
      marginBottom: theme.spacing(3),
    },
  },
  imageList: {
    overflow: 'initial',
  },
  imageListItem: {
    height: 'auto',
  },
  imageListItemItem: {
    overflow: 'initial',
  },
  partnerItem: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 248,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.standard,
    }),
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: `0 6px 20px 0 ${alpha(theme.palette.common.black, 0.05)}`,
    },
    '& a:hover': {
      textDecoration: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(1.25),
    },
  },
  country: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.caption.fontSize,
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(0.5),
    },
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3.5),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(0.5),
      fontSize: theme.typography.body2.fontSize,
    },
  },
  partnerBtnWrapper: {
    textAlign: 'right',
    marginTop: 'auto',
  },
  viewBtn: {
    width: theme.spacing(15),
    padding: 0,
    textDecoration: 'none',
  },
  box03: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(10),
    },
  },
  form: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4),
    },
  },
  box03Title: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
    },
  },
  box03Wrapper: {
    maxWidth: 570,
    fontSize: theme.typography.body1.fontSize,
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'none',
    },
  },
  sideImg: {
    borderRadius: `0 12px 12px 0`,
    marginTop: theme.spacing(-9),
    width: `93%`,
    [theme.breakpoints.down('xs')]: {
      width: `calc(100% - ${theme.spacing(3)}px)`,
      marginTop: theme.spacing(-26),
    },
  },
  formControl: {
    '&:last-child': {
      marginLeft: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        marginTop: theme.spacing(3),
      },
    },
  },
  formControlLine: {
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  dialingCodeFormControl: {
    flexShrink: 0,
    marginRight: theme.spacing(1),
  },
  submitBtn: {
    marginTop: theme.spacing(1),
  },
  hiddenLabel: {
    opacity: 0,
  },
}))

const initialValues = {
  companyName: '',
  dialingCode: '852',
  name: '',
  phone: '',
  email: '',
}

const schema = oriSchema().pick([
  'companyName',
  'dialingCode',
  'name',
  'phone',
  'email',
])

const International = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const [loading, setLoading] = useState(false)
  const [reCapStatus, setReCapStatus] = useState(0)

  const handleFetch = async (values) => {
    try {
      const res = await fetch(`${API_URL}/applyPartner/add`, {
        method: 'POST',
        body: JSON.stringify(values), // data can be `string` or {object}!
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
      const resData = await res.json()
      if (resData?.code !== 1000)
        return Promise.reject(resData?.message || '提交失敗')
      return
    } catch (error) {
      return Promise.reject('提交失敗')
    }
  }

  return (
    <Box className={classes.root}>
      <Container className={classes.box01} maxWidth='lg'>
        <Box className={classes.titleWrapper}>
          <Typography
            className={classes.box01Title}
            variant='h4'
            color='primary'
          >
            開拓邊界，引領改變
          </Typography>
          <Typography
            className={classes.box01Content}
            variant='body1'
            color='textPrimary'
          >
            作為一家立足中國香港，連接大灣區，面向全球各地的醫療科技企業，我們致力於結合早期癌症篩查的力量及當地醫護人員的專業服務，打造便利大眾的服務網絡，將影響力帶到世界各地。
          </Typography>
        </Box>
        <Box>
          <SimpleGoogleMap></SimpleGoogleMap>
        </Box>
      </Container>
      <Container disableGutters className={classes.bannerWrapper} maxWidth='lg'>
        <StaticImage
          className={classes.bannerBg}
          src='../assets/images/international_banner_bg.jpg'
          alt='international banner'
          objectPosition='left'
        ></StaticImage>
        <Box className={classes.bannerCover} />
      </Container>
      <Box className={classes.box02}>
        <Container maxWidth='md'>
          <Typography className={classes.box02Title} variant='h6'>
            我們的合作夥伴
          </Typography>
          <ImageList
            className={classes.imageList}
            rowHeight='auto'
            cols={matches ? 1 : 3}
            gap={matches ? 16 : 24}
          >
            {PARTNERS.map(({ country, name, intro, link }, index) => (
              <ImageListItem
                key={name + index}
                classes={{
                  item: classes.imageListItemItem,
                }}
                className={classes.imageListItem}
              >
                <Link href={link || null} target='_blank' underline='none'>
                  <Box className={classes.partnerItem}>
                    <Box className={classes.country}>{country}</Box>
                    <Typography
                      className={classes.name}
                      variant='subtitle1'
                      color='primary'
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant={matches ? 'body2' : 'body1'}
                      color='textPrimary'
                    >
                      {intro}
                    </Typography>
                    <Box className={classes.partnerBtnWrapper}>
                      {link && (
                        <Button
                          className={classes.viewBtn}
                          variant='text'
                          color='primary'
                          endIcon={<RightIcon />}
                        >
                          了解更多
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Link>
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Box>
      <Box className={classes.box03}>
        <Container disableGutters maxWidth='lg'>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <StaticImage
                className={classes.sideImg}
                src='../assets/images/international_01.jpg'
                alt='international img 01'
                objectFit='fill'
              ></StaticImage>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.box03Wrapper}>
                <Typography
                  className={classes.box03Title}
                  variant='h4'
                  color='primary'
                >
                  成為合作夥伴
                </Typography>
                <Typography
                  variant={matches ? 'body2' : 'body1'}
                  color='textPrimary'
                >
                  如閣下期望與我們一起透過創新科技，推廣早期鼻咽癌篩查服務，歡迎填妥以下資料，我們將會儘快與你聯絡。
                </Typography>
                <Formik
                  initialValues={initialValues}
                  validationSchema={schema}
                  onSubmit={throttle(async (values, { resetForm }) => {
                    if (!reCapStatus) {
                      return setReCapStatus(1)
                    }
                    if (loading) return
                    try {
                      setLoading(true)
                      await handleFetch(values)
                      toast.success('已成功提交')
                      resetForm()
                    } catch (error) {
                      toast.error(error)
                    }
                    setLoading(false)
                    setReCapStatus(0)
                  }, 1000)}
                >
                  {(props) => {
                    const {
                      values,
                      handleSubmit,
                      handleChange,
                      touched,
                      errors,
                      setFieldValue,
                    } = props
                    const isError = (field) =>
                      touched[field] && Boolean(errors[field])
                    const errorText = (field) =>
                      touched[field] &&
                      errors[field] && (
                        <FormHelperText>{errors[field]}</FormHelperText>
                      )

                    const CusCancelButton = ({ field }) => (
                      <CancelButton
                        values={values}
                        touched={touched}
                        errors={errors}
                        field={field}
                        onCancel={(field) => setFieldValue(field, '')}
                      />
                    )

                    return (
                      <form
                        onSubmit={handleSubmit}
                        className={classes.form}
                        noValidate
                      >
                        <Box className={classes.formControlLine}>
                          <FormControl
                            fullWidth
                            error={isError('companyName')}
                            required
                          >
                            <EFormLabel>公司名稱/姓名</EFormLabel>
                            <EInputBase
                              id='company-ame'
                              name='companyName'
                              margin='none'
                              value={values.companyName}
                              onChange={handleChange}
                              placeholder={
                                isError('companyName')
                                  ? ''
                                  : '請輸入公司名稱/姓名'
                              }
                              type='text'
                              endAdornment={
                                <CusCancelButton field='companyName' />
                              }
                            />
                            {errorText('companyName')}
                          </FormControl>
                        </Box>
                        <Box className={classes.formControlLine}>
                          <FormControl fullWidth error={isError('name')}>
                            <EFormLabel>聯絡人姓名</EFormLabel>
                            <EInputBase
                              id='contact-name'
                              name='name'
                              margin='none'
                              value={values.name}
                              onChange={handleChange}
                              type='text'
                              endAdornment={<CusCancelButton field='name' />}
                            />
                            {errorText('name')}
                          </FormControl>
                        </Box>
                        <Box className={classes.formControlLine}>
                          <FormControl
                            fullWidth
                            error={isError('email')}
                            required
                            className={classes.formControl}
                          >
                            <EFormLabel>電郵</EFormLabel>
                            <EInputBase
                              id='email'
                              name='email'
                              margin='none'
                              value={values.email}
                              onChange={handleChange}
                              placeholder={
                                isError('email')
                                  ? ''
                                  : 'example@take2health.com'
                              }
                              endAdornment={<CusCancelButton field='email' />}
                            />
                            {errorText('email')}
                          </FormControl>
                          <Box
                            width='100%'
                            display='flex'
                            className={classes.formControl}
                          >
                            <FormControl
                              className={classes.dialingCodeFormControl}
                            >
                              <EFormLabel>電話號碼</EFormLabel>
                              <ESelect
                                labelId='dialingCode-select-label'
                                id='dialingCode-type-select'
                                name='dialingCode'
                                value={values.dialingCode}
                                onChange={handleChange}
                                displayEmpty
                              >
                                {DIALING_CODES.map((dialingCode) => (
                                  <MenuItem
                                    key={dialingCode.value}
                                    value={dialingCode.value}
                                  >
                                    {dialingCode.label}
                                  </MenuItem>
                                ))}
                              </ESelect>
                            </FormControl>
                            <FormControl fullWidth error={isError('phone')}>
                              <EFormLabel className={classes.hiddenLabel}>
                                hidden
                              </EFormLabel>
                              <EInputBase
                                id='phone'
                                name='phone'
                                margin='none'
                                value={values.phone}
                                onChange={handleChange}
                                placeholder='9876 5432'
                                endAdornment={<CusCancelButton field='phone' />}
                              />
                              {errorText('phone')}
                            </FormControl>
                          </Box>
                        </Box>
                        <Button
                          type='submit'
                          fullWidth
                          variant='contained'
                          color='secondary'
                          className={classes.submitBtn}
                          disabled={reCapStatus === 1}
                        >
                          {loading ? (
                            <CircularProgress color='inherit' size={24} />
                          ) : (
                            '提交'
                          )}
                        </Button>
                        {reCapStatus > 0 && (
                          <ReCaptcha
                            onChange={(value) => setReCapStatus(value)}
                          ></ReCaptcha>
                        )}
                      </form>
                    )
                  }}
                </Formik>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default International
