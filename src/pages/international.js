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
} from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import RightIcon from '@images/icons/right.svg'
import { Formik } from 'formik'
import { oriSchema } from '@utils/schema'
import { throttle } from 'lodash-es'
import { DIALING_CODES, REGIONS } from '@utils/constant'
import {
  EInputBase,
  EFormLabel,
  ESelect,
  CancelButton,
} from '@themes/components/ETextField'
import { toast } from 'react-toastify'

const useStyles = makeStyles((theme) => ({
  root: {},
  box01: {
    textAlign: 'center',
    padding: theme.spacing(9.5, 9.25),
  },
  box01Title: {
    marginBottom: theme.spacing(2),
  },
  bannerWrapper: {
    height: 250,
    display: 'grid',
  },
  bannerBg: {
    height: '100%',
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
    paddingBottom: theme.spacing(23.75),
  },
  box02Title: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    marginTop: -184,
    marginBottom: theme.spacing(6),
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
  },
  country: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.caption.fontSize,
    marginBottom: theme.spacing(1.5),
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3.5),
  },
  partnerBtnWrapper: {
    textAlign: 'right',
    marginTop: theme.spacing(3),
    minHeight: theme.spacing(7),
  },
  viewBtn: {
    width: theme.spacing(15),
    padding: 0,
    textDecoration: 'none',
  },
  box03: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(15),
  },
  form: {
    marginTop: theme.spacing(5),
  },
  box03Title: {
    marginBottom: theme.spacing(3),
  },
  box03Wrapper: {
    maxWidth: 570,
    fontSize: theme.typography.body1.fontSize,
  },
  sideImg: {
    borderRadius: `0 12px 12px 0`,
    marginTop: theme.spacing(-9),
    width: `85%`,
  },
  formControl: {
    '&:last-child': {
      marginLeft: theme.spacing(3),
    },
  },
  formControlLine: {
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'flex-start',
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

const partners = [
  {
    country: '馬來西亞',
    name: 'Pantai Premier Pathology',
    intro:
      '馬來西亞規模最大的醫學診斷企業之一，隸屬全球知名醫療集團IHH Healthcare旗下。',
    link: '',
  },
  {
    country: '馬來西亞',
    name: 'Pantai Premier Pathology',
    intro:
      '馬來西亞規模最大的醫學診斷企業之一，隸屬全球知名醫療集團IHH Healthcare旗下。',
    link: '',
  },
  {
    country: '馬來西亞',
    name: 'Pantai Premier Pathology',
    intro:
      '馬來西亞規模最大的醫學診斷企業之一，隸屬全球知名醫療集團IHH Healthcare旗下。',
    link: '',
  },
  {
    country: '馬來西亞',
    name: 'Pantai Premier Pathology',
    intro:
      '馬來西亞規模最大的醫學診斷企業之一，隸屬全球知名醫療集團IHH Healthcare旗下。',
    link: '',
  },
  {
    country: '馬來西亞',
    name: 'Pantai Premier Pathology',
    intro:
      '馬來西亞規模最大的醫學診斷企業之一，隸屬全球知名醫療集團IHH Healthcare旗下。',
    link: '',
  },
]

const initialValues = {
  companyName: '',
  dialingCode: '852',
  contactName: '',
  phone: '',
  email: '',
  area: '',
}

const schema = oriSchema().pick([
  'companyName',
  'dialingCode',
  'contactName',
  'phone',
  'email',
  'area',
])

const International = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values) => {
    try {
      const res = await fetch(
        `${process.env.GATSBY_API_URL}/applyPartner/add`,
        {
          method: 'POST',
          body: JSON.stringify(values), // data can be `string` or {object}!
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
        }
      )
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
        <Typography className={classes.box01Title} variant='h5' color='primary'>
          開拓邊界，引領改變
        </Typography>
        <Typography variant='body1' color='textPrimary'>
          作為一家立足中國香港，連接大灣區，面向全球各地的醫療科技企業，我們致力於結合早期癌症篩查的力量及當地醫護人員的專業服務，打造便利大眾的服務網絡，將影響力帶到世界各地。
        </Typography>
      </Container>
      <Container disableGutters className={classes.bannerWrapper} maxWidth='lg'>
        <StaticImage
          className={classes.bannerBg}
          src='../assets/images/international_banner_bg.jpg'
          alt='international banner'
          objectFit='fill'
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
            cols={3}
            gap={24}
          >
            {partners.map(({ country, name, intro, link }, index) => (
              <ImageListItem
                key={name + index}
                classes={{
                  item: classes.imageListItemItem,
                }}
                className={classes.imageListItem}
              >
                <Box className={classes.partnerItem}>
                  <Link href={link || null} target='_blank'>
                    <Box className={classes.country}>{country}</Box>
                    <Typography
                      className={classes.name}
                      variant='subtitle1'
                      color='primary'
                    >
                      {name}
                    </Typography>
                    <Typography variant='body1' color='textPrimary'>
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
                  </Link>
                </Box>
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
                  variant='h5'
                  color='primary'
                >
                  成為合作夥伴
                </Typography>
                <Box>
                  <Box>
                    如閣下期望與我們一起透過創新科技，推廣早期鼻咽癌篩查服務，歡迎填妥以下資料，我們將會儘快與你聯絡。
                  </Box>
                </Box>
                <Formik
                  initialValues={initialValues}
                  validationSchema={schema}
                  onSubmit={throttle(async (values) => {
                    if (loading) return
                    try {
                      setLoading(true)
                      await handleSubmit(values)
                      toast.success('已成功提交')
                    } catch (error) {
                      toast.error(error)
                    }
                    setLoading(false)
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
                          <FormControl
                            fullWidth
                            error={isError('contactName')}
                            required
                            className={classes.formControl}
                          >
                            <EFormLabel>聯絡人姓名</EFormLabel>
                            <EInputBase
                              id='contact-name'
                              name='contactName'
                              margin='none'
                              value={values.contactName}
                              onChange={handleChange}
                              type='text'
                              endAdornment={
                                <CusCancelButton field='contactName' />
                              }
                            />
                            {errorText('contactName')}
                          </FormControl>
                          <FormControl
                            fullWidth
                            error={isError('area')}
                            className={classes.formControl}
                          >
                            <EFormLabel>所在地區</EFormLabel>
                            <ESelect
                              displayEmpty
                              labelId='area-label'
                              id='area'
                              name='area'
                              value={values.area}
                              onChange={handleChange}
                            >
                              {REGIONS[0]?.districts?.map((district) => (
                                <MenuItem
                                  key={district.value}
                                  value={district.value}
                                >
                                  {district.label}
                                </MenuItem>
                              ))}
                            </ESelect>
                            {errorText('area')}
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
                        >
                          {loading ? (
                            <CircularProgress color='inherit' size={24} />
                          ) : (
                            '提交'
                          )}
                        </Button>
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
