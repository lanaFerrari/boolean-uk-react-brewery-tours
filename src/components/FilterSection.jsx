export default function FilterSection(props) {
  const {
    data,
    typeInput,
    typeOnChange,
    onClick,
    cityOnChange,
    isChecked
  } = props;

  // console.log("data inside FilterS", data);

  return (
    <>
      <aside className="filters-section">
        <h2>Filter By:</h2>
        <form id="filter-by-type-form" autocompete="off" onClick={onClick}>
          <label for="filter-by-type">
            <h3>Type of Brewery</h3>
          </label>
          <select
            name="filter-by-type"
            id="filter-by-type"
            value={typeInput}
            onChange={typeOnChange}
          >
            <option value="">Select a type...</option>
            <option value="micro">Micro</option>
            <option value="regional">Regional</option>
            <option value="brewpub">Brewpub</option>
          </select>
        </form>
        <div className="filter-by-city-heading">
          <h3>Cities</h3>
          <button className="clear-all-btn">clear all</button>
        </div>
        <form id="filter-by-city-form">
          {data.map((brewery) => {
            return (
              <>
                <input
                  key={brewery}
                  type="checkbox"
                  name={brewery.city.toLowerCase()}
                  value={brewery.city}
                  onChange={cityOnChange}
                  ischecked={false}
                />
                <label for="{brewery.city.toLowerCase()}">{brewery.city}</label>
              </>
            );
          })}
        </form>
      </aside>
    </>
  );
}

