import React, { useState } from 'react';
import { searchPages } from './wikipediaAPI';

const Search = ({ onSearchResultClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      const results = await searchPages(searchTerm);
      setSearchResults(results);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Wikipedia"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((result) => (
          <li key={result.pageid} onClick={() => onSearchResultClick(result.title)}>
            <h3>{result.title}</h3>
            <p>{result.snippet}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
