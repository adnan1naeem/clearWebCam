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
  },
  btnbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
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
  },
}));

const Success = () => {
  const classes = useStyles();
  const options = {
    animationData: success,
    loop: false,
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
