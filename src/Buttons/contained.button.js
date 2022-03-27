import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      //means that every direct descendant element of the class root will have those styles applied to it, but the elements inside those will not
      margin: theme.spacing(1)
    }
  },
  buttonStyle: {
    color: (props) => (props.cool ? "green" : "purple")
  }
}));

export default function ContainedButtons(props) {
  const classes = useStyles(props);
  // the first button depend on props value
  console.log(props);
  return (
    <div className={classes.root}>
      <Button variant="outlined" className={classes.buttonStyle}>
        makeStyles
      </Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}
