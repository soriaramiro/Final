import React from 'react';

const CountryList = ({ countries }) => {
  if (countries.length === 0) {
    return <p>No hay resultados.</p>;
  }

  return (
    <div className="country-list">
      {countries.map((country) => (
        <div key={country.cca3} className="country-item">
          <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
          <h3>{country.name.common}</h3>
          <p> Capital: {country.capital?.[0] || 'N/A'} </p>
          <p> Poblacion: {country.population.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
