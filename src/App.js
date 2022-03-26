import React from "react";
import "./styles.css";
//import Button from "./CoolButton";
import { TextButton } from "./Buttons";
// import { IconLabelButtons } from "./IconButtons";
//import Stack from "@mui/material/Stack";

//import {Button} from "@material-ui/core";

export default function App() {
  // const cool = true;
  return (
    <div className="App">
      <h1>Material Ui</h1>
      <h2>Introduction</h2>
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
