import React from "react";
import styles from "./DetailImage.module.scss";
import hotel_detail_1 from "./images/hotel_detail_1.jpg";
import hotel_detail_2 from "./images/hotel_detail_2.jpg";
import hotel_detail_3 from "./images/hotel_detail_3.jpg";
import hotel_detail_4 from "./images/hotel_detail_4.jpg";
import hotel_detail_5 from "./images/hotel_detail_5.jpg";
import hotel_detail_6 from "./images/hotel_detail_6.jpg";

const hotel_detail = [
  hotel_detail_1,
  hotel_detail_2,
  hotel_detail_3,
  hotel_detail_4,
  hotel_detail_5,
  hotel_detail_6,
];

function DetailImage({ photos }) {
  return (
    <div className={styles.DetailImage}>
      {hotel_detail.map((photo) => (
        <img key={photo} src={photo} />
      ))}
    </div>
  );
}

export default DetailImage;
