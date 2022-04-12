import React from 'react'
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Button,
  IconButton,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Link from '@components/Link'
import MailIcon from '../images/mail.svg'
import PhoneIcon from '../images/phone.svg'
import WhatsAppIcon from '../images/WhatsApp.svg'
import FacebookIcon from '../images/facebook.svg'
import {
  WHATS_APP_LINK,
  SERVICE_EMAIL,
  SERVICE_PHONE,
  FACEBOOK_LINK,
} from '../utils/constant'

const useStyles = makeStyles((theme) => ({
  websiteButton: {
    borderColor: theme.palette.prophecyPrimary.main,
    color: theme.palette.prophecyPrimary.main,
    backgroundColor: `transparent`,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
  },
  reference: {
    color: theme.palette.prophecyPrimary.light,
    fontWeight: 700,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(5),
    },
  },
  referenceDetail: {
    fontSize: '12px',
    lineHeight: 2,
    color: theme.palette.prophecyPrimary.light,
    borderBottom: '1px solid #E1E1E1',
    paddingBottom: theme.spacing(6),
  },
  referenceDetail2: {
    fontSize: '12px',
    lineHeight: 2,
    color: theme.palette.prophecyPrimary.light,
  },
  rules: {
    fontSize: '12px',
    lineHeight: 2,
    color: theme.palette.prophecyPrimary.light,
  },
  heading: {
    color: theme.palette.prophecyPrimary.light,
    fontWeight: 700,
  },
  accordionRoot: {
    borderBottom: '1px solid #E1E1E1',
  },
  rounded: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  expanded: {
    margin: '0 0 !important',
  },
  summaryRoot: {
    padding: '0 0',
    backgroundColor: 'transparent',
    minHeight: theme.spacing(13),
    '&.Mui-expanded': {
      minHeight: theme.spacing(13),
    },
  },
  accordDetails: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 0, 3, 0),
    },
  },
}))

const CONTACT_LIST = [
  {
    title: 'WhatsApp',
    href: WHATS_APP_LINK,
    icon: <WhatsAppIcon />,
    id: 'ECP_Contact_Whatapp',
  },
  {
    title: SERVICE_PHONE,
    href: `tel:${SERVICE_PHONE}`,
    icon: <PhoneIcon />,
    id: 'ECP_Contact_Telephone',
  },
  {
    title: SERVICE_EMAIL,
    href: `mailto:${SERVICE_EMAIL}`,
    icon: <MailIcon />,
    id: 'ECP_Contact_Email',
  },
]

