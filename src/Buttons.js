import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonStyle: {
    color: "orange"
  }
});

export const ContainButton = () => {
  return (
    <Button
      variant="contained"
      size="large"
      color="secondary"
      disableRipple
      onClick={() => alert("Hello")}
    >
      Click Me
    </Button>
  );
};

export const OutlinedButton = () => {
  return (
    <Button variant="outlined" size="large" color="secondary">
      More Button
    </Button>
  );
};

export const TextButton = () => {
  const classes = useStyles();
  return (
    <Button
      className={classes.buttonStyle}
      color="secondary"
      variant="outlined"
    >
      Regular Text Button
    </Button>
  );
};
