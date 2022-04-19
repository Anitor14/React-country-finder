import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://restcountries.com/v2/name/";

const singleCountry = () => {
  const { name } = useParams(); // get the params from the URL.
  const [loading, setLoading] = React.useState(false);
  const [country, setCountry] = React.useState(null);

  React.useEffect(() => {
    getCocktail();
  }, [name]);

  const getCocktail = async () => {
    try {
      setLoading(false);
      const response = await fetch(`${url}${name}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        const countryData = data.map((country) => {
          const {
            countryName: name,
            flag,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            numericCode,
          } = country;
          return {
            id: numericCode,
            countryName,
            flag,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
          };
        });
        console.log(countryData);
        setCountry(countryData);
      } else {
        setCountry(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (!country) {
    return <h2 className="section-title">No countries to display</h2>;
  }

  const {
    countryName,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    numericCode,
  } = country;

  return (
    <section className="country-detail container">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <div className="details">
        <div className="details__flag">
          <img src={name} alt={countryName} />
        </div>
      </div>
    </section>
  );
};
export default singleCountry;
