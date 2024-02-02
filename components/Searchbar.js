import React from 'react';
import styles from './styles/Searchbar.module.css';

const Searchbar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Enter NIC number"
        onChange={handleSearch}
        className={styles.input}
      />
      <button className={styles.button}>Search</button>
    </div>
  );
};

export default Searchbar;