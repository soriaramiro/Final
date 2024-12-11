import React from 'react';

const SearchHistory = ({ history }) => {
  return (
    <div className="search-history">
      <h3>Historial de búsquedas:</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
