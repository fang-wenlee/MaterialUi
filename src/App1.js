import "./styles.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  buttonStyle: { color: "red" },
  textStyle: { color: "green" }
});

export default function App() {
  const classes = useStyles();
  console.log(classes);
  return (
    <div className="App">
      <h1>Apply material UI to React Component</h1>
      <Button className={classes.buttonStyle}>Click Me</Button>
      <Button className={classes.textStyle}>Submit file</Button>
    </div>
  );
}
