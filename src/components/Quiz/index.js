import React, { useState, useMemo } from 'react'
import { Formik, FieldArray } from 'formik'
import { throttle } from 'lodash-es'
import { oriSchema } from '@utils/schema'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles, alpha, Container } from '@material-ui/core'
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
import LinearProgress from '@material-ui/core/LinearProgress'
import TextField from '@material-ui/core/TextField'
import GenderRadio from './GenderRadio'
import QuizRadio from './QuizRadio'
import { EFormLabel, ESelect } from '@themes/components/ETextField'
import { AGES, QUIZ } from '@utils/constant'
import { padStartNum } from '@utils'
import FlagIcon from '@images/icons/flag.svg'
import BackIcon from '@images/icons/back.svg'
import classnames from 'classnames'

const useStyle = makeStyles((theme) => ({
  root: {
    height: theme.spacing(82.5),
    borderRadius: theme.spacing(4),
    display: 'grid',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(15),
    color: theme.palette.primary.main,
    overflow: 'hidden',
  },
  quizBg: {
    gridArea: '1/1',
  },
  formRoot: {
    gridArea: '1/1',
    display: 'grid',
    position: 'relative',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(10),
  },
  quizLeft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderLabel: {
    marginLeft: 0,
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
    height: 515,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  progress: {
    position: 'relative',
  },
  progressValue: {
    transition: `0.5s ease-out`,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.body1.fontSize,
    marginLeft: theme.spacing(-3),
    marginBottom: theme.spacing(1),
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
  },
  quizNum: {
    marginRight: theme.spacing(3),
    fontSize: theme.typography.h2.fontSize,
  },
  quizLength: {
    fontSize: theme.typography.h6.fontSize,
    color: '#D2C7BC',
    fontWeight: theme.typography.fontWeightLight,
  },
  quizRadioWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  quizRadioLabel: {
    margin: theme.spacing(0, 1),
  },
  quizBtnWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
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
  },
  preBtnStartIcon: {
    marginRight: theme.spacing(4),
  },
  nextBtn: {
    marginLeft: 'auto',
  },
}))

const initialValues = {
  gender: '',
  age: '',
  quiz: QUIZ.map((quiz, index) => {
    return {
      label: `quiz${index + 1}`,
      value: '',
    }
  }),
  email: '',
  phone: '',
  dialingCode: '',
}
const schema = oriSchema({ emailOrPhone: true }).pick([
  'gender',
  'age',
  'email',
  'dialingCode',
  'phone',
])

