import React from "react";
import "../../UI/GlobalStyles.scss";
import styles from "./Search.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SearchPopup from "../../components/SearchPopup";
import SearchList from "../../components/SearchList";

const Search = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.search}>
        <SearchPopup />
        <SearchList />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
