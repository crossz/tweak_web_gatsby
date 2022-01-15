import React, { useState } from 'react'
import {
  makeStyles,
  Box,
  Container,
  Typography,
  Grid,
  alpha,
  FormControl,
  FormHelperText,
  CircularProgress,
  MenuItem,
  useTheme,
  useMediaQuery,
  Button,
  IconButton,
} from '@material-ui/core'
import { throttle, omit } from 'lodash-es'
import { graphql, Link } from 'gatsby'
import CareerItem from '@components/CareerItem'
import { Formik } from 'formik'
import { oriSchema } from '@utils/schema'
import { DEPARTMENT_OPTIONS, AREA_OPTIONS } from '@utils/constant'
import {
  EInputBase,
  EFormLabel,
  ESelect,
  CancelButton,
} from '@themes/components/ETextField'
import { toast } from 'react-toastify'
import { StaticImage } from 'gatsby-plugin-image'
import ArrowIcon from '@images/icons/arrow.svg'
import classnames from 'classnames'
import Search from '@components/Search'
import ReCaptcha from '@components/ReCaptcha'

const useStyles = makeStyles((theme) => ({
  root: {},
  box01: {
    paddingTop: theme.spacing(9.5),
    paddingBottom: theme.spacing(8.5),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(19.5),
    },
  },
  box01Title: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
  headerRoot: {
    textAlign: 'center',
    padding: theme.spacing(0, 3),
  },
  countWrapper: {
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    height: 138,
    padding: theme.spacing(4, 8),
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: theme.spacing(9.5),
    [theme.breakpoints.down('xs')]: {
      height: 122,
      marginTop: theme.spacing(5),
      padding: theme.spacing(4, 3),
      paddingTop: theme.spacing(4.5),
      alignItems: 'flex-start',
    },
  },
  careersWrapper: {
    padding: theme.spacing(0, 8),
    marginTop: theme.spacing(-1.5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3),
      marginTop: theme.spacing(-4.25),
    },
  },
  box03: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(15),
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(24),
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
      marginTop: theme.spacing(6),
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
  pagination: {
    margin: '0 auto',
    marginTop: theme.spacing(6.5),
    marginBottom: theme.spacing(-1.5),
    width: 254,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: theme.typography.body2.fontSize,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4.5),
      width: '100%',
      fontSize: theme.typography.caption.fontSize,
    },
  },
  pageInfo: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    color: theme.palette.grey[600],
  },
  prePageBtn: {
    transform: `rotate(-180deg)`,
  },
  curPageBtn: {
    display: 'flex',
    height: theme.spacing(3.5),
    width: theme.spacing(3.5),
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: theme.spacing(0.5),
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  disableLink: {
    pointerEvents: 'none',
    '& path': {
      fill: theme.palette.grey[400],
    },
  },
}))

const initialValues = {
  requiredArea: true,
  requiredName: true,
  name: '',
  email: '',
  area: '',
  department: '',
}

const schema = oriSchema().pick(['name', 'email', 'area', 'department'])

