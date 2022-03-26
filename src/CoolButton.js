import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

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
  buttonText: (props) => {
    return {
      color: props.cool ? "white" : "yellow",
      [theme.breakpoints.up("sm")]: { color: "cyan" },
      backgroundColor: props.cool ? "orange" : "green",
      borderRadius: "20px"
    };
  },
  buttonBackground: {
    backgroundColor: "red"
  }
}));
// apply two className to a component
export default function Hook(props) {
  const classes = useStyles(props);

  return (
    <Button
      size="large"
      className={classNames(classes.buttonText, classes.buttonBackground)}
    >
      Cool button
    </Button>
  );
}
