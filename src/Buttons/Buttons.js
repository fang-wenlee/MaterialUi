import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  buttonStyle: (props) => {
    return {
      color: props.cool ? "blue" : "red",
      [theme.breakpoints.up("sm")]: {
        //Apply breakpoints to style with theme
        color: "white",
        width: "100%"
      },
      backgroundColor: props.cool ? "orange" : "yellow"
    };
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
    <Button
      className={classes.buttonStyle}
      color="secondary"
      variant="outlined"
    >
      Regular Text Button
    </Button>
  );
};
