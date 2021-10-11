import React from "react";
import Webcam from "react-webcam";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png";
import { Button, Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#191919",
    height: "100vh",
  },
  imgbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    [theme.breakpoints.only("md")]: {
      height: 140,
    },
    [theme.breakpoints.up("lg")]: {
      height: 180,
    },
  },
  logo: {
    width: 218,
    height: 42.76,
  },
  webcam: {
    height: 353,
    width: 342,
    [theme.breakpoints.only("sm")]: {
      height: 444,
      width: 530,
    },
    [theme.breakpoints.only("md")]: {
      height: 444,
      width: 895,
    },
    [theme.breakpoints.up("lg")]: {
      width: 1174,
      height: 400,
    },
  },
  btnbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    [theme.breakpoints.only("sm")]: {
      height: 250,
    },
  },
  btn: {
    width: 100,
    height: 35,
    borderRadius: 0,
    background: "none",
    fontFamily: "Axiforma",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: -0.408,

    color: "#FFFFFF",
    [theme.breakpoints.only("sm")]: {
      fontSize: 35,
      width: 120,
    },
  },
}));

const Ready = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Box className={classes.imgbox}>
        <img src={logo} className={classes.logo} alt="PrivateId Logo" />
      </Box>
      <Webcam className={classes.webcam} />
      <Box className={classes.btnbox}>
        <Button className={classes.btn}>Ready</Button>
      </Box>
    </div>
  );
};
export { Ready };
