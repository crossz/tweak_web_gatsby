import React, { useState, useContext } from "react";
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  alpha,
} from "@material-ui/core/";
import { StaticImage } from "gatsby-plugin-image";
import { useI18next } from "gatsby-plugin-react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 18),
    background: "#F6F6F6",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3, 2.5),
    },
  },
  logo: {
    width: theme.spacing(22),
    height: theme.spacing(6),
  },
  icon: {
    width: theme.spacing(2),
    height: theme.spacing(2.5),
    marginRight: theme.spacing(1.5),
  },
  basicInfo: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  item: {
    marginRight: theme.spacing(5.5),
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(1.5),
    },
  },
  detail: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: theme.spacing(30),
      wordBreak: "break-all",
    },
  },
  imgBox: {
    [theme.breakpoints.down("xs")]: {
      verticalAlign: " top",
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  const { t } = useI18next();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const info = [
    {
      img: (
        <StaticImage
          src="../../images/location.svg"
          alt="Logo"
          className={classes.icon}
        />
      ),
      detail: "香港九龍灣常悅道1號恩浩國際中心25樓D室",
    },
    {
      img: (
        <StaticImage
          src="../../images/phone.svg"
          alt="Logo"
          className={classes.icon}
        />
      ),
      detail: "(852) 3613 0533",
    },
    {
      img: (
        <StaticImage
          src="../../images/mail.svg"
          alt="Logo"
          className={classes.icon}
        />
      ),
      detail: "info@take2.health",
    },
  ];
  return (
    <Box className={classes.root}>
      {" "}
      <Box>
        <StaticImage
          src="../../images/footer_logo.jpg"
          alt="Logo"
          className={classes.logo}
        />
      </Box>
      <Box className={classes.basicInfo} mt={4}>
        {info.map((item, index) => (
          <Box className={classes.item}>
            <Box display="inline-block" className={classes.imgBox}>
              {item.img}
            </Box>
            <Box
              fontWeight="500"
              display="inline-block"
              color="grey.900"
              className={classes.detail}
            >
              {item.detail}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
