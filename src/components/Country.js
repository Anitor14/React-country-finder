import React from "react";
import { Link } from "react-router-dom";

const Country = ({ id, name, capital, region, population, flag }) => {
  return (
    <article className="country">
      <img src={flag} alt={name} className="country_img" />

      <div className="country_data">
        <h4 className="country_name">{name}</h4>
        <p className="country_row">
          <span>Population: </span>
          {population}
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
