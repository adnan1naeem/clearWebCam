import React from "react";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png";
import { Button, Box } from "@material-ui/core";
import success from "../../assets/succes.json";
const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    // justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: "#77d79b",
    height: "100vh",
    [theme.breakpoints.up("lg")]: {
      height: "100%",
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
      height: 149,
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
  },
  lottiewrap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    [theme.breakpoints.up("lg")]: {
      height: 409,
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
    width: 171,
    height: 100,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "63px",
    textAlign: "center",
    letterSpacing: -0.408,
    color: "#FFFFFF",
    [theme.breakpoints.up("lg")]: {
      fontSize: 80,
      lineHeight: "78.75px",
      width: 414,
      height: 119,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 50,
      lineHeight: "78.75px",
      width: 214,
      height: 99,
    },
  },
  btnbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    [theme.breakpoints.up("lg")]: {
      height: 161,
    },
    [theme.breakpoints.only("sm")]: {
      height: 150,
    },
  },
  btn: {
    width: 292,
    height: 68,
    background: "#27C669",
    borderRadius: 53,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "35px",
    /* identical to box height */

    letterSpacing: -0.408,

    color: "#FFFFFF",
    [theme.breakpoints.up("lg")]: {
      fontSize: 40,
      lineHeight: "63.75px",
      width: 543,
      height: 111,
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 30,

      width: 392,
      height: 80,
    },
  },
}));

const Success = () => {
  const classes = useStyles();
  const options = {
    animationData: success,
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
          <Lottie className={classes.lottie} animationData={success} />
        </Box>
        <Box className={classes.text}>SEAT 25B</Box>
        <Box className={classes.btnbox}>
          <Button className={classes.btn}>23lk4j23sdlkj23423lk</Button>
        </Box>
      </Box>
    </div>
  );
};

export { Success };
