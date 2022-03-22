import React from "react";
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  alpha,
  Typography,
} from "@material-ui/core/";
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
  card: {
    width: "auto",
    boxShadow: "0px 5px 30px rgba(124, 124, 124, 0.1)",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1, 2),
    marginRight: theme.spacing(1.5),
    background: "#25d366",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(0),
      paddingLeft: theme.spacing(3.5),
    },
  },
  cardDark: {
    width: "auto",
    boxShadow: "0px 5px 30px rgba(124, 124, 124, 0.1)",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1, 2),
    marginRight: theme.spacing(1.5),
    background: "#7bb8cb",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(0),
      paddingLeft: theme.spacing(3.5),
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
          src="../../images/check.png"
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
          src="../../images/check.png"
          alt="empty"
        ></StaticImage>
      ),
      title: "(852)36130536",

      detail: "",
    },
    {
      bgc: "#7bb8cb",

      img: (
        <StaticImage
          className={classes.img}
          src="../../images/check.png"
          alt="empty"
        ></StaticImage>
      ),
      title: "customer.support@take2.health",
      detail: "",
    },
  ];
  return (
    <Box className={classes.root}>
      <Box fontSize="h6.fontSize" className={classes.title}>
        檢測3步
      </Box>
      <Typography className={classes.subTitle}>
        <Box className={classes.introductionTop}>
          「十五十六」？和我們的專業醫護團隊聊聊（不需收費）：
        </Box>
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
                <Box display="inline-block" padding="0 5px">
                  {item.img}
                </Box>
                <Box display="inline-block"> {item.title}</Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactReference;
