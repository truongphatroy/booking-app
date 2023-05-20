import React from "react";
import DetailCard from "./DetailCard";
import DetailDesciption from "./DetailDesciption";
import styles from "./DetailFoot.module.scss";
function DetailFoot({ title, description, nine_night_price }) {
  return (
    <div className={styles.DetailFoot}>
      <DetailDesciption title={title} description={description} />
      <DetailCard nine_night_price={nine_night_price} />
    </div>
  );
}

export default DetailFoot;
