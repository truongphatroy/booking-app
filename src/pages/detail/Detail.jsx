import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DetailTop from "../../components/DetailTop";
import DetailImage from "../../components/DetailImage";
import DetailFoot from "../../components/DetailFoot";
import Container from "../../components/Container";
import styles from "./Detail.module.scss";

const DetailArrs = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

const Detail = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <DetailTop
          name={DetailArrs.name}
          address={DetailArrs.address}
          distance={DetailArrs.distance}
          price={DetailArrs.price}
        />
        <DetailImage photos={DetailArrs.photos} />
        <DetailFoot
          title={DetailArrs.title}
          description={DetailArrs.description}
          nine_night_price={DetailArrs.nine_night_price}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Detail;
