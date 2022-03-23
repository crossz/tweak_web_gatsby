import React from "react";
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  alpha,
  Typography,
} from "@material-ui/core/";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useI18next } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 15.5),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(5, 2.5),
    },
  },
  title: {
    color: theme.palette.prophecyPrimary.light,
    fontWeight: 700,
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(5),
    },
  },
  subTitle: {
    fontWeight: 500,
  },
  websiteFb: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #E1E1E1",
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  leftBox: {
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      borderBottom: "1px solid #E1E1E1",
      paddingBottom: theme.spacing(6),
    },
  },
  introductionTop: {
    margin: theme.spacing(5, 0, 3, 0),
  },
  website: {
    fontWeight: 700,
    width: theme.spacing(20),
    height: theme.spacing(6),
    border: "1px solid #29678F",
    color: theme.palette.prophecyPrimary.light,
    padding: " 11px 44px",
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      textAlign: "center",
    },
  },
  rightBox: {
    fontWeight: 500,
  },
  facebook: {
    height: theme.spacing(6),

    width: theme.spacing(6),
  },
  stepsContainer: {
    display: "flex",
    marginTop: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    borderBottom: "1px solid #E1E1E1",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      paddingBottom: theme.spacing(5),
    },
  },
  img: {
    // minHeight: theme.spacing(10),
    width: "100%",
  },
  img3: {
    // minHeight: theme.spacing(10),
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(-1.5),
    },
  },
  card: {
    width: "auto",
    boxShadow: "0px 5px 30px rgba(124, 124, 124, 0.1)",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2, 2),
    marginRight: theme.spacing(1.5),
    background: "#25d366",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(0),
      paddingLeft: theme.spacing(2),
    },
  },
  cardDark: {
    width: "auto",
    boxShadow: "0px 5px 30px rgba(124, 124, 124, 0.1)",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2, 2),
    marginRight: theme.spacing(1.5),
    background: "#7bb8cb",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(0),
      paddingLeft: theme.spacing(2),
    },
  },
  stepTwo: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: theme.spacing(2, 0),
    },
  },
  introduction: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  detailContact: {
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(27.5),
      wordBreak: "break-all",
    },
  },
  reference: {
    color: theme.palette.prophecyPrimary.light,
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(5),
    },
  },
  referenceDetail: {
    fontSize: "12px",
    lineHeight: 2,
    color: theme.palette.prophecyPrimary.light,
    borderBottom: "1px solid #E1E1E1",
    paddingBottom: theme.spacing(6),
  },
  referenceDetail2: {
    fontSize: "12px",
    lineHeight: 2,
    color: theme.palette.prophecyPrimary.light,
  },
  rules: {
    fontSize: "12px",
    lineHeight: 2,
    color: theme.palette.prophecyPrimary.light,
    [theme.breakpoints.down("xs")]: {
      borderBottom: "1px solid #E1E1E1",
      paddingBottom: theme.spacing(6),
    },
  },
  heading: {
    color: theme.palette.prophecyPrimary.light,
    fontWeight: 700,
  },
  rounded: {
    boxShadow: "none",
    borderBottom: "1px solid #E1E1E1",
  },
  rounded2: {
    boxShadow: "none",
  },
  expanded: {
    margin: "0 0 !important",
  },
  summaryRoot: {
    padding: "0 0",
    minHeight: theme.spacing(13),
  },
  accordDetails:{
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0,0,3,0),
    },
  }
}));

