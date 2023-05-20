import React from "react";
import { ReactDOM } from "react-dom";
import city_1 from "./images/city_1.webp";
import city_2 from "./images/city_2.webp";
import city_3 from "./images/city_3.webp";

import styles from "./CityList.module.scss";
import Image from "./Image";

const imageCitys = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

let imageUrl = "";

for (let i = 0; i < imageCitys.length; i++) {
  if (imageCitys[i].image.slice(9, 15) === "city_1")
    imageCitys[i].image = city_1;
  else if (imageCitys[i].image.slice(9, 15) === "city_2")
    imageCitys[i].image = city_2;
  else if (imageCitys[i].image.slice(9, 15) === "city_3")
    imageCitys[i].image = city_3;
}

function CityList() {
  return (
    <div className={styles.cityList}>
      {imageCitys.map((imageCity) => (
        <div key={imageCity.name} className={styles.CityListFrame}>
          <Image
            // key={Math.random().toString()}

            image={imageCity.image}
            cityImageStyle
          />
          <h2 className={styles.imageName}>{imageCity.name}</h2>
          <h3 className={styles.imageSubText}>{imageCity.subText}</h3>
        </div>
      ))}
    </div>
  );
}

export default CityList;
