import React from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";

//pass them to makeStyle

// const useStyles = makeStyles((theme) => ({
//   buttonStyle: {
//     color: "red",
//     [theme.breakpoints.up("sm")]: {
//       color: "white",
//       backgroundColor: "gray"
//     }
//   }
// }));

// const useStyles = makeStyles({
//   buttonStyle: {
//     color: (props) => (props.cool ? "blue" : "red")
//   }
// });

const useStyles = makeStyles((theme) => ({
  buttonText: (props) => {
    return {
      color: props.cool ? "white" : "red",
      [theme.breakpoints.up("sm")]: {
        //Apply breakpoints to style with theme
        color: "yellow",
        width: "100%"
      }
      //backgroundColor: props.cool ? "orange" : "yellow"
    };
  },
  buttonBackground: {
    backgroundColor: "green"
  }
}));

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

export const TextButton = (props) => {
  //condiction style: passing props to makeStyle
  const classes = useStyles(props);
  console.log("textbutton", props);
  return (
    // combine two class with classnames library
    <Button
      className={classnames(classes.buttonText, classes.buttonBackground)}
      color="secondary"
      variant="outlined"
      endIcon={<DeleteIcon />}
    >
      Regular Text Button
    </Button>
  );
};
