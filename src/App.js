import React from "react";
import "./styles.css";
//import Button from "./CoolButton";
import { TextButton } from "./Buttons";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContainedButtons from "./Buttons/contained.button";
const useStyle = makeStyles({
  IntroductionStyle: {
    fontStyle: "oblique"
  }
});

export default function App() {
  const classes = useStyle();
  // const cool = true;
  return (
    <div className="App">
      <h1>Material Ui</h1>
      <ContainedButtons />
      <Typography
        variant="h2"
        color="primary"
        className={classes.IntroductionStyle}
      >
        Introduction
      </Typography>
      <TextButton />

      {/* <div style={{ marginRight: "20px" }}>
        <CoolButton cool={true} />
        <ContainButton />
        <OutlinedButton />
      </div>
      <IconLabelButtons /> */}
    </div>
  );
}
