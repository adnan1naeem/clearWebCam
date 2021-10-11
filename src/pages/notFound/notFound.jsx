import React from "react";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png";
import { Button, Box } from "@material-ui/core";
import notfoundgif from "../../assets/56947-icon-failed.json";
const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    // justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: "#ee6a4d",
    height: "100vh",
    //     maxWidth: 1280,
    [theme.breakpoints.up("lg")]: {
      height: 1140,
    },
  },
  logobox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 149,
    width: "100%",
    background: "#191919",
    [theme.breakpoints.up("lg")]: {
      height: 150,
    },
  },
  logo: {
    width: 218,
    height: 42.76,
  },
  lottiebox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      height: 600,
    },
  },
  lottiewrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    [theme.breakpoints.up("lg")]: {
      height: 561,
    },
    [theme.breakpoints.only("sm")]: {
      height: 400,
    },
  },
  lottie: {
    width: 164,
    height: 164,
    [theme.breakpoints.up("lg")]: {
      width: 361,
      height: 361,
    },
    [theme.breakpoints.only("sm")]: {
      width: 200,
      height: 200,
    },
  },
  text: {
    width: 254,
    height: 344,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 30,
    lineHeight: "47px",
    textAlign: "center",
    letterSpacing: -0.408,
    color: "#FFFFFF",
    [theme.breakpoints.up("lg")]: {
      width: 254,
      height: 100,
    },
    [theme.breakpoints.only("sm")]: {
      width: 341,
      height: 300,
      fontSize: 40,
      lineHeight: "63px",
    },
  },
}));
const NotFound = () => {
  const classes = useStyles();
  const options = {
    animationData: notfoundgif,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return (
    <div className={classes.main}>
      <Box className={classes.logobox}>
        <img src={logo} alt="" />
      </Box>
      <Box className={classes.lottiebox}>
        <Box className={classes.lottiewrap}>
          <Lottie className={classes.lottie} animationData={notfoundgif} />
        </Box>
        <Box className={classes.text}>PLEASE SEE YOUR GATE ATTENDANT</Box>
      </Box>
    </div>
  );
};
export { NotFound };