const ContactReference = () => {
  const { t } = useI18next();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles({
    progressRightWidth: matches ? 80 : 316,
    matches,
  });
  const steps2 = [
    {
      bgc: "#25d366",
      img: (
        <StaticImage
          className={classes.img}
          src="../../images/WhatsApp.png"
          alt="empty"
        ></StaticImage>
      ),
      title: "WhatsApp",
      detail: "",
    },
    {
      bgc: "#7bb8cb",

      img: (
        <StaticImage
          className={classes.img}
          src="../../images/phone.png"
          alt="empty"
        ></StaticImage>
      ),
      title: "(852) 3613 0536",

      detail: "",
    },
    {
      bgc: "#7bb8cb",

      img: (
        <StaticImage
          className={classes.img3}
          src="../../images/mail.png"
          alt="empty"
        ></StaticImage>
      ),
      title: "customer.support@take2.health",
      detail: "",
    },
  ];
  const reference = [
    {
      list: "1. Hong Kong Cancer Registry. Hong Kong Hospital Authority,www3.ha.org.hk/cancereg/. Accessed 23 May 2021.",
    },
    {
      list: "2. Overview of Hong Kong Cancer Statistics of 2018. HongKong Hospital Authority, October 2020.",
    },
    {
      list: "3. “Nasopharyngeal Cancer.” Centre for Health Protection,Department of Health, The Government of the Hong Kong SpecialAdministrative Region, 2021,www.chp.gov.hk/en/healthtopics/content/25/54.html, accessed 23 July 2021.",
    },
    {
      list: "4. Bray, F., et al. “Global Cancer Statistics 2018: GLOBOCANE stimates of Incidence and Mortality Worldwide for 36 Cancers in 185 Countries.” CA: A Cancer Journal for Clinicians, vol. 68,no. 6. 2018, pp. 394-424.",
    },
    {
      list: "5. Chan, K. C. Allen, et al. “Analysis of Plasma Epstein–Barr Virus DNA to Screen for Nasopharyngeal Cancer.” New England Journal of Medicine, vol. 377, no.",
    },
    {
      list: "6. 2017, pp. 513–22. 6. Lam, W. K. Jacky, et al.“Sequencing-Based Counting and Size Profiling of Plasma Epstein–Barr Virus DNA Enhance Population Screening of Nasopharyngeal Carcinoma.” Proceedings of the National Academy of Sciences, vol. 115, no. 22, 2018, pp. E5115–24.",
    },
    {
      list: "7. Chang, Kai-Ping, et al. “Complementary Serum Test of Antibodies to Epstein-Barr Virus Nuclear Antigen-1 and Early Antigen: A Possible Alternative for Primary Screening of Nasopharyngeal Carcinoma.” Oral Oncology, vol. 44, no.",
    },
    {
      list: "8. 2008, pp. 784–92. 8. Tay, Joshua K., et al.“Nasopharyngeal Carcinoma: Current Strategies and Future Directions.” Current Otorhinolaryngology Reports, vol. 2, no. 1,2013, pp. 1–7.",
    },
    {
      list: "9. Overview of Hong Kong Cancer Statistics of 2019. Hong Kong Hospital Authority, October 2021.",
    },
  ];
  const rules = [
    {
      rulesDetail:
        " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    },
    {
      rulesDetail:
        "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    },
    {
      rulesDetail:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    },
    {
      rulesDetail:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    },
  ];
  return (
    <Box className={classes.root}>
      <Box fontSize="h6.fontSize" className={classes.title}>
        仍有疑問？
      </Box>
      <Typography className={classes.subTitle}>
        <Box>「十五十六」？和我們的專業醫護團隊聊聊（不需收費）：</Box>
      </Typography>
      <Box className={classes.contactBox}>
        <Box className={classes.stepsContainer}>
          {steps2.map((item, index) => (
            <Box
              className={index === 0 ? classes.card : classes.cardDark}
              background={item.bgc}
            >
              <Box
                fontSize="16px"
                fontWeight="700"
                color="#fff"
                display="inline-block"
                my={matches ? 2 : 0}
              >
                <Box
                  display="inline-block"
                  padding={matches ? "0 15px" : "0 5px"}
                >
                  {item.img}
                </Box>
                <Box display="inline-block" className={classes.detailContact}>
                  {" "}
                  {item.title}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className={classes.websiteFb}>
        <Typography className={classes.leftBox}>
          <Box className={classes.introductionTop}>
            想了解更多Take2 Prophecy™ 早期鼻咽癌篩查的資訊：{" "}
          </Box>
          <Box className={classes.website} fontSize="16px" fontWeight="bold">
            官方網站
          </Box>
        </Typography>
        <Box>
          <Typography className={classes.rightBox}>
            <Box className={classes.introductionTop}>
              緊貼我們以接收最新資訊：
            </Box>
            <Box className={classes.fb}>
              <StaticImage
                className={classes.facebook}
                src="../../images/facebook.png"
                alt="empty"
              ></StaticImage>
            </Box>
          </Typography>
        </Box>
      </Box>
      {matches ? (
        <Box>
          <Accordion
            classes={{
              rounded: classes.rounded,
              expanded: classes.expanded,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              classes={{
                root: classes.summaryRoot,
              }}
            >
              <Typography className={classes.heading}>參考資料</Typography>
            </AccordionSummary>
            <AccordionDetails
              classes={{
                root: classes.accordDetails,
              }}
            >
              <Typography className={classes.referenceDetail2}>
                {reference.map((item, index) => (
                  <Box>{item.list}</Box>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            classes={{
              rounded: classes.rounded2,
              expanded: classes.expanded,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              classes={{
                root: classes.summaryRoot,
              }}
            >
              <Typography className={classes.heading}>條款及細則</Typography>
            </AccordionSummary>
            <AccordionDetails
              classes={{
                root: classes.accordDetails,
              }}
            >
              <Typography className={classes.referenceDetail2}>
                {rules.map((item, index) => (
                  <Box mt={index === 1 ? 0 : 2}>{item.rulesDetail}</Box>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ) : (
        <Box>
          {" "}
          <Box className={classes.reference} my={4}>
            參考資料
          </Box>
          <Typography className={classes.referenceDetail}>
            {reference.map((item, index) => (
              <Box>{item.list}</Box>
            ))}
          </Typography>
          <Box className={classes.reference} my={4}>
            條款及細則
          </Box>
          <Typography className={classes.rules}>
            {rules.map((item, index) => (
              <Box mt={index === 0 ? 0 : 2}>{item.rulesDetail}</Box>
            ))}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ContactReference;
