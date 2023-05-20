import React from "react";
import Button from "./Button/Button";
import styles from "./DetailCard.module.scss";

function DetailCard({ nine_night_price }) {
  return (
    <div className={styles.DetailCard}>
      <h3>Perfect for a 9-night stay!</h3>
      <p>
        Locatied in the real heart of Krakow, this property has an excellent
        location score of 9.8!
      </p>
      <h2>{`$${nine_night_price} (9 nights)`}</h2>
      <Button reserveBottom children={"Reserve or Book Now!"} />
    </div>
  );
}

export default DetailCard;