const JoinUs = ({ data, pageContext, location }) => {
  const classes = useStyles()
  const { totalCount } = data?.allMdx?.pageInfo
  const { humanPageNumber, nextPagePath, previousPagePath, numberOfPages } =
    pageContext
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const curPageCareers = data?.allMdx?.nodes || []
  const [careers, setCareers] = useState(curPageCareers || [])
  const [searching, setSearching] = useState(false)
  const allCareer = data?.allCareer?.nodes || []
  const [loading, setLoading] = useState(false)
  const [reCapStatus, setReCapStatus] = useState(0)

  const handleFetch = async (values) => {
    try {
      const res = await fetch(`${process.env.GATSBY_API_URL}/joinUs/add`, {
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
      <Container className={classes.box01} disableGutters maxWidth='md'>
        <Container className={classes.headerRoot} disableGutters maxWidth='sm'>
          <Typography
            className={classes.box01Title}
            variant='h4'
            color='primary'
          >
            加入我們
          </Typography>
          <Typography variant={matches ? 'body2' : 'body1'} color='textPrimary'>
            作為一家初創企業，我們期待與更多生物科技行業的專才，及各行業的專業人士合作，攜手帶領
            Take2 Health在本地及海外市場拓展，改寫人類健康。
            <br />
            <br />
            誠邀閣下加入我們團隊，成為我們一份子，一起為人類健康努力，共同發掘無限可能。
          </Typography>
        </Container>
        <Box className={classes.countWrapper}>
          <Typography variant='h5' color='primary'>
            瀏覽現有空缺 ({totalCount})
          </Typography>
        </Box>
        <Box className={classes.careersWrapper}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Search
                data={allCareer}
                setSearchResult={(result) => setCareers(result)}
                setSearching={(status) => setSearching(status)}
                setPageList={() => setCareers(curPageCareers)}
              ></Search>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box>
                {careers?.map((career) => (
                  <CareerItem
                    key={career.id}
                    slug={career?.fields?.slug}
                    {...career.frontmatter}
                  ></CareerItem>
                ))}
              </Box>
              {numberOfPages > 1 && !searching && careers?.length > 0 && (
                <Box className={classes.pagination}>
                  <Link
                    className={classnames(
                      humanPageNumber === 1 && classes.disableLink
                    )}
                    to={previousPagePath}
                    disabled
                  >
                    <IconButton
                      className={classes.prePageBtn}
                      aria-label='previous page'
                    >
                      <ArrowIcon></ArrowIcon>
                    </IconButton>
                  </Link>
                  <Box className={classes.pageInfo}>
                    <Box className={classes.curPageBtn}>{humanPageNumber}</Box>
                    <Box>of {numberOfPages}</Box>
                  </Box>
                  <Link to={nextPagePath}>
                    <IconButton aria-label='previous page'>
                      <ArrowIcon></ArrowIcon>
                    </IconButton>
                  </Link>
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box className={classes.box03}>
        <Container disableGutters maxWidth='lg'>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <StaticImage
                className={classes.sideImg}
                src='../assets/images/join_us_01.jpg'
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
                  加入我們
                </Typography>
                <Typography
                  variant={matches ? 'body2' : 'body1'}
                  color='textPrimary'
                >
                  如現時未有合適空缺，歡迎留下聯絡方法，
                  <br />
                  第一時間獲取最新空缺資料：
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
                      await handleFetch(
                        omit(values, ['requiredArea', 'requiredName'])
                      )
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
                            error={isError('name')}
                            required
                          >
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
                        </Box>

                        <Box className={classes.formControlLine}>
                          <FormControl
                            fullWidth
                            error={isError('area')}
                            className={classes.formControl}
                            required
                          >
                            <EFormLabel>地區</EFormLabel>
                            <ESelect
                              displayEmpty
                              labelId='area-label'
                              id='area'
                              name='area'
                              value={values.area}
                              onChange={handleChange}
                            >
                              {AREA_OPTIONS?.map((area) => (
                                <MenuItem
                                  key={area.value}
                                  value={area.value}
                                  disabled={!area.value}
                                >
                                  {area.label}
                                </MenuItem>
                              ))}
                            </ESelect>
                            {errorText('area')}
                          </FormControl>
                          <FormControl
                            fullWidth
                            error={isError('department')}
                            className={classes.formControl}
                            required
                          >
                            <EFormLabel>部門</EFormLabel>
                            <ESelect
                              displayEmpty
                              labelId='department-label'
                              id='department'
                              name='department'
                              value={values.department}
                              onChange={handleChange}
                            >
                              {DEPARTMENT_OPTIONS?.map((department) => (
                                <MenuItem
                                  key={department.value}
                                  value={department.value}
                                  disabled={!department.value}
                                >
                                  {department.label}
                                </MenuItem>
                              ))}
                            </ESelect>
                            {errorText('department')}
                          </FormControl>
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

export default JoinUs

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/join-us/" } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          title
          type
          region
        }
      }
      pageInfo {
        totalCount
      }
    }
    allCareer: allMdx(
      filter: { fileAbsolutePath: { regex: "/join-us/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          title
          type
          region
        }
      }
    }
  }
`
