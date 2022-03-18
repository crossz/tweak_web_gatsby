import React, { useState } from "react";
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  alpha,
} from "@material-ui/core/";
import Link from "@components/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import { StaticImage } from "gatsby-plugin-image";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { useI18next } from "gatsby-plugin-react-i18next";
SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    background: "#FAFFFF",
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
    color: theme.palette.prophecyPrimary.main,
    fontWeight: 900,
    margin: theme.spacing(4, 0, 1, 0),
  },
  titleSecond: {
    color: theme.palette.prophecyPrimary.main,
    fontWeight: 900,
    margin: "0 auto",
  },
  dark: {
    color: theme.palette.secondary.main,
    fontWeight: 900,
    margin: theme.spacing(0, 0, 2, 0),
  },
  addText: {
    color: theme.palette.prophecyPrimary.main,
    fontWeight: 900,
    margin: theme.spacing(0, 0, 2, 0),
  },
  stepsContainer: {
  },
  middleBox: {
    position: "relative",
    top: theme.spacing(-3),
    background: " #FFFFFF",
    boxShadow: "0px 2px 30px rgba(120, 120, 120, 0.15)",
    borderRadius: theme.spacing(3),
    minHeight: theme.spacing(100),
    margin: theme.spacing(0, 15, 0, 15),
    padding: theme.spacing(5, 2),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(0),
    },
  },
  iconBox: {
    flexShrink: 0,
    height: theme.spacing(15),
    width: theme.spacing(15),
    borderRadius: "50%",
    marginRight:theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      height: theme.spacing(10),
      width: theme.spacing(10),
      marginRight:theme.spacing(1),

    },
  },
  step: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(4),
    alignItems: "center",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: theme.spacing(4),
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
      padding: theme.spacing(2,0),
    },
  },
  img: {
    minHeight: theme.spacing(10),
    width: "100%",
  },
  arrowDown: {
    marginTop: theme.spacing(4),
    marginLeft: "50%",
  },
  triangleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding:'0 50px',
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding:"0 0"
    },
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  card: {
    background: "#fff",
    boxShadow: "0px 5px 30px rgba(124, 124, 124, 0.1)",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1, 2),
    marginBottom: theme.spacing(2),
  },
}));
const SectionTwo = () => {
  const { t } = useI18next();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles({
    progressRightWidth: matches ? 80 : 316,
    matches,
  });
  const steps = [
    {
      img: (
        <StaticImage
          className={classes.img}
          src="../../images/efficient_detection_01.png"
          alt="empty"
        ></StaticImage>
      ),

      detail:
        "靈敏度指能否準確找出真正患者，將「有病卻未能發現」的情況減到最低。所以篩查的靈敏度愈高，自然愈值得信賴。",
    },
    {
      img: (
        <StaticImage
          className={classes.img}
          src="../../images/efficient_detection_02.png"
          alt="empty"
        ></StaticImage>
      ),

      detail:
        "反之，若篩查的靈敏度不夠高，容易漏檢了真正有病的人，即是「明明有病，但以為自己無病」，結果延誤發現患病，令患者白白錯失了治療的黃金時機。",
    },
    {
      img: (
        <StaticImage
          className={classes.img}
          src="../../images/efficient_detection_03.png"
          alt="empty"
        ></StaticImage>
      ),

      detail:
        "假陽性指受測者的報告結果呈陽性但實際上是沒有患病的，一旦檢測出來的結果存在「假陽性」，會令患者產生巨大的心理負擔。",
    },
  ];
  const steps2 = [
    {
      img: (
        <StaticImage
          className={classes.img}
          src="../../images/ngs_advantage_01.png"
          alt="empty"
        ></StaticImage>
      ),
      title: "高靈敏度",
      detail:
        "篩查的靈敏度高於97%¹’²，而且絕少漏檢，結果準確可靠，冠絕其他同類測試！",
    },
    {
      img: (
        <StaticImage
          className={classes.img}
          src="../../images/ngs_advantage_02.png"
          alt="empty"
        ></StaticImage>
      ),
      title: "經萬人實證",

      detail:
        "並通過二萬名人士參與的臨床實證⁶，是市場上最值得信賴的早期鼻咽癌篩查。(詳情請向醫護人員查詢)",
    },
    {
      img: (
        <StaticImage
          className={classes.img}
          src="../../images/ngs_advantage_03.png"
          alt="empty"
        ></StaticImage>
      ),
      title: "頂尖大學研發",
      detail:
        "Take2 Prophecy™ 早期鼻咽癌篩查，應用了由本地頂尖大學團隊研發的次世代 DNA測序技術",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Box className={classes.root}>
      <Box className={classes.topContainer}>
        {matches ? (
          <StaticImage
            className={classes.img}
            src="../../images/section_banner_02_mobile.jpg"
            alt="empty"
          ></StaticImage>
        ) : (
          <StaticImage
            className={classes.img}
            src="../../images/section_banner_02.jpg"
            alt="empty"
          ></StaticImage>
        )}
      </Box>
      <Box className={classes.middleBox}>
        <Typography className={classes.introduction}>
          <Box className={classes.introductionTop} fontWeight="bold">
            去旅行，面對未知風險，你也會提前購買保險，未雨綢繆。在人生旅途上，其實我們同樣需要提防鼻咽癌，防患於未然。
          </Box>
          <Box className={classes.introductionBottom} fontWeight="bold">
            早期鼻咽癌篩查有效識別出未有明顯病徵的早期患者，助其及早開展治療，以大大提高治癒的機會，及減少治療帶來的副作用，將對生活的影響減至最低。懂得預備好你的「人生保險」，定期接受篩查，自然無需再「談癌色變」，可以放心面對各種挑戰。
          </Box>
        </Typography>
        <Typography>
          <Box className={classes.bottomContainer}>
            <Box
              fontSize="h5.fontSize"
              textAlign="center"
              className={classes.title}
            >
              何謂可靠有效的鼻咽癌篩查？
            </Box>
            <Box
              fontSize="h5.fontSize"
              textAlign="center"
              className={classes.dark}
              color={theme.palette.secondary.main}
            >
              高靈敏度、低假陽性
              {matches ? null : (
                <Box
                  fontSize="h5.fontSize"
                  textAlign="center"
                  display="inline-block"
                  pl={1}
                  className={classes.addText}
                >
                  至關重要
                </Box>
              )}
            </Box>
            {matches ? (
              <Box
                fontSize="h5.fontSize"
                textAlign="center"
                className={classes.addText}
              >
                至關重要
              </Box>
            ) : null}
            <Box className={classes.stepsContainer}>
              {steps.map((item, index) => (
                <Box>
                  <Box className={classes.step}>
                    <Box className={classes.iconBox}>{item.img}</Box>
                    <Box>
                      <Typography className={classes.introduction}>
                        <Box
                          width={matches ? null : "300px"}
                          color="prophecyPrimary.main"
                          fontWeight="500"
                          pl={matches ? 2 : 2}
                        >
                          {item.detail}
                        </Box>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>{" "}
            <Typography className={classes.introduction}>
              <Box
                className={classes.introductionBottom}
                fontWeight="500"
                margin="0 auto"
              >
                所以我們應選擇高靈敏度且低假陽性率的篩查，因為這表示其表現十分理想，能有效檢測出陽性患者，讓患者不會因漏檢而以為自己無病，延誤開展治療；同時有效減低誤判，免去我們承受不必要的擔憂，真正達到進行篩查的目的。
              </Box>
            </Typography>
          </Box>
        </Typography>
      </Box>
      <Box
        fontSize="h5.fontSize"
        textAlign="center"
        className={classes.titleSecond}
        maxWidth={420}
      >
        Take2 Prophecy™
        {matches ? <br /> : ""}
        早期鼻咽癌篩查{matches ? <br /> : ""}市場上最值得信賴 ？
      </Box>
      <Typography className={classes.introduction}>
        <Box
          fontWeight="500"
          margin="0 auto"
          width={theme.spacing(110)}
          textAlign="center"
          mt={2}
        >
          所以我們應選擇高靈敏度且低假陽性率的篩查，因為這表示其表現十分理想，能有效檢測出陽性患者，讓患者不會因漏檢而以為自己無病，延誤開展治療；同時有效減低誤判，免去我們承受不必要的擔憂，真正達到進行篩查的目的。
        </Box>
        <Box
          fontWeight="500"
          margin="0 auto"
          width={theme.spacing(110)}
          textAlign="center"
          mt={2}
        >
          此篩查的靈敏度＞97%，絕少漏檢，而且假陽性率極低
          (0.7%)，結果準確可靠，冠絕其他同類測試！
        </Box>
      </Typography>
      <Box
        maxWidth={theme.spacing(100)}
        margin={matches ? "20px 10px" : "40px auto"}
      >
        {matches ? (
          <StaticImage
            className={classes.img}
            src="../../images/table-mobile.jpg"
            alt="empty"
          ></StaticImage>
        ) : (
          <StaticImage
            className={classes.img}
            src="../../images/table.png"
            alt="empty"
          ></StaticImage>
        )}
      </Box>
      <Box
        fontSize="h5.fontSize"
        textAlign="center"
        className={classes.titleSecond}
        maxWidth={420}
      >
        頂尖大學研發 經萬人實證{" "}
      </Box>
      <Box className={classes.triangleContainer}>
        <Box
          maxWidth={theme.spacing(45)}
          margin={matches ? "20px 10px" : "20px auto"}
        >
          {matches ? (
            <StaticImage
              className={classes.img}
              src="../../images/ngs_advantage_triangle.png"
              alt="empty"
            ></StaticImage>
          ) : (
            <StaticImage
              className={classes.img}
              src="../../images/ngs_advantage_triangle.png"
              alt="empty"
            ></StaticImage>
          )}
        </Box>
        <Box
          display="inline-block"
          margin={matches ? "20px 10px" : "40px 10px"}
        >
          <Box
            className={classes.stepsContainer}
            // margin={matches ? theme.spacing(0, 0) : "0 20%"}
          >
            {steps2.map((item, index) => (
              <Box className={classes.card}>
                <Box className={classes.stepTwo}>
                  <Box className={classes.iconBox}>{item.img}</Box>
                  <Box ml={matches ? 0 : 3}>
                    <Box
                      fontSize="20px"
                      fontWeight="900"
                      color="prophecyPrimary.main"
                      display="inline-block"
                      my={matches ? 2 : 0}
                    >
                      <Box display="inline-block" pr={1}>
                        <StaticImage
                          src="../../images/check.png"
                          alt="empty"
                        ></StaticImage>
                      </Box>
                      {item.title}
                    </Box>
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
        <Grid item className={classes.item}>
          <Link
            className={classes.btnLink}
            to="/products-and-services/take2-extra-care"
          >
            <Button
              variant="outlined"
              color="primary"
              fullWidth={matches}
              className={classes.btn}
            >
              查看篩查服務點
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionTwo;
