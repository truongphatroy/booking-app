import React from "react";
import styles from "./DetailDescription.module.scss";

function DetailDesciption({ title, description }) {
  return (
    <div className={styles.DetailDesciption}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default DetailDesciption;
