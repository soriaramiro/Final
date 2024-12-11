import { useState } from 'react'
import SearchBar from './SearchBar';
import CountryList from './CountryList';
import SearchHistory from './SearchHistory';
import './App.css'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = async (query) => {
    if (!query) return;

    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
      if (!response.ok) {
        setCountries([]);
        return;
      }

      const data = await response.json();
      setCountries(data);

      const countryName = data[0]?.name?.common;
      if (countryName && !searchHistory.includes(countryName)) {
        setSearchHistory((prev) => {
          const updatedHistory = [countryName, ...prev];
          return updatedHistory.slice(0, 5);
        });
      }
    } catch (error) {
      console.error('Error fetching countries:', error);
      setCountries([]);
    }
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <CountryList countries={countries} />
      <SearchHistory history={searchHistory} />
    </div>
  );
};

export default App;