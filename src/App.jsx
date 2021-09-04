import { useEffect, useState } from "react";
import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import ListSection from "./components/ListSection";

export default function App() {
  const [data, setData] = useState([]);
  // console.log("Data", data);
  const [dataLi, setDataLi] = useState([]);
  console.log("Data inside List", dataLi);

  const [formInput, setFormInput] = useState("");
  const [searchFormInput, setSearchFormInput] = useState("");
  const [typeInput, setTypeInput] = useState();

  // console.log("Form input", formInput);
  // console.log("Search input", searchFormInput);
  // console.log("Type input", typeInput);
  const [isChecked, setIsChecked] = useState([]);
  const [cities, setCities] = [];
  console.log("Checked?", isChecked);

  // Fetch request
  const listByState = (formInput) => {
    const url = `https://api.openbrewerydb.org/breweries?by_state=${formInput}&per_page=50`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("Inside Fetch: ", data);
        const dataUpdate = data;

        setData(dataUpdate);
        setDataLi(dataUpdate);
      });
  };

  // Header functions
  const onChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput === "") {
      setData([]);
      setDataLi([]);
    } else {
      listByState(formInput);
    }
  };

  // Search functions

  const filteredByNameOrCity = data.filter(
    (brewery) =>
      brewery.name.toLowerCase() === searchFormInput.toLowerCase() ||
      brewery.city.toLowerCase() === searchFormInput.toLowerCase()
  );
  // console.log("Filtered by nameorcity", filteredByNameOrCity);

  const searchOnChange = (e) => {
    setSearchFormInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchFormInput === "") {
      listByState(formInput);
    } else {
      setDataLi(filteredByNameOrCity);
    }
  };

  //Filter functions by Type
  const typeOnChange = (e) => {
    setTypeInput(e.target.value);
  };

  const filteredByType = data.filter(
    (brewery) => brewery.brewery_type === typeInput
  );
  // console.log(filteredByType);

  const handleTypeClick = (e) => {
    e.preventDefault();
    if (typeInput === "") {
      listByState(formInput);
    } else {
      setDataLi(filteredByType);
    }
  };

  //Filter functions by City

  const handleCityOnChange = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    console.log("Checked inside function", checked);
    console.log("Value inside function", value);

    if (checked) {
      setIsChecked([...isChecked, value]);
      const filteredCities = data.filter((brewery) => value === brewery.city);
      setDataLi(filteredCities);
    } else {
      const filteredCities = data.filter((brewery) => value !== brewery.city);
      setDataLi(filteredCities);
    }
  };

  //   setIsChecked(e.target.value);
  // };

  return (
    <>
      <Header
        handleSubmit={handleSubmit}
        formInput={formInput}
        onChange={onChange}
      />
      <main>
        <aside className="filters-section">
          {data.length > 0 ? (
            <FilterSection
              data={data}
              typeInput={typeInput}
              typeOnChange={typeOnChange}
              onClick={handleTypeClick}
              cityOnChange={handleCityOnChange}
              isChecked={isChecked}
            />
          ) : (
            ""
          )}
        </aside>
        {data.length > 0 ? (
          <ListSection
            data={dataLi}
            formInput={formInput}
            searchFormInput={searchFormInput}
            handleSearchSubmit={handleSearchSubmit}
            searchOnChange={searchOnChange}
          />
        ) : (
          ""
        )}
      </main>
    </>
  );
}

