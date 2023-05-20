import React from "react";
import styles from "./Input.module.scss";
import clsx from "clsx";

function Input({ placeholder, label, inputSecondary, inputPrimary }) {
  let classes = clsx({
    [styles.inputSecondary]: inputSecondary,
    [styles.inputPrimary]: inputPrimary,
  });
  return (
    <label className={classes}>
      <span>{label}</span>
      <input placeholder={placeholder}></input>
    </label>
  );
}

export default Input;
