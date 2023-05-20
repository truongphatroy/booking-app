import React from "react";
import Button from "./Button/Button";
import styles from "./Card.module.scss";
function Card(props) {
  return (
    <div className={styles.cardStyle}>
      <div className={styles.cardFrame}>
        <div className={styles.cardImage}>
          <img src={props.imageUrl} />
        </div>
        <div className={styles.cardInfor}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardName}>{props.name}</h2>
            <p
              className={styles.cardDiastance}
            >{`${props.distance} from center`}</p>
            <p className={styles.cardTag}>{props.tag}</p>
            <p className={styles.cardDescription}>{props.description}</p>
            <p className={styles.cardType}>{props.type}</p>
            <p className={styles.cardfreeCancel}>
              {props.freeCancel && ["Free cancellation"]}
            </p>
            <p className={styles.cardfreeCancelAdd}>
              {props.freeCancel && [
                "You can cancel later, so lock in this great price today!",
              ]}
            </p>
          </div>
        </div>
        <div className={styles.cardDetail}>
          <div className={styles.cardRateRow}>
            <div className={styles.cardRateTexe}>{props.rateText}</div>
            <div className={styles.cardRate}>{props.rate}</div>
          </div>
          <div className={styles.cardPrice}>{`$${props.price}`}</div>
          <div className={styles.cardTax}>{"Includes taxes and fees"}</div>
          <Button
            availability
            children={"See availability"}
            onClick={(event) => event.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
