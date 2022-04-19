import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://restcountries.com/v2/name/";

const SingleCountry = () => {
  const { id } = useParams(); // get the params from the URL.

  const [loading, setLoading] = React.useState(false);
  const [country, setCountry] = React.useState(null);

  React.useEffect(() => {
    getCocktail();
  }, [id]);

  const getCocktail = async () => {
    console.log("this shit is working", id);
    try {
      setLoading(false);
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      // console.log(data);
      if (data) {
        const countryData = data.map((country) => {
          const {
            name,
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
            name,
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
    name,
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
  } = country[0];

  return (
    <section className="country-detail container">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <div className="details">
        <div className="details__flag">
          <img src={flag} alt={name} />
        </div>
        <div className="details_about">
          <div className="details_about--title">
            <h2>{name}</h2>
          </div>
          <div className="details_about--left">
            <p>
              "Native name :"
              <span className="details_about--native-name">{nativeName}</span>
            </p>
            <p>
              "Population :"
              <span className="details_about--population">{population}</span>
            </p>
            <p>
              "Region :"
              <span className="details_about--region">{region}</span>
            </p>
            <p>
              "Sub Region :"
              <span className="details_about--sub-region">{subregion}</span>
            </p>
            <p>
              "Capital :"
              <span className="details_about--capital">{capital}</span>
            </p>
          </div>
          <div className="details_about--right">
            <p>
              "Top Level Domain :"
              <span className="details_about--native-name">
                {topLevelDomain[0]}
              </span>
            </p>
            <p>
              "Currencies :"
              <span className="details_about--currencies">
                {currencies.code}
              </span>
            </p>
            <p>
              "Languages :"
              <span className="details_about--language">
                {languages.map((language) => {
                  return `${language.name}, `;
                })}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleCountry;
