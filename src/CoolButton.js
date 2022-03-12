import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   buttonStyle: { color: (props) => (props.cool ? "blue" : "yellow") }
// });

// const useStyles = makeStyles({
//   buttonStyle: (props) => {
//     return {
//       color: props.cool ? "red" : "yellow",
//       backgroundColor: props.cool ? "orange" : "green"
//     };
//   }
// });
//apply theem
const useStyles = makeStyles((theme) => ({
  buttonStyle: (props) => {
    return {
      color: props.cool ? "red" : "yellow",
      [theme.breakpoints.up("sm")]: { color: "cyan" },
      backgroundColor: props.cool ? "orange" : "green"
    };
  }
}));

const CoolButton = (props) => {
  const classes = useStyles(props);

  return (
    <Button fullWidth className={classes.buttonStyle}>
      Cool button
    </Button>
  );
};

export default CoolButton;
