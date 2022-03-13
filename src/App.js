import React from "react";
import CoolButton from "./CoolButton";
import { ContainButton, OutlinedButton } from "./Buttons";
import { IconLabelButtons } from "./IconButtons";
//import Stack from "@mui/material/Stack";

export default function App() {
  // const cool = true;
  return (
    <>
      <div style={{ marginRight: "20px" }}>
        <CoolButton cool={true} />
        <ContainButton />
        <OutlinedButton />
      </div>
      <IconLabelButtons />
    </>
  );
}
