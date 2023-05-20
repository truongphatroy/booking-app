import React from "react";
import Button from "./Button/Button";
import styles from "./Register.module.scss";

function Register() {
  return (
    <div className={styles.RegisterStyle}>
      <div className={styles.RegisterForm}>
        <h1 className={styles.RegisterTitle}>Save time, save money!</h1>
        <p className={styles.RegisterSubTitle}>
          Sign up and send the best deals to you
        </p>
        <input placeholder="Your Email"></input>
        <Button
          primary
          subscribe
          children={"Subscribe"}
          to="/search" // refer to search according to path as writen in App.js
          target="_blank"
        />
      </div>
    </div>
  );
}

export default Register;
