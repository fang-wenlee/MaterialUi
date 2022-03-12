import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonStyle: { color: (props) => (props.cool ? "blue" : "yellow") }
});

const CoolButton = (props) => {
  const classes = useStyles(props);

  return <Button className={classes.buttonStyle}>Cool button</Button>;
};

export default CoolButton;
