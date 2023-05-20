import React from "react";
import "../../UI/GlobalStyles.scss";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import CityList from "../../components/CityList";
import HotelType from "../../components/HotelType";
import HotelList from "../../components/HotelList";
import Register from "../../components/Register";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CityList />
      <HotelType />
      <HotelList />
      <Register />
      <Footer />
    </div>
  );
};

export default Home;
