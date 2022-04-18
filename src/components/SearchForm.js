import React from "react";
import { useGlobalContext } from "../context";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineArrowDown } from "react-icons/ai";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef(""); //this references an element.

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchCountry = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="search container">
      <form className="search-bar" onSubmit={handleSubmit}>
        <BiSearchAlt className="search-svg"></BiSearchAlt>
        <input
          type="text"
          placeholder="Search for a Country"
          className="search-field"
          id="search"
          ref={searchValue}
          onChange={searchCountry}
        />
      </form>
      <div className="search-filter">
        <select
          name="country"
          className="country-select"
          placeholder="Filter by Region"
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchForm;
