import React, { useState, useMemo } from 'react'
import { Formik, FieldArray } from 'formik'
import { throttle, omit } from 'lodash-es'
import { oriSchema } from '@utils/schema'
import { StaticImage } from 'gatsby-plugin-image'
import {
  makeStyles,
  alpha,
  Container,
  useMediaQuery,
  useTheme,
  Hidden,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { DIALING_CODES } from '@utils/constant'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import RadioGroup from '@material-ui/core/RadioGroup'
import MenuItem from '@material-ui/core/MenuItem'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
// import { Link as MuiLink } from '@material-ui/core'
import Link from '@components/Link'
import LinearProgress from '@material-ui/core/LinearProgress'
import GenderRadio from './GenderRadio'
import QuizRadio from './QuizRadio'
import SliderRadio from './SliderRadio'
import {
  EFormLabel,
  ESelect,
  EInputBase,
  CancelButton,
} from '@themes/components/ETextField'
import { AGE_OPTIONS, QUIZ, GENDER_OPTIONS } from '@utils/constant'
import { padStartNum } from '@utils'
import FlagIcon from '@images/icons/flag.svg'
import BackIcon from '@images/icons/back.svg'
import classnames from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'
import { toast } from 'react-toastify'
import ReCaptcha from '@components/ReCaptcha'
import fetchWithTimeout from '@utils/fetchWithTimeout'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: theme.spacing(82.5),
    display: 'grid',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(15),
    color: theme.palette.primary.main,
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(-2),
      marginRight: theme.spacing(-2),
      borderRadius: theme.spacing(2),
      minHeight: theme.spacing(75),
      marginTop: theme.spacing(3),
    },
  },
  quizBg: {
    gridArea: '1/1',
    height: '100%',
  },
  quizBgImg: {
    borderRadius: theme.spacing(4),
  },
  quizBanner: {
    width: 520,
    [theme.breakpoints.down('xs')]: {
      width: 210,
      paddingTop: theme.spacing(4.75),
      paddingBottom: theme.spacing(2.5),
    },
  },
  quizIcon: {
    width: 248,
    [theme.breakpoints.down('xs')]: {
      width: 110,
      paddingTop: theme.spacing(8.5),
    },
  },
  formRoot: {
    gridArea: '1/1',
    display: 'grid',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2),
      paddingBottom: theme.spacing(4),
    },
  },
  quizLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quizRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      justifyContent: 'flex-start',
    },
  },
  quizTip: {
    marginBottom: theme.spacing(3),
    color: '#818181',
    fontSize: theme.spacing(1.5),
  },
  genderLabel: {
    marginLeft: 0,
    '&:last-child': {
      marginRight: 0,
    },
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
    },
  },
  label: {
    fontSize: theme.typography.subtitle2.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  quizWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  progressWrapper: {
    paddingTop: theme.spacing(8.5),
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  progressValue: {
    transition: `0.5s ease-out`,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.body1.fontSize,
    marginLeft: theme.spacing(-3),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(-1),
      marginBottom: theme.spacing(0.5),
      fontSize: theme.typography.body2.fontSize,
    },
  },
  progressEnd: {
    opacity: 0,
  },
  linearProgressInfo: {
    position: 'relative',
  },
  flagIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
  linearProgressRoot: {
    borderRadius: 5,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  linearProgressBar: {
    borderRadius: 5,
  },
  quizTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.main,
    fontSize: theme.typography.h3.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(12.5),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      flexDirection: 'column',
      alignItems: 'flex-start',
      fontSize: theme.typography.h6.fontSize,
    },
  },
  quizNum: {
    marginRight: theme.spacing(3),
    fontSize: theme.typography.h2.fontSize,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.h4.fontSize,
      marginBottom: theme.spacing(1.5),
    },
  },
  quizLength: {
    fontSize: theme.typography.h6.fontSize,
    color: '#D2C7BC',
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.subtitle1.fontSize,
    },
  },
  quizRadioWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  },
  quizRadioLabel: {
    margin: theme.spacing(0, 1),
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      marginBottom: theme.spacing(2),
    },
  },
  quizBtnWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(4.75),
    },
  },
  preBtn: {
    textDecoration: 'none',
    fontSize: theme.typography.h6.fontSize,
    '& path': {
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.standard,
      }),
    },
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'none',
      '& path': {
        fill: theme.palette.secondary.main,
      },
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
      '& svg': {
        width: theme.spacing(2),
        height: theme.spacing(2),
      },
      paddingLeft: 0,
    },
  },
  preBtnStartIcon: {
    marginRight: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(1.5),
    },
  },
  nextBtn: {
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.overline.fontSize,
    },
  },
  formWrapper: {
    maxWidth: 372,
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },
  checkBoxWrapper: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(3),
    },
  },
  notice: {
    marginRight: theme.spacing(0),
  },
  platformLink: {
    textDecoration: 'underline',
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      fontSize: theme.typography.caption.fontSize,
    },
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  mobilePlatformLink: {
    textAlign: 'center',
    display: 'block',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(-2),
    '& .MuiButton-text': {
      fontSize: theme.typography.caption.fontSize,
    },
  },
  ageFormControl: {
    [theme.breakpoints.up('sm')]: {
      minWidth: 158,
    },
  },
  link: {
    color: theme.palette.primary.main,
  },
}))