const ContactReference = () => {
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles({
    progressRightWidth: isMobile ? 80 : 316,
    isMobile,
  })

  const reference = [
    {
      list: '1. Chan, K. C. Allen, et al. “Analysis of Plasma Epstein–Barr Virus DNA to Screen for Nasopharyngeal Cancer.” New England Journal of Medicine, vol. 377, no. 6. 2017, pp. 513–22.',
    },
    {
      list: '2. Hong Kong Cancer Registry. Hong Kong Hospital Authority,www3.ha.org.hk/cancereg/. Accessed 23 May 2021. ',
    },
    {
      list: '3. Overview of Hong Kong Cancer Statistics of 2018. HongKong Hospital Authority, October 2020.',
    },
    {
      list: '4. “Nasopharyngeal Cancer.” Centre for Health Protection,Department of Health, The Government of the Hong Kong SpecialAdministrative Region, 2021,www.chp.gov.hk/en/healthtopics/content/25/54.html, accessed 23 July 2021.',
    },
    {
      list: '5. Bray, F., et al. “Global Cancer Statistics 2018: GLOBOCANE stimates of Incidence and Mortality Worldwide for 36 Cancers in 185 Countries.” CA: A Cancer Journal for Clinicians, vol. 68,no. 6. 2018, pp. 394-424.',
    },
    {
      list: '6. Lam, W. K. Jacky, et al.“Sequencing-Based Counting and Size Profiling of Plasma Epstein–Barr Virus DNA Enhance Population Screening of Nasopharyngeal Carcinoma.” Proceedings of the National Academy of Sciences, vol. 115, no. 22, 2018, pp. E5115–24.',
    },
    {
      list: '7. Chang, Kai-Ping, et al. “Complementary Serum Test of Antibodies to Epstein-Barr Virus Nuclear Antigen-1 and Early Antigen: A Possible Alternative for Primary Screening of Nasopharyngeal Carcinoma.” Oral Oncology, vol. 44, no.8. 2008, pp. 784–92.',
    },
    {
      list: '8. Tay, Joshua K., et al.“Nasopharyngeal Carcinoma: Current Strategies and Future Directions.” Current Otorhinolaryngology Reports, vol. 2, no. 1,2013, pp. 1–7.',
    },
    {
      list: '9. Overview of Hong Kong Cancer Statistics of 2019. Hong Kong Hospital Authority, October 2021.',
    },
  ]
  const rules = [
    {
      rulesDetail:
        ' At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    },
    {
      rulesDetail:
        'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    },
    {
      rulesDetail:
        'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    },
    {
      rulesDetail:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    },
  ]
  return (
    <Box
      id='gsap-scroll-to-contact-us'
      pt={isMobile ? 5 : 8}
      pb={isMobile ? 0 : 13.5}
      px={2.5}
      bgcolor={isMobile ? 'transparent' : 'background.paper'}
    >
      <Box
        className='gsap-fade-in-11-trigger gsap-fade-in-11'
        mx='auto'
        maxWidth={1192}
      >
        <Box
          color='prophecyPrimary.main'
          fontWeight='fontWeightBold'
          fontSize={24}
        >
          {t('cp_v2.contact_and_reference.paragraphs.0')}
        </Box>
        <Box py={isMobile ? 5 : 6} borderBottom='1px solid #E1E1E1'>
          <Box
            fontWeight='fontWeightMedium'
            fontSize='body1.fontSize'
            color='grey.900'
            mb={2}
          >
            {t('cp_v2.contact_and_reference.paragraphs.1')}
          </Box>
          <Box display={isMobile ? 'block' : 'flex'}>
            {CONTACT_LIST.map((item, index) => (
              <Link key={index} underline='none' to={item.href} target='_blank'>
                <Box
                  bgcolor={!index ? '#25D366' : 'prophecyPrimary.light'}
                  borderRadius={12}
                  mr={isMobile ? 0 : 2}
                  mb={isMobile ? 2 : 0}
                  py={2}
                  px={3}
                  display='flex'
                  alignItems='center'
                  id={item.id}
                >
                  <Box mr={1} flexShrink={0}>
                    {item.icon}
                  </Box>
                  <Box
                    fontSize='body1.fontSize'
                    fontWeight='fontWeightBold'
                    color='primary.contrastText'
                    component='span'
                  >
                    {item.title}
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <Box
              height='100%'
              py={isMobile ? 5 : 6}
              borderBottom='1px solid #E1E1E1'
            >
              <Box
                fontWeight='fontWeightMedium'
                fontSize='body1.fontSize'
                color='grey.900'
                mb={2}
              >
                {t('cp_v2.contact_and_reference.paragraphs.2')}
              </Box>
              <Link to='/'>
                <Button
                  size='small'
                  fullWidth={isMobile}
                  variant='outlined'
                  color='inherit'
                  className={classes.websiteButton}
                  id='ECP_Contact_CorpSite'
                >
                  {t('cp_v2.menu.office_website')}
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              height='100%'
              py={isMobile ? 5 : 6}
              borderBottom='1px solid #E1E1E1'
            >
              <Box
                fontWeight='fontWeightMedium'
                fontSize='body1.fontSize'
                color='grey.900'
                mb={2}
              >
                {t('cp_v2.contact_and_reference.paragraphs.3')}
              </Box>
              <Box height={56}>
                <IconButton
                  href={FACEBOOK_LINK}
                  target='_blank'
                  size='small'
                  aria-label='facebook'
                  id='ECP_Contact_Facebook'
                >
                  <FacebookIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {isMobile ? (
          <Box>
            <Accordion
              classes={{
                root: classes.accordionRoot,
                rounded: classes.rounded,
                expanded: classes.expanded,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
                classes={{
                  root: classes.summaryRoot,
                }}
              >
                <Typography className={classes.heading}>
                  {t('cp_v2.contact_and_reference.paragraphs.4')}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                classes={{
                  root: classes.accordDetails,
                }}
              >
                <Box className={classes.referenceDetail2}>
                  {reference.map((item, index) => (
                    <Box key={index}>{item.list}</Box>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              classes={{
                rounded: classes.rounded,
                expanded: classes.expanded,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
                classes={{
                  root: classes.summaryRoot,
                }}
              >
                <Typography className={classes.heading}>
                  {t('t_and_c.terms_and_conditions')}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                classes={{
                  root: classes.accordDetails,
                }}
              >
                <Box className={classes.referenceDetail2}>
                  {rules.map((item, index) => (
                    <Box key={index} mt={index === 0 ? 0 : 2}>
                      {item.rulesDetail}
                    </Box>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        ) : (
          <Box>
            <Box className={classes.reference} my={4}>
              {t('cp_v2.contact_and_reference.paragraphs.4')}
            </Box>
            <Box className={classes.referenceDetail}>
              {reference.map((item, index) => (
                <Box key={index}>{item.list}</Box>
              ))}
            </Box>
            <Box className={classes.reference} my={4}>
              {t('cp_v2.contact_and_reference.paragraphs.5')}
            </Box>
            <Box className={classes.rules}>
              {rules.map((item, index) => (
                <Box key={index} mt={index === 0 ? 0 : 2}>
                  {item.rulesDetail}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default ContactReference
