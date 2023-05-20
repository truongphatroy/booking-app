import React from "react";
import Button from "./Button/Button";
import styles from "./DetailTop.module.scss";

function DetailTop(props) {
  return (
    <div className={styles.DetailTop}>
      <div className={styles.DetailTop_Text}>
        <h2 className={styles.name}>{props.name}</h2>
        <p className={styles.DetailAddress}>
          <span className="fa fa-location-dot"></span>
          <span className={styles.address}>{props.address}</span>
        </p>
        <p className={styles.distance}>{props.distance}</p>
        <p className={styles.price}>{props.price}</p>
      </div>
      <Button reserve children="Reserver or book Now!" />
    </div>
  );
}

export default DetailTop;