const initialValues = {
  requiredEmailOrPhone: true,
  gender: '',
  age: '',
  quiz: QUIZ.map(() => ''),
  email: '',
  phone: '',
  dialingCode: '852',
  agreeTC: false,
}
const schema = oriSchema().pick([
  'requiredEmailOrPhone',
  'gender',
  'age',
  'quiz',
  'email',
  'dialingCode',
  'phone',
  'agreeTC',
])

const Quiz = () => {
  const classes = useStyle()
  const { t } = useI18next()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const [step, setStep] = useState(0)
  const [finishQuiz, setFinishQuiz] = useState(false)
  const [reCapStatus, setReCapStatus] = useState(0)
  const [loading, setLoading] = useState(false)

  const progressValue = useMemo(
    () => Math.round(((step - 1) / QUIZ.length) * 100),
    [step]
  )

  const handleFetch = async (values) => {
    try {
      const res = await fetchWithTimeout(`/quiz/add`, {
        values: omit(values, 'agreeTC', 'requiredEmailOrPhone'), // data can be `string` or {object}!
      })
      if (res?.code !== 1000)
        return Promise.reject(res?.message || t('status.submit.fail'))
      return
    } catch (error) {
      return Promise.reject(t('status.submit.fail'))
    }
  }

  return (
    <>
      <Box className={classes.root}>
        {step > 0 && step <= QUIZ.length ? (
          <StaticImage
            className={classes.quizBg}
            imgClassName={classes.quizBgImg}
            layout='fullWidth'
            src='../../assets/images/quiz_02.png'
            alt='quiz bg 02'
          ></StaticImage>
        ) : (
          <StaticImage
            className={classes.quizBg}
            imgClassName={classes.quizBgImg}
            layout='fullWidth'
            src='../../assets/images/quiz_01.png'
            alt='quiz bg 01'
            objectPosition='90%'
          ></StaticImage>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={throttle(async (values, { resetForm }) => {
            if (!reCapStatus) {
              return setReCapStatus(1)
            }
            if (loading) return
            setLoading(true)
            try {
              await handleFetch(values)
              toast.success(t('status.submit.success'))
              resetForm()
              setStep(8)
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
              handleChange,
              handleSubmit,
              errors,
              touched,
              setFieldTouched,
              setFieldValue,
            } = props
            const handleStartQuiz = () => {
              setFieldTouched('gender')
              setFieldTouched('age')
              if (values.gender && values.age) setStep(1)
            }

            const handleQuizBack = () =>
              setStep((oldValue) => Math.max(oldValue - 1, 1))

            const handleQuizNext = () =>
              setStep((oldValue) => {
                if (oldValue >= QUIZ.length)
                  setTimeout(() => {
                    setFinishQuiz(true)
                  }, 1500)
                return Math.min(oldValue + 1, QUIZ.length + 1)
              })

            const isError = (field) => touched[field] && Boolean(errors[field])

            const errorText = (field) =>
              touched[field] &&
              errors[field] && <FormHelperText>{errors[field]}</FormHelperText>

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
              <form onSubmit={handleSubmit} className={classes.formRoot}>
                {step === 0 && (
                  <Grid container>
                    <Grid item className={classes.quizLeft} xs={12} sm={6}>
                      <Box className={classes.quizBanner}>
                        <StaticImage
                          src='../../assets/images/quiz_cover.png'
                          alt='quiz cover'
                        ></StaticImage>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box className={classes.quizRight}>
                        <Box mb={matches ? 1 : 3}>
                          <Typography
                            variant={matches ? 'h5' : 'h4'}
                            color='primary'
                          >
                            {t('quiz.start.title')}
                          </Typography>
                        </Box>
                        <Box mb={matches ? 1 : 2.5} color='grey.900'>
                          <Typography variant={matches ? 'body2' : 'body1'}>
                            <Trans i18nKey='quiz.start.detail'>
                              來個簡單測驗，人生可能從此變得不一樣。
                              <Hidden xsDown>
                                <br />
                              </Hidden>
                              雖然早期鼻咽癌病徵不明顯，但總有迹可尋。倘若晚期才確診，5年內存活率有機會跌至70%以下。以下簡單問題經專業人士設定，讓你了解有關鼻咽癌的徵狀。
                            </Trans>
                          </Typography>
                        </Box>
                        <Typography className={classes.quizTip}>
                          <Trans i18nKey='quiz.start.reference'>
                            分析僅屬參考性質。
                            <br />
                            引致鼻咽癌的成因有很多，而且徵狀因人而異，詳情請向醫護人員查詢或與我們的專業醫護團隊聯絡。
                          </Trans>
                        </Typography>
                        <Box mb={matches ? 2 : 2}>
                          <FormControl
                            component='fieldset'
                            error={isError('gender')}
                            required
                            fullWidth={matches}
                          >
                            <EFormLabel className={classes.label}>
                              {t('form.gender.label')}
                            </EFormLabel>
                            <RadioGroup
                              name='gender'
                              value={values.gender}
                              onChange={handleChange}
                              row
                            >
                              {GENDER_OPTIONS.map((gender) => (
                                <FormControlLabel
                                  key={gender.value}
                                  className={classes.genderLabel}
                                  value={gender.value}
                                  control={
                                    <GenderRadio label={t(gender.label)} />
                                  }
                                />
                              ))}
                            </RadioGroup>
                            {errorText('gender')}
                          </FormControl>
                        </Box>
                        <Box mb={matches ? 3 : 4.5}>
                          <FormControl
                            className={classes.ageFormControl}
                            fullWidth={matches}
                            required
                            error={isError('age')}
                          >
                            <EFormLabel className={classes.label}>
                              {t('form.age.label')}
                            </EFormLabel>
                            <ESelect
                              labelId='age-select-label'
                              id='age-type-select'
                              name='age'
                              value={values.age}
                              onChange={handleChange}
                              displayEmpty
                            >
                              <MenuItem value='' disabled>
                                {t('form.placeholder.select')}
                              </MenuItem>
                              {AGE_OPTIONS.map((age) => (
                                <MenuItem key={age.value} value={age.value}>
                                  {t(age.label)}
                                </MenuItem>
                              ))}
                            </ESelect>
                            {errorText('age')}
                          </FormControl>
                        </Box>
                        <Box>
                          <Button
                            variant='contained'
                            color='secondary'
                            onClick={handleStartQuiz}
                            fullWidth={matches}
                          >
                            {t('quiz.start.button')}
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                )}
                {step > 0 && !finishQuiz && step <= QUIZ.length + 1 && (
                  <Container
                    className={classes.quizWrapper}
                    disableGutters
                    maxWidth='sm'
                  >
                    <Box className={classes.progressWrapper}>
                      <Box width='100%'>
                        <Box className={classes.linearProgressInfo}>
                          <Box
                            className={classnames(
                              classes.progressValue,
                              step - 1 === QUIZ.length && classes.progressEnd
                            )}
                            style={{
                              transform: `translateX(${progressValue}%)`,
                            }}
                          >
                            {progressValue}%
                          </Box>
                          <FlagIcon className={classes.flagIcon}></FlagIcon>
                        </Box>
                        <LinearProgress
                          classes={{
                            root: classes.linearProgressRoot,
                            bar: classes.linearProgressBar,
                          }}
                          color='primary'
                          variant='determinate'
                          value={progressValue}
                        />
                      </Box>
                    </Box>
                    <FieldArray name='quiz'>
                      {() =>
                        QUIZ.length &&
                        values?.quiz?.map(
                          (item, index) =>
                            (index + 1 === step ||
                              (index + 2 === step &&
                                step === QUIZ.length + 1)) && (
                              <FormControl
                                fullWidth
                                key={index}
                                component='fieldset'
                              >
                                <Box className={classes.quizTitle}>
                                  <Box
                                    className={classes.quizNum}
                                    component='span'
                                  >
                                    {padStartNum(Math.min(step, QUIZ.length))}
                                    <Box
                                      className={classes.quizLength}
                                      component='span'
                                    >
                                      /{padStartNum(QUIZ.length)}
                                    </Box>
                                  </Box>
                                  <Box>{t(QUIZ[index].question)}</Box>
                                </Box>
                                {QUIZ[index]?.type === 'slider' ? (
                                  <SliderRadio
                                    name={`quiz.${index}`}
                                    answers={QUIZ[index]?.answers}
                                    onChange={handleChange}
                                    value={item}
                                  />
                                ) : (
                                  <RadioGroup
                                    className={classes.quizRadioWrapper}
                                    name={`quiz.${index}`}
                                    value={item}
                                    onChange={handleChange}
                                    row
                                  >
                                    {QUIZ[index]?.answers?.map(
                                      (answer, answerIndex) => (
                                        <FormControlLabel
                                          className={classes.quizRadioLabel}
                                          key={answer}
                                          value={answer}
                                          control={
                                            <QuizRadio index={answerIndex} />
                                          }
                                        />
                                      )
                                    )}
                                  </RadioGroup>
                                )}
                              </FormControl>
                            )
                        )
                      }
                    </FieldArray>
                    {step <= QUIZ.length && (
                      <Box className={classes.quizBtnWrapper}>
                        {step !== 1 && (
                          <Button
                            className={classes.preBtn}
                            variant='text'
                            color='primary'
                            onClick={handleQuizBack}
                            startIcon={<BackIcon />}
                            classes={{
                              startIcon: classes.preBtnStartIcon,
                            }}
                          >
                            {t('quiz.pre')}
                          </Button>
                        )}
                        {step <= QUIZ.length && values.quiz[step - 1] && (
                          <Button
                            className={classes.nextBtn}
                            variant='contained'
                            color='secondary'
                            onClick={handleQuizNext}
                          >
                            {t('quiz.next')}
                          </Button>
                        )}
                      </Box>
                    )}
                  </Container>
                )}
                {step === 7 && finishQuiz && (
                  <Grid container>
                    <Grid className={classes.quizLeft} item xs={12} sm={6}>
                      <Box className={classes.quizIcon}>
                        <StaticImage
                          width={248}
                          src='../../assets/images/icons/completed.svg'
                          alt='quiz cover'
                        ></StaticImage>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box className={classes.quizRight}>
                        <Box
                          textAlign={matches ? 'center' : 'left'}
                          mb={matches ? 1 : 2}
                        >
                          <Typography variant='h4' color='primary'>
                            {t('quiz.last.title')}
                          </Typography>
                        </Box>
                        <Box
                          textAlign={matches ? 'center' : 'left'}
                          mb={matches ? 2 : 2.5}
                          color='grey.900'
                        >
                          <Typography variant={matches ? 'caption' : 'body1'}>
                            {t('quiz.last.detail')}
                          </Typography>
                        </Box>
                        <Box className={classes.formWrapper}>
                          <Box mb={1.5}>
                            <FormControl fullWidth error={isError('email')}>
                              <EFormLabel>{t('form.email.label')}</EFormLabel>
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
                          </Box>
                          <Box textAlign='center'>{t('common.or')}</Box>
                          <Box mb={matches ? 2 : 4}>
                            <Box mb={1}>
                              <EFormLabel>{t('form.phone.label')}</EFormLabel>
                            </Box>
                            <Box display='flex'>
                              <Box mr={0.5}>
                                <FormControl
                                  className={classes.dialingCode}
                                  required
                                >
                                  <ESelect
                                    labelId='dialingCode-select-label'
                                    id='dialingCode-type-select'
                                    name='dialingCode'
                                    value={values.dialingCode}
                                    onChange={handleChange}
                                    input={<EInputBase />}
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
                              </Box>
                              <FormControl fullWidth error={isError('phone')}>
                                <EInputBase
                                  id='phone'
                                  name='phone'
                                  margin='none'
                                  value={values.phone}
                                  onChange={handleChange}
                                  placeholder={t('form.phone.placeholder')}
                                  endAdornment={
                                    <CusCancelButton field='phone' />
                                  }
                                />
                                {errorText('phone')}
                              </FormControl>
                            </Box>
                          </Box>
                          <FormControl
                            className={classes.checkBoxWrapper}
                            error={isError('agreeTC')}
                            required
                          >
                            <FormControlLabel
                              control={<Checkbox color='secondary' />}
                              className={classes.notice}
                              label={
                                <Box
                                  fontSize={matches ? 10 : 'caption.fontSize'}
                                  component='span'
                                  lineHeight={1}
                                >
                                  <Trans i18nKey='quiz.agreement'>
                                    本人已明白及同意Take2 Health Limited
                                    的網站於take2health.net之網站
                                    <Link
                                      className={classes.link}
                                      to='/terms-and-conditions/privacy-policy/'
                                      underline='always'
                                    >
                                      私隱政策
                                    </Link>
                                    <Link
                                      className={classes.link}
                                      to='/terms-and-conditions/personal-information-collection-statement/'
                                      underline='always'
                                    >
                                      個人資料收集聲明
                                    </Link>
                                    。
                                  </Trans>
                                </Box>
                              }
                              onChange={handleChange}
                              name='agreeTC'
                            />
                            {errorText('agreeTC')}
                          </FormControl>
                        </Box>
                        <Box
                          display='flex'
                          flexDirection={matches ? 'column' : 'row'}
                        >
                          <Button
                            type='submit'
                            variant='contained'
                            color='secondary'
                            fullWidth={matches}
                            disabled={reCapStatus === 1}
                          >
                            {loading ? (
                              <CircularProgress color='inherit' size={24} />
                            ) : (
                              t('common.submit')
                            )}
                          </Button>
                          <Hidden xsDown>
                            <Link
                              className={classes.platformLink}
                              to={process.env.GATSBY_SITE_URL}
                            >
                              {t('quiz.direct_sign_up')}
                            </Link>
                          </Hidden>
                          <Hidden smUp>
                            <Link
                              className={classnames(
                                classes.platformLink,
                                classes.mobilePlatformLink
                              )}
                              to={process.env.GATSBY_SITE_URL}
                            >
                              {t('quiz.direct_sign_up')}
                            </Link>
                          </Hidden>
                        </Box>
                        {reCapStatus > 0 && (
                          <ReCaptcha
                            onChange={(value) => setReCapStatus(value)}
                          ></ReCaptcha>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                )}
                {step === 8 && (
                  <Grid container>
                    <Grid className={classes.quizLeft} item xs={12} sm={6}>
                      <Box className={classes.quizIcon}>
                        <StaticImage
                          src='../../assets/images/icons/sent.svg'
                          alt='quiz cover'
                        ></StaticImage>{' '}
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box
                        textAlign={matches ? 'center' : 'left'}
                        className={classes.quizRight}
                      >
                        <Box mb={matches ? 1 : 2}>
                          <Typography
                            variant={matches ? 'h5' : 'h4'}
                            color='primary'
                          >
                            {t('quiz.final.title')}
                          </Typography>
                        </Box>
                        <Box
                          fontSize='body1.fontSize'
                          color='grey.900'
                          maxWidth={386}
                          lineHeight={1.5}
                        >
                          <Box
                            fontWeight='fontWeightBold'
                            mb={matches ? 2 : 1.5}
                          >
                            {t('quiz.final.subtitle')}
                          </Box>
                          <Box
                            fontSize={
                              matches ? 'caption.fontSize' : 'body1.fontSize'
                            }
                          >
                            {t('quiz.final.detail_1')}
                            <br />
                            <Hidden smUp>
                              <br />
                            </Hidden>
                            {t('quiz.final.detail_2')}
                          </Box>
                        </Box>
                        <Box
                          display='flex'
                          flexWrap={matches ? 'wrap' : 'nowrap'}
                          maxWidth={482}
                          mt={5}
                        >
                          <Box
                            flexShrink={0}
                            width={matches ? '100%' : 'auto'}
                            mr={matches ? 0 : 2}
                            mb={matches ? 1 : 0}
                          >
                            <Button
                              size={matches ? 'small' : 'medium'}
                              variant='outlined'
                              color='primary'
                              fullWidth
                              href={process.env.GATSBY_SITE_URL}
                              target='_blank'
                            >
                              {t('common.learn_more')}
                            </Button>
                          </Box>
                          <Button
                            size={matches ? 'small' : 'medium'}
                            fullWidth
                            variant='contained'
                            color='secondary'
                            href={process.env.GATSBY_SITE_URL}
                            target='_blank'
                          >
                            {t('common.sign_up_as_menber')}
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                )}
              </form>
            )
          }}
        </Formik>
      </Box>
    </>
  )
}

export default Quiz
