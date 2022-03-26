import React from "react";
import "./styles.css";
//import Button from "./CoolButton";
import { TextButton } from "./Buttons";
import { Typography } from "@material-ui/core";
// import { IconLabelButtons } from "./IconButtons";
//import Stack from "@mui/material/Stack";

//import {Button} from "@material-ui/core";

export default function App() {
  // const cool = true;
  return (
    <div className="App">
      <h1>Material Ui</h1>
      <Typography variant="h2" color="primary">
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
