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
import stepsTop from "@images/stepSection.png";
import stepsTopM from "@images/stepSection-M.png";

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
      top: '10%',
      left: '5%',
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
    marginTop:theme.spacing(2),
    width: theme.spacing(88),
    lineHeight: 1.5,
  },
  introductionBottom: {
    marginTop:theme.spacing(2),
    width: theme.spacing(88),
    lineHeight: 1.5,
  },
  title:{
    color:theme.palette.prophecyPrimary.light,
    fontWeight:900,
    marginTop:theme.spacing(2)
  },
  stepsContainer:{
    display:"inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border:"1px red solid",
    minHeight:theme.spacing(85),
    width:"50%"
  }
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
        <img src={matches ? stepsTopM : stepsTop} width="100%" />
        <Typography variant="h5" component="div" className={classes.text}>
          <Box
            fontWeight="fontSize.body1"
            color="#D4F6FF"
            mb={1}
            fontSize={matches ? "h5.fontSize" : "h4.fontSize"}
          >
            告別繁瑣{matches ? <br /> : null}迎接次世代無創抽血篩查！
          </Box>
          <Typography
            variant={matches ? "h1" : "h3"}
            className={classes.textSub}
          >
            <Box display="inline-block" fontSize="h3.fontSize" lineHeight="1.5">
              簡單、便捷
            </Box>
            {matches ? <br /> : null}
            <Box
              display="inline-block"
              fontSize="h3.fontSize"
              ml={matches ? 0 : 2}
              lineHeight="1.5"
            >
              一個
            </Box>

            <Box
              display="inline-block"
              fontWeight="fontSize.body1"
              color={theme.palette.secondary.main}
              fontSize="h3.fontSize"
              lineHeight="1.5"
            >
              &nbsp;Lunch Time&nbsp;
            </Box>
            {matches ? <br /> : null}
            <Box display="inline-block" fontSize="h3.fontSize" lineHeight="1.5">
              即完成
            </Box>
          </Typography>
        </Typography>
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
        <Box fontSize="h5.fontSize"   textAlign="center" className={classes.title}>檢測3步</Box>
        <Box  className={classes.stepsContainer}></Box>
      </Box>
    </Box>
  );
};

export default Steps;