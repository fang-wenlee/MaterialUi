import React from "react";
import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";

//const useStyles = makeStyles(theme=>({ })

export const ContainButton = () => {
  // const classes = useStyles();
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
  // const classes = useStyles();
  return (
    <Button variant="outlined" size="large" color="secondary">
      More Button
    </Button>
  );
};
