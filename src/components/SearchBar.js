import React, { useState } from 'react';
import '../index.css';

import { FaSearch } from 'react-icons/fa'; // Search icon from react-icons

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim() !== '') {
      const encodedQuery = encodeURIComponent(query);
      window.open(`https://www.google.com/search?q=${encodedQuery}`, '_blank');
    }
  };

  return (
    <div className="search-bar">
      <div className="search-bar-icon">
        <FaSearch />
      </div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <br></br>
      <div className="built-by">Naman Garg</div>

    </div>
  );
};

export default SearchBar;
