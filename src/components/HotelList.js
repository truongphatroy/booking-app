import React from "react";
import Image from "./Image";
import styles from "./HotelList.module.scss";
import { Link } from "react-router-dom";

import hotel_1 from "./images/hotel_1.webp";
import hotel_2 from "./images/hotel_2.jpg";
import hotel_3 from "./images/hotel_3.jpg";
import hotel_4 from "./images/hotel_4.jpg";

const HotelLists = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

for (let i = 0; i < HotelLists.length; i++) {
  if (HotelLists[i].image_url.slice(9, 16) === "hotel_1")
    HotelLists[i].image_url = hotel_1;
  else if (HotelLists[i].image_url.slice(9, 16) === "hotel_2")
    HotelLists[i].image_url = hotel_2;
  else if (HotelLists[i].image_url.slice(9, 16) === "hotel_3")
    HotelLists[i].image_url = hotel_3;
  else if (HotelLists[i].image_url.slice(9, 16) === "hotel_4")
    HotelLists[i].image_url = hotel_4;
}

function HotelList() {
  return (
    <div>
      <h2 className={styles.HotelListtitle}>Homes guests love</h2>
      <div className={styles.HotelList}>
        {HotelLists.map((HotelList) => (
          <div key={HotelList.name} className={styles.HotelListFrame}>
            <Image image={HotelList.image_url} />
            <Link to="/detail" className={styles.HotelListName}>
              {HotelList.name}
            </Link>
            <p className={styles.HotelListCity}>{HotelList.city}</p>
            <h3
              className={styles.HotelListPrice}
            >{`Start from $ ${HotelList.price}`}</h3>
            <p className={styles.HotelListRateType}>
              <span className={styles.HotelListRate}>{HotelList.rate}</span>
              <span className={styles.HotelListType}>{HotelList.type}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelList;
