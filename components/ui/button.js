import Link from "next/link";
import React, { Fragment } from "react";
import classes from "./button.module.css";

function Button(props) {
  return (
    <Fragment>
      {props.link ? (
        <Link className={classes.btn} href={props.link}>
          {props.children}
        </Link>
      ) : (
        <button className={classes.btn} onClick={props.onClick}>
          {props.children}
        </button>
      )}
    </Fragment>
  );
}

export default Button;
