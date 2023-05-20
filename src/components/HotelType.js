import React from "react";

import Image from "./Image";
import styles from "./HotelType.module.scss";
import type_1 from "./images/type_1.jpg";
import type_2 from "./images/type_2.jpg";
import type_3 from "./images/type_3.jpg";
import type_4 from "./images/type_4.jpg";
import type_5 from "./images/type_5.jpg";

const HotelTypes = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

for (let i = 0; i < HotelTypes.length; i++) {
  if (HotelTypes[i].image.slice(9, 15) === "type_1")
    HotelTypes[i].image = type_1;
  else if (HotelTypes[i].image.slice(9, 15) === "type_2")
    HotelTypes[i].image = type_2;
  else if (HotelTypes[i].image.slice(9, 15) === "type_3")
    HotelTypes[i].image = type_3;
  else if (HotelTypes[i].image.slice(9, 15) === "type_4")
    HotelTypes[i].image = type_4;
  else if (HotelTypes[i].image.slice(9, 15) === "type_5")
    HotelTypes[i].image = type_5;
}

function HotelType() {
  return (
    <div>
      <h2 className={styles.HotelTypetitle}>Browse by property type</h2>
      <div className={styles.HotelType}>
        {HotelTypes.map((HotelType, i) => (
          <div key={i} className={styles.HotelTypeFrame}>
            <Image
              // key={Math.random().toString()}

              image={HotelType.image}
              HotelTypeStyle
            />
            <h3 className={styles.imageName}>{HotelType.name}</h3>
            <p className={styles.imageSubText}>{`${HotelType.count} hotel`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelType;
