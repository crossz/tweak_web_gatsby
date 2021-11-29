import React, { useState } from 'react'
import {
  makeStyles,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import useSiteMetadata from '@hooks/useSiteMetadata'
import PhoneIcon from '@images/icons/phone.svg'
import WhatsappIcon from '@images/icons/whatsapp.svg'
import EmailIcon from '@images/icons/mail.svg'
import MessengerIcon from '@images/icons/messenger.svg'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { Formik } from 'formik'
import { oriSchema } from '@utils/schema'
import { throttle } from 'lodash-es'
import { DIALING_CODES } from '@utils/constant'
import FormControl from '@material-ui/core/FormControl'
import { EInputBase, EFormLabel } from '@themes/components/ETextField'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import classnames from 'classnames'
import InputAdornment from '@material-ui/core/InputAdornment'

import CancelIcon from '@images/icons/cancel.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(11),
  },
  flexContainer: {
    borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
  },
  tabsRoot: {
    margin: theme.spacing(0, -2),
  },
  tabRoot: {
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.body1.fontSize,
    minWidth: 'auto',
    padding: theme.spacing(0, 3),
    opacity: 1,
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      fontSize: theme.typography.body2.fontSize,
    },
  },
  selected: {
    fontWeight: theme.typography.fontWeightBold,
  },
  scrollButtons: {
    color: theme.palette.primary.contrastText,
  },
  imageListItem: {
    height: 'auto',
  },
  imageListItemItem: {
    overflow: 'initial',
  },
  button: {
    width: '100%',
    height: theme.spacing(11),
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    fontSize: theme.typography.body1.fontSize,
    justifyContent: 'flex-start',
    textTransform: 'none',
    '& svg': {
      width: theme.spacing(5),
      height: theme.spacing(5),
      [theme.breakpoints.down('md')]: {
        width: theme.spacing(4),
        height: theme.spacing(4),
      },
      [theme.breakpoints.down('sm')]: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.body2.fontSize,
      height: theme.spacing(8),
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
    },
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(9),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
  activeIcon: {
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
  form: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 5),
    borderRadius: theme.spacing(1.5),
    marginTop: theme.spacing(2),
  },
  dialingCode: {
    flexShrink: 0,
  },
  textarea: {
    borderColor: theme.palette.grey[300],
    borderRadius: theme.spacing(0.75),
    padding: theme.spacing(2),
    fontSize: theme.typography.body1,
    color: theme.palette.supporting.supporting03,
    '&::placeholder': {
      color: theme.palette.grey[400],
    },
  },
  cancelIcon: {
    '& path': {
      fill: theme.palette.error.main,
    },
  },
  disabledCancelIcon: {
    '& path': {
      fill: theme.palette.grey[400],
    },
  },
}))

const initialValues = {
  companyName: '',
  dialingCode: '852',
  phone: '',
  email: '',
  message: '',
}

const schema = oriSchema.pick([
  'companyName',
  'message',
  'dialingCode',
  'phone',
  'email',
])

