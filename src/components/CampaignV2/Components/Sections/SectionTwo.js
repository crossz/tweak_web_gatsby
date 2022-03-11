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
  root: {
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
  stepsContainer: {},
  middleBox: {
    position: "relative",
    top: theme.spacing(-3),
    background: " #FFFFFF",
    boxShadow: "0px 2px 30px rgba(120, 120, 120, 0.15)",
    borderRadius: theme.spacing(3),
    minHeight: theme.spacing(100),
    margin: theme.spacing(0, 20, 0, 20),
    padding: theme.spacing(5, 1),
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(0),
    },
  },
  iconBox: {
    flexShrink: 0,
    height: theme.spacing(15),
    width: theme.spacing(15),
    borderRadius: "50%",
  },
  step: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: theme.spacing(4),
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: theme.spacing(4),
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
            <Box
              className={classes.stepsContainer}
              margin={matches ? theme.spacing(0, 0) : "0 20%"}
            >
              {steps.map((item, index) => (
                <Box>
                  <Box className={classes.step}>
                    <Box className={classes.iconBox}>{item.img}</Box>
                    <Box>
                      <Typography className={classes.introduction}>
                        <Box
                          width="300px"
                          color="prophecyPrimary.main"
                          fontWeight="500"
                          pt={matches ? 0 : 3}
                          pl={matches ? 0 : 2}
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
      <Box maxWidth={theme.spacing(100)} margin={matches?"20px 10px":"40px auto"}>
        {matches ? (
          <StaticImage
            className={classes.img}
            src="../../images/table-mobile.jpg"
            alt="empty"
          ></StaticImage>
        ) : (
          <StaticImage
            className={classes.img}
            src="../../images/table.jpg"
            alt="empty"
          ></StaticImage>
        )}
      </Box>
    </Box>
  );
};

export default SectionTwo;
