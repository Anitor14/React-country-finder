import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://restcountries.com/v2/name/";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("America");
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    console.log("I am fetching countries.");
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        const newCountries = data.map((country) => {
          const { name, capital, region, population, flag, numericCode } =
            country;
          return {
            id: numericCode,
            name,
            capital,
            region,
            population,
            flag,
          };
        });
        console.log(newCountries);
        setCountries(newCountries);
      } else {
        setCountries([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        countries,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
