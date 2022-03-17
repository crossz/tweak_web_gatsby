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
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import LineDots from "../../images/bg_wave_dots.png";
SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles((theme) => ({
  root: {
    background: " linear-gradient(150.62deg, #1B295D 11.31%, #1C4170 81.99%)",
    // backgroundSize: "cover",
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

  introductionTop: {
    width: theme.spacing(88),
    lineHeight: 2,
    textAlign: "center",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      textAlign:"left"
    },
  },

  introduction: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(8, 2),
    },
  },
  introductionBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    fontWeight: "700",
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 2),
      marginBottom: theme.spacing(2),
    },
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  },
}));
const SectionFive = () => {
  const { t } = useI18next();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles({
    progressRightWidth: matches ? 80 : 316,
    matches,
  });

  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Box className={classes.root}>
      <Box className={classes.topContainer}>
        {matches ? (
          <StaticImage
            className={classes.img}
            src="../../images/section_banner_05_mobile.jpg"
            alt="empty"
          ></StaticImage>
        ) : (
          <StaticImage
            className={classes.img}
            src="../../images/section_banner_05.jpg"
            alt="empty"
          ></StaticImage>
        )}
      </Box>
      <Box width="100%">
        <Typography className={classes.introduction}>
          <Box className={classes.introductionTop}>
            作為鼻咽癌康復者兼香港著名喜劇演員，張達明先生曾因忽略身體警號而延誤求醫。
          </Box>
          <Box className={classes.introductionTop}>
            走過長達7年的抗癌路，達明終成功擊退鼻咽癌，現在可於電影和舞台劇路上再創輝煌成績。
          </Box>{" "}
          <Box className={classes.introductionTop}>
            一起聽聽達明親述他的第二人生及進行「早期鼻咽癌篩查」的重要！
          </Box>
        </Typography>
      </Box>
      <Box mt={matches ? 3 : 8} width="100%" height="200px">
        <YouTube
          videoId="BACVA3es0NI"
          opts={{
            height: "390px",
            width: "640px",
          }}
        />
      </Box>
      <Box width="100%">
        <Typography className={classes.introductionBottom}>
          <Box className={classes.introductionTop}>
            不要讓鼻咽癌打亂你的人生，想掌握健康，就要定期接受早期鼻咽癌篩查，
          </Box>
          <Box className={classes.introductionTop}>「預早知 ・ 越早醫」。</Box>
        </Typography>
      </Box>
      <Grid className={classes.btnWrapper} container spacing={2}>
        <Grid item className={classes.item}>
          <Button
            variant="contained"
            color="secondary"
            href={process.env.GATSBY_SITE_URL}
            target="_blank"
            fullWidth={matches}
            className={classes.btn}
          >
            立即預約
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionFive;
