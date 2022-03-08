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
    top: theme.spacing(15),
    left: theme.spacing(17),
    [theme.breakpoints.down("xs")]: {
      top: theme.spacing(5),
      left: theme.spacing(2),
    },
  },
  textSub: {
    display: "inline-block",
    color: "#FFF",
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
            <Box display="inline-block" fontSize="h3.fontSize">
              簡單、便捷
            </Box>
            {matches ? <br /> : null}
            <Box
              display="inline-block"
              fontSize="h3.fontSize"
              ml={matches ? 0 : 2}
            >
              一個
            </Box>

            <Box
              display="inline-block"
              fontWeight="fontSize.body1"
              color={theme.palette.secondary.main}
              fontSize="h3.fontSize"
            >
              &nbsp;Lunch Time&nbsp;
            </Box>
            {matches ? <br /> : null}
            <Box display="inline-block" fontSize="h3.fontSize">
              即完成
            </Box>
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Steps;
