import React from "react";
import { Link } from "react-router-dom";

const Country = ({ id, name, capital, region, population, flag }) => {
  const addCommaNumber = (number) => {
    return number.toLocaleString("en-US");
  };
  return (
    <article className="country">
      <img src={flag} alt={name} className="country_img" />
      <div className="country_data">
        <h4 className="country_name">{name}</h4>
        <p className="country_row">
          <span>Population: </span>
          {`${addCommaNumber(population)}`}
        </p>
        <p className="country_row region">
          <span>Region: </span>
          {region}
        </p>
        <p className="country_row">
          <span>Capital: </span>
          {capital}
        </p>
        <Link to={`/country/${name}`} className="btn btn-primary">
          details
        </Link>
      </div>
    </article>
  );
};

export default Country;
