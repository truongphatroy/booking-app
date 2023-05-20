import React from "react";
import Card from "./Card";
import styles from "./SearchList.module.scss";
import hotel_Search_1 from "./images/hotel_search_1.webp";
import hotel_Search_2 from "./images/hotel_search_2.jpg";
import hotel_Search_3 from "./images/hotel_search_3.jpg";

const searchArrs = [
  {
    name: "Tower Street Apartments",
    distance: "500m",
    tag: "Free airport taxi",
    type: "Entire studio • 1 bathroom • 21m² 1 full bed",
    description: "Studio Apartment with Air conditioning",
    free_cancel: true,
    price: 112,
    rate: 8.9,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    distance: "200m",
    tag: "Free Breakfast",
    type: "Entire studio • 2 bathroom • 100m² 2 full bed",
    description: "Studio Apartment",
    free_cancel: true,
    price: 140,
    rate: 9.3,
    rate_text: "Exceptional",
    image_url: "./images/hotel_search_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    distance: "100m",
    tag: "Free Parking",
    type: "1 bathroom • 51m² 2 full bed",
    description: "Hotel in Lisbon",
    free_cancel: false,
    price: 99,
    rate: 8.8,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_3.jpg",
  },
];

for (let i = 0; i < searchArrs.length; i++) {
  if (searchArrs[i].image_url === "./images/hotel_search_1.webp") {
    searchArrs[i].image_url = hotel_Search_1;
  } else if (searchArrs[i].image_url === "./images/hotel_search_2.jpg") {
    searchArrs[i].image_url = hotel_Search_2;
  } else if (searchArrs[i].image_url === "./images/hotel_search_3.jpg") {
    searchArrs[i].image_url = hotel_Search_3;
  }
}

function SearchList() {
  return (
    <div className={styles.SearchList}>
      {searchArrs.map((searchArr) => (
        <Card
          key={searchArr.name}
          name={searchArr.name}
          distance={searchArr.distance}
          tag={searchArr.tag}
          type={searchArr.type}
          description={searchArr.description}
          freeCancel={searchArr.free_cancel}
          price={searchArr.price}
          rate={searchArr.rate}
          rateText={searchArr.rate_text}
          imageUrl={searchArr.image_url}
        />
      ))}
    </div>
  );
}

export default SearchList;
