import React from "react";
import styles from "./App.module.css";

import BusinessList from './components/BusinessList'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;
