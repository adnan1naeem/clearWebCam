import React from "react";
import Webcam from "react-webcam";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png";
import { Button, Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    overflow: "hidden", // justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: "black",
    height: "100vh",
    alignSelf: "center",
    [theme.breakpoints.up("lg")]: {
      height: "100%",
    },
  },
  imgbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    // [theme.breakpoints.only("md")]: {
    //   height: 140,
    // },
    // [theme.breakpoints.up("lg")]: {
    //   height: 180,
    // },
  },
  logo: {
    height: 42.76,
  },
  webcam: {
    width: "100%",
    // maxWidth: 1024,
  },
  btnbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 140,
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
    letterSpacing: -0.408,

    color: "#FFFFFF",
  },
}));

const Ready = () => {
  const classes = useStyles();
  const [height, setHeight] = React.useState();
  React.useEffect(
    () => {
      setHeight(window.innerHeight);
    },
    [],
    [window.innerHeight]
  );
  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
  };
  return (
    <div className={classes.main}>
      <Box className={classes.imgbox}>
        <img src={logo} className={classes.logo} alt="PrivateId Logo" />
      </Box>
      <Webcam height={height} videoConstraints={videoConstraints} />
      <Box className={classes.btnbox}>
        <Button className={classes.btn}>Ready</Button>
      </Box>
    </div>
  );
};
export { Ready };
