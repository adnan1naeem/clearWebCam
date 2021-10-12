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
    // maxWidth: 1280,
    alignSelf: "center",
  },
  logobox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 149,
    width: "100%",
    background: "#191919",
  },
  logo: {
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
  },
  lottie: {
    width: 164,
    height: 164,

    // [theme.breakpoints.only("sm")]: {
    //   width: 200,
    //   height: 200,
    // },
  },
  text: {
    width: 370,
    height: 140,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 40,
    lineHeight: "63px",
    textAlign: "center",
    letterSpacing: -0.408,
    color: "#FFFFFF",

    // [theme.breakpoints.only("sm")]: {
    //   fontSize: 40,
    //   lineHeight: "70.75px",
    //   width: 341,
    //   height: 149,
    // },
    // [theme.breakpoints.only("xs")]: {
    //   fontSize: 30,
    //   lineHeight: "58.75px",
    //   width: 254,
    //   height: 129,
    // },
  },
  btn: {
    width: 262,
    height: 65,
    background: "#cb3837",
    borderRadius: 53,
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 22,
    lineHeight: "35px",
    /* identical to box height */

    letterSpacing: -0.408,

    color: "#FFFFFF",
  },
}));
const NotFound = () => {
  const classes = useStyles();
  const options = {
    animationData: notfoundgif,
    loop: true,
    autoplay: false,
  };
  const { View } = useLottie(options);
  return (
    <div className={classes.main}>
      <Box className={classes.logobox}>
        <img src={logo} alt="" />
      </Box>
      <Box className={classes.lottiebox}>
        <Box className={classes.lottiewrap}>
          <Lottie
            loop={false}
            className={classes.lottie}
            animationData={notfoundgif}
          />
        </Box>
        <Box className={classes.text}>PLEASE SEE YOUR GATE ATTENDANT</Box>
        <Button className={classes.btn}>Enroll</Button>
      </Box>
    </div>
  );
};
export { NotFound };
