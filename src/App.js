import React from "react";
import "./styles.css";
//import Button from "./CoolButton";
import { TextButton } from "./Buttons/Buttons";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContainedButtons from "./Buttons/contained.button";
import UploadButtons from "./Buttons/upload.buttons";
import IconLabelButtons from "./Buttons/icon.label.buttons";

const useStyle = makeStyles((theme) => ({
  IntroductionStyle: {
    fontStyle: "oblique",
    color: "green"
  },
  textStyle: {
    backgroundColor: "yellow",
    colro: "blue"
  }
}));

export default function App() {
  const classes = useStyle();
  const cool = true;
  return (
    <div className="App">
      <h1>Material Ui</h1>
      <ContainedButtons cool={cool} />

      <Typography variant="h4" className={classes.IntroductionStyle}>
        Introduction
      </Typography>

      <TextButton cool={cool} />
      <h2 className={classes.textStyle}> hello</h2>

      <UploadButtons />
      <IconLabelButtons />
      {/* <div style={{ marginRight: "20px" }}>
        <CoolButton cool={true} />
        <ContainButton />
        <OutlinedButton />
      </div>
      <IconLabelButtons /> */}
    </div>
  );
}
