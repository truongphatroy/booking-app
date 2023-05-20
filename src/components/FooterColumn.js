import React from "react";
import styles from "./FooterColumn.module.scss";

function FooterColumn(props) {
  return (
    <ul>
      {props.colValues.map((colValue) => (
        <li key={Math.random().toString()}>{colValue}</li>
      ))}
    </ul>
  );
}

export default FooterColumn;
