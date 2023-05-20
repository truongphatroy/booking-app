import React from "react";
import styles from "./Container.moulde.scss";

function Container(props) {
  return <div className="Container">{props.children}</div>;
}

export default Container;
