import React from "react";
import Country from "./Country";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CountryList = () => {
  const { loading, countries } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (countries.length < 1) {
    return (
      <h2 className="section-title">
        No countries matched your search criteria
      </h2>
    );
  }
  return (
    <section>
      <h2 className="section-title">Country List</h2>
      <div className="cocktails-center">
        {countries.map((item) => {
          return <Country key={item.id} {...item}></Country>;
        })}
      </div>
    </section>
  );
};

export default CountryList;