const Quiz = () => {
  const classes = useStyle()
  const [step, setStep] = useState(1)
  const [finishQuiz, setFinishQuiz] = useState(false)
  const progressValue = useMemo(
    () => Math.round(((step - 1) / QUIZ.length) * 100),
    [step]
  )

  return (
    <Box className={classes.root}>
      {step > 0 && step <= QUIZ.length ? (
        <StaticImage
          className={classes.quizBg}
          layout='fullWidth'
          src='../../assets/images/quiz_02.png'
          alt='quiz bg 01'
          objectFit='fill'
        ></StaticImage>
      ) : (
        <StaticImage
          className={classes.quizBg}
          layout='fullWidth'
          src='../../assets/images/quiz_01.png'
          alt='quiz bg 01'
          objectFit='fill'
        ></StaticImage>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={throttle(async (values) => {
          setStep(8)
        }, 1000)}
      >
        {(props) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            isSubmitting,
            setFieldTouched,
          } = props

          const isError = (field) => touched[field] && Boolean(errors[field])
          const errorText = (field) => (
            <FormHelperText>{touched[field] && errors[field]}</FormHelperText>
          )
          console.log('values', values)
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

          return (
            <form onSubmit={handleSubmit} className={classes.formRoot}>
              {step === 0 && (
                <Grid container>
                  <Grid item className={classes.quizLeft} xs={6}>
                    <Box maxWidth={520}>
                      <StaticImage
                        src='../../assets/images/quiz_cover.png'
                        alt='quiz cover'
                      ></StaticImage>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box pt={11.75} pr={3}>
                      <Box mb={3}>
                        <Typography variant='h4' color='primary'>
                          免費測驗 了解健康
                        </Typography>
                      </Box>
                      <Box mb={2.5} color='grey.900'>
                        <Typography variant='body1'>
                          來個簡單測驗？可能逆轉一切！
                          <br />
                          雖然早期鼻咽癌病徵不明顯，但總有迹可尋。倘若晚期才確診，5年內存活率有機會跌至70%以下。以下簡單問題經專業人士設定，讓你了解鼻咽癌的徵狀。
                        </Typography>
                      </Box>
                      <Box mb={4}>
                        <FormControl
                          component='fieldset'
                          error={isError('gender')}
                          required
                        >
                          <EFormLabel className={classes.label}>
                            性別
                          </EFormLabel>
                          <RadioGroup
                            name='gender'
                            value={values.gender}
                            onChange={handleChange}
                            row
                          >
                            <FormControlLabel
                              className={classes.genderLabel}
                              value='男性'
                              control={<GenderRadio />}
                            />
                            <FormControlLabel
                              className={classes.genderLabel}
                              value='女性'
                              control={<GenderRadio />}
                            />
                          </RadioGroup>
                          {errorText('gender')}
                        </FormControl>
                      </Box>
                      <Box mb={5.75}>
                        <FormControl required error={isError('age')}>
                          <EFormLabel className={classes.label}>
                            年齡
                          </EFormLabel>
                          <ESelect
                            labelId='age-select-label'
                            id='age-type-select'
                            name='age'
                            value={values.age}
                            onChange={handleChange}
                          >
                            <MenuItem value='' disabled>
                              请选择
                            </MenuItem>
                            {AGES.map((age) => (
                              <MenuItem key={age} value={age}>
                                {age}
                              </MenuItem>
                            ))}
                          </ESelect>
                          {errorText('age')}
                        </FormControl>
                      </Box>
                      <Button
                        variant='contained'
                        color='secondary'
                        onClick={handleStartQuiz}
                      >
                        開始免費測驗
                      </Button>
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
                  <Box width='100%' display='flex' alignItems='center'>
                    <Box width='100%' mr={1}>
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
                          index + 1 === step &&
                          (QUIZ[index]?.type === 'slider' ? null : (
                            <FormControl key={index} component='fieldset'>
                              <Box className={classes.quizTitle}>
                                <Box
                                  className={classes.quizNum}
                                  component='span'
                                >
                                  {padStartNum(step)}
                                  <Box
                                    className={classes.quizLength}
                                    component='span'
                                  >
                                    /{padStartNum(QUIZ.length)}
                                  </Box>
                                </Box>
                                <Box>{QUIZ[index].question}</Box>
                              </Box>
                              <RadioGroup
                                className={classes.quizRadioWrapper}
                                name={`quiz[${index}].value`}
                                value={item.value}
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
                            </FormControl>
                          ))
                      )
                    }
                  </FieldArray>
                  {step > 0 && step <= QUIZ.length && (
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
                          返回上一题
                        </Button>
                      )}
                      {step <= QUIZ.length && values.quiz[step - 1].value && (
                        <Button
                          className={classes.nextBtn}
                          variant='contained'
                          color='secondary'
                          onClick={handleQuizNext}
                        >
                          下一题
                        </Button>
                      )}
                    </Box>
                  )}
                </Container>
              )}
              {step === 7 && finishQuiz && (
                <Grid container>
                  <Grid item xs={6}>
                    images
                  </Grid>
                  <Grid item xs={6}>
                    <Box mb={3}>
                      <Typography variant='h4' color='primary'>
                        最後一個步驟免費獲取結果!
                      </Typography>
                    </Box>
                    <Box mb={2.5}>
                      <Typography variant='body1'>
                        來個簡單測驗？可能逆轉一切！
                        <br />
                        請輸入電郵以獲取結果，及後可通過得易健康服務平台網上系統免費登記成為Take2
                        ExtraCare會員,
                        或輸入電話號碼與線上註冊護士咨詢服務或產品內容!{' '}
                      </Typography>
                    </Box>
                    <TextField
                      variant='outlined'
                      margin='normal'
                      fullWidth
                      id='email'
                      label='電郵'
                      name='email'
                      placeholder='example@take2health.com'
                      value={values.email}
                      onChange={handleChange}
                    />
                    或
                    <FormControl>
                      <ESelect
                        labelId='dialing-code-select-label'
                        id='dialing-code-type-select'
                        name='dialingCode'
                        label='dialingCode'
                        value={values.dialingCode}
                        onChange={handleChange}
                        placeholder='请选择'
                      >
                        <MenuItem value=''>请选择</MenuItem>
                        {DIALING_CODES.map((dialingCode) => (
                          <MenuItem
                            value={dialingCode.value}
                            key={dialingCode.value}
                          >
                            {dialingCode.label}
                          </MenuItem>
                        ))}
                      </ESelect>
                    </FormControl>
                    <TextField
                      variant='outlined'
                      margin='normal'
                      fullWidth
                      id='phone'
                      label='電話號碼'
                      name='phone'
                      placeholder='9876 5432'
                      value={values.phone}
                      onChange={handleChange}
                    />
                    <Button type='submit' variant='contained' color='secondary'>
                      提交
                    </Button>
                  </Grid>
                </Grid>
              )}
              {step === 8 && (
                <Grid container>
                  <Grid item xs={6}>
                    images
                  </Grid>
                  <Grid item xs={6}>
                    <Box mb={3}>
                      <Typography variant='h4' color='primary'>
                        多謝參與！
                      </Typography>
                    </Box>
                    <Typography variant='h6' color='initial'>
                      測驗經已完成！
                    </Typography>
                    <Box mb={2.5}>
                      <Typography variant='body1'>
                        以上問題都與鼻咽癌息息相關，如持續出現上述一項或以上病徵，建議儘快向醫生諮詢。
                        <br />
                        你亦可立即登記，免費成為Take2 Extra
                        Care會員，預約進行檢測，或享用得易健康網上平台的服務。
                      </Typography>
                    </Box>
                    <Box display='flex'>
                      <Button variant='outlined' color='primary'>
                        了解更多
                      </Button>
                    </Box>
                    <Button variant='contained' color='secondary'>
                      登記成為會員
                    </Button>
                  </Grid>
                </Grid>
              )}
            </form>
          )
        }}
      </Formik>
    </Box>
  )
}

export default Quiz
