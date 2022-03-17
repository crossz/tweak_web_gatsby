import React, { useState } from "react";
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  alpha,
} from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import { StaticImage } from "gatsby-plugin-image";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { useI18next } from "gatsby-plugin-react-i18next";
import YouTube from "react-youtube";
SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FAFFFF",
  },
  topContainer: {
    position: "relative",
  },
  text: {
    position: "absolute",
    top: "20%",
    left: "10%",
    [theme.breakpoints.down("xs")]: {
      top: "10%",
      left: "5%",
    },
  },
  textSub: {
    display: "inline-block",
    color: "#FFF",
  },
  bottomContainer: {},
  introduction: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  introductionTop: {
    marginTop: theme.spacing(2),
    width: theme.spacing(88),
    lineHeight: 1.5,
    textAlign: "center",
  },

  item: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  introduction: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  iconBox: {
    flexShrink: 0,
    height: theme.spacing(15),
    width: theme.spacing(15),
    borderRadius: "50%",
    [theme.breakpoints.down("xs")]: {
      height: theme.spacing(10),
      width: theme.spacing(10),
      marginBottom: theme.spacing(2),
    },
  },
  stepTwo: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: theme.spacing(2, 0),
    },
  },
  card: {
    background: "#fff",
    boxShadow: "0px 5px 30px rgba(124, 124, 124, 0.1)",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1, 2),
    marginBottom: theme.spacing(2),
  },
  stepsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  video: {
    borderRadius: theme.spacing(3),
    width:theme.spacing(94),
    [theme.breakpoints.down("xs")]: {
      width:theme.spacing(42)
    },
  },
}));
const SectionOne = () => {
  const { t } = useI18next();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles({
    progressRightWidth: matches ? 80 : 316,
    matches,
  });
  const steps2 = [
    {
      img: (
        <StaticImage
          className={classes.img}
          src="../../images/npc_characteristic_01.png"
          alt="empty"
        ></StaticImage>
      ),
      detail: "鼻咽癌是本港十大癌症殺手之一，每年有六百至八百多宗病例²",
    },
    {
      img: (
        <StaticImage
          className={classes.img}
          src="../../images/npc_characteristic_02.png"
          alt="empty"
        ></StaticImage>
      ),
      detail: "20-44歲男士的頭號癌症³",
    },
    {
      img: (
        <StaticImage
          className={classes.img}
          src="../../images/npc_characteristic_03.png"
          alt="empty"
        ></StaticImage>
      ),
      detail: "女士當中較常發病於50-60歲的其中一種癌症²",
    },
    {
      img: (
        <StaticImage
          className={classes.img}
          src="../../images/npc_characteristic_04.png"
          alt="empty"
        ></StaticImage>
      ),
      detail: "香港人的鼻咽癌發病率更是全球平均的5-6倍⁴’⁵",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Box className={classes.root}>
      <Box className={classes.topContainer}>
        {matches ? (
          <StaticImage
            className={classes.img}
            src="../../images/section_banner_01_mobile.jpg"
            alt="empty"
          ></StaticImage>
        ) : (
          <StaticImage
            className={classes.img}
            src="../../images/section_banner_01.jpg"
            alt="empty"
          ></StaticImage>
        )}
      </Box>

      <Box className={classes.bottomContainer}>
        <Box mt={matches ? 3 : 6} display="flex" justifyContent="center">
          {matches ? (
            <YouTube
              className={classes.video}
              videoId="BACVA3es0NI"
              opts={{
                width:"350px",
                height: "236px",
              }}
            />
          ) : (
            <YouTube
              className={classes.video}
              videoId="BACVA3es0NI"
              opts={{
                height: "436px",
              }}
            />
          )}
        </Box>
        <Typography className={classes.introduction}>
          <Box className={classes.introductionTop}>
            很多人誤以為鼻咽癌只和吸煙有關，要是年青力壯或是生活習慣良好，又怎會認為癌症有自己的份兒？但事實上，不論男女老幼，鼻咽癌的威脅可能已悄悄進逼至你身邊。
          </Box>
        </Typography>{" "}
        <Box
          display="inline-block"
          margin={matches ? "20px 10px" : "40px auto"}
        >
          <Box className={classes.stepsContainer}>
            {steps2.map((item, index) => (
              <Box className={classes.card}>
                <Box className={classes.stepTwo}>
                  <Box className={classes.iconBox}>{item.img}</Box>
                  <Box ml={matches ? 0 : 3}>
                    <Typography className={classes.introduction}>
                      <Box width={matches ? null : "300px"} fontWeight="500">
                        {item.detail}
                      </Box>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>{" "}
        </Box>
      </Box>
    </Box>
  );
};

export default SectionOne;
