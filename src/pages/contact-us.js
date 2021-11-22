import React, { useState } from 'react'
import { makeStyles, Container } from '@material-ui/core'
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
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

  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  return (
    <Container maxWidth='xl'>
      <Box></Box>
      <Container maxWidth='md'>
        <Box>
          <Tabs value={activeTab} onChange={handleChange}>
            {contactTypes.map((contactType) => (
              <Tab key={contactType.label} label={contactType.tabLabel}></Tab>
            ))}
          </Tabs>
          <Box>
            {contactTypes.map(({ label, Icon }) => (
              <Button
                key={label}
                variant='contained'
                color='default'
                startIcon={<Icon />}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Box>
        <Box>
          <Box>提交意見或查詢</Box>
          <Formik initialValues={initialValues} validationSchema={schema}>
            {(props) => {
              const { values, handleChange } = props
              return (
                <form noValidate>
                  <Box>
                    <FormControl>
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
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl>
                      <EFormLabel>電話號碼</EFormLabel>
                      <Box>
                        <FormControl required>
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
                        <EInputBase
                          id='company-ame'
                          name='companyName'
                          margin='none'
                          value={values.companyName}
                          onChange={handleChange}
                          placeholder='请输入公司名稱/姓名'
                          type='text'
                        />
                      </Box>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl>
                      <EFormLabel>訊息</EFormLabel>
                      <TextareaAutosize
                        minRows={8}
                        maxRows={8}
                        readOnly
                        aria-label='message'
                        name='message'
                        value={values.message}
                      />
                    </FormControl>
                  </Box>
                  <Button variant='contained' color='secondary'>
                    提交
                  </Button>
                </form>
              )
            }}
          </Formik>
        </Box>
      </Container>
    </Container>
  )
}

export default ContactUs
