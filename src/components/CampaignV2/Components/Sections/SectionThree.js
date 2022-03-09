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

SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles((theme) => ({
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
  },
  introductionBottom: {
    marginTop: theme.spacing(2),
    width: theme.spacing(88),
    lineHeight: 1.5,
  },
  title: {
    color: theme.palette.prophecyPrimary.light,
    fontWeight: 900,
    margin: theme.spacing(2, 0),
  },
  stepsContainer: {
    background: "#FFFFFF",
    boxShadow: " 0px 5px 30px rgba(124, 124, 124, 0.1)",
    borderSadius: theme.spacing(2),
    minHeight: theme.spacing(85),
    margin: theme.spacing(0, 20),
  },
  iconBox: {
    display: "inline-block",
    height: theme.spacing(15),
    width: theme.spacing(15),
    border: "1px solid red",
  },
  step: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
  },
}));
const Steps = () => {
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
            src="../../images/section_banner_03_mobile.jpg"
            alt="empty"
          ></StaticImage>
        ) : (
          <StaticImage
            className={classes.img}
            src="../../images/section_banner_03.png"
            alt="empty"
          ></StaticImage>
        )}
      </Box>
      <Box className={classes.bottomContainer}>
        <Typography className={classes.introduction}>
          <Box className={classes.introductionTop}>
            聽到「癌症篩查」一詞，大家可能即時聯想到一大堆繁複程序及需要，例如請假入院、看專科醫生、抽取身體組織活檢、用上各樣大型儀器等。
          </Box>
          <Box className={classes.introductionBottom}>
            別擔心！Take2 Prophecy™
            早期鼻咽癌篩查打破過去篩查服務的局限，採用次世代醫療科技，篩查過程從此變得非常簡單，只須跟著以下檢測3步，一個Lunch
            Time，就近診所即能完成。想提防鼻咽癌，現在易如反掌！{" "}
          </Box>
        </Typography>
        <Box
          fontSize="h5.fontSize"
          textAlign="center"
          className={classes.title}
        >
          檢測3步
        </Box>
        <Box className={classes.stepsContainer}>
          <Box className="step">
            <Box className={classes.iconBox}></Box>
            <Box display="inline-block">
              {" "}
              <Box>網上 1 Click登記</Box>
              <Box>
                於Take2
                Health網上平台，一按即能隨時隨地一站式選擇診所、醫生、篩查日期、時間及地點進行預約
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Steps;