const ContactUs = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const [activeTab, setActiveTab] = useState(0)
  const { whatsapp, email, phone, facebook } = useSiteMetadata()

  const contactTypes = [
    {
      label: 'info@take2.health',
      Icon: EmailIcon,
      tabLabel: '一般查詢',
      type: 'email',
      link: email,
    },
    {
      label: '+852 3613 0533',
      Icon: PhoneIcon,
      tabLabel: '客戶服務專線',
      type: 'phone',
      link: phone,
    },
    {
      label: 'WhatsApp',
      Icon: WhatsappIcon,
      tabLabel: '公關及傳訊',
      type: 'link',
      link: whatsapp,
    },
    {
      label: 'Messenger',
      Icon: MessengerIcon,
      tabLabel: '商務合作',
      type: 'link',
      link: facebook,
    },
  ]

  const handleChange = (event, newValue) => setActiveTab(newValue)

  return (
    <Container className={classes.root} disableGutters maxWidth='xl'>
      <Box
        height={matches ? 118 : 190}
        bgcolor='primary.main'
        mb={-13.75}
      ></Box>
      <Container maxWidth='md'>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={7}>
            <Tabs
              variant='scrollable'
              indicatorColor='secondary'
              value={activeTab}
              onChange={handleChange}
              classes={{
                root: classes.tabsRoot,
                flexContainer: classes.flexContainer,
                scrollButtons: classes.scrollButtons,
              }}
            >
              {contactTypes.map((contactType) => (
                <Tab
                  key={contactType.label}
                  label={contactType.tabLabel}
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.selected,
                  }}
                ></Tab>
              ))}
            </Tabs>
            <Box mx={matches ? 1 : 5} mt={matches ? 4 : 3.75}>
              <ImageList rowHeight='auto' cols={matches ? 1 : 2} gap={16}>
                {contactTypes.map(({ label, Icon }, index) => (
                  <ImageListItem
                    key={label}
                    classes={{
                      item: classes.imageListItemItem,
                    }}
                    className={classes.imageListItem}
                  >
                    <Button
                      className={classes.button}
                      classes={{
                        startIcon: classes.startIcon,
                      }}
                      variant='contained'
                      color={index === activeTab ? 'secondary' : 'default'}
                      startIcon={
                        <Icon
                          className={classnames(
                            index === activeTab && classes.activeIcon
                          )}
                        />
                      }
                      size='large'
                    >
                      {label}
                    </Button>
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box color='primary.contrastText' mt={1.5}>
              提交意見或查詢
            </Box>
            <Formik initialValues={initialValues} validationSchema={schema}>
              {(props) => {
                const { values, handleSubmit, handleChange, touched, errors } =
                  props
                const isError = (field) =>
                  touched[field] && Boolean(errors[field])
                const errorText = (field) => (
                  <FormHelperText>
                    {touched[field] && errors[field]}
                  </FormHelperText>
                )
                console.log('touched, errors', touched, errors)
                return (
                  <form
                    onSubmit={handleSubmit}
                    className={classes.form}
                    noValidate
                  >
                    <Box mb={4}>
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
                          placeholder='请输入公司名稱/姓名'
                          type='text'
                        />
                        {errorText('companyName')}
                      </FormControl>
                    </Box>
                    <Box mb={4}>
                      <Box mb={1}>
                        <EFormLabel>電話號碼</EFormLabel>
                      </Box>
                      <Box display='flex'>
                        <Box mr={0.5}>
                          <FormControl className={classes.dialingCode} required>
                            <Select
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
                            </Select>
                          </FormControl>
                        </Box>

                        <FormControl>
                          <EInputBase
                            id='phone'
                            name='phone'
                            margin='none'
                            value={values.phone}
                            onChange={handleChange}
                            placeholder='9876 5432'
                            type='number'
                          />
                        </FormControl>
                      </Box>
                    </Box>

                    <Box mb={4}>
                      <FormControl fullWidth error={isError('email')} required>
                        <EFormLabel>電郵</EFormLabel>
                        <EInputBase
                          id='email'
                          name='email'
                          margin='none'
                          value={values.email}
                          onChange={handleChange}
                          placeholder='请输入電郵'
                          type='text'
                          endAdornment={
                            <InputAdornment position='end'>
                              <Box
                                className={classnames(
                                  isError('email')
                                    ? classes.cancelIcon
                                    : classes.disabledCancelIcon
                                )}
                              >
                                <CancelIcon></CancelIcon>
                              </Box>
                              {/* <IconButton
                                aria-label='toggle password visibility'
                                // onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                                disableRipple
                                disableFocusRipple
                                edge={false}
                              >
                                <CancelIcon></CancelIcon>
                              </IconButton> */}
                            </InputAdornment>
                          }
                        />

                        {errorText('email')}
                      </FormControl>
                    </Box>
                    <Box mb={4}>
                      <FormControl fullWidth>
                        <EFormLabel>訊息</EFormLabel>
                        <TextareaAutosize
                          className={classes.textarea}
                          minRows={6}
                          aria-label='message'
                          name='message'
                          onChange={handleChange}
                          value={values.message}
                          placeholder='請輸入你的訊息'
                        />
                      </FormControl>
                      <FormHelperText>
                        <Box color='primary.main'>*必填資料</Box>
                      </FormHelperText>
                    </Box>
                    <Button
                      type='submit'
                      fullWidth
                      variant='contained'
                      color='secondary'
                    >
                      提交
                    </Button>
                  </form>
                )
              }}
            </Formik>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default ContactUs
