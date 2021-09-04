export default function ListSection(props) {
  const {
    data,
    formInput,
    searchFormInput,
    handleSearchSubmit,
    searchOnChange
  } = props;

  return (
    <>
      <h1>
        List of Breweries from{" "}
        {formInput[0].toUpperCase() + formInput.substring(1)}
      </h1>
      <header className="search-bar">
        <form
          id="search-breweries-form"
          autocomplete="off"
          onSubmit={handleSearchSubmit}
        >
          <label for="search-breweries">
            <h2>Search breweries:</h2>
          </label>
          <input
            id="search-breweries"
            name="search-breweries"
            type="text"
            value={searchFormInput}
            onChange={searchOnChange}
          />
        </form>
      </header>
      <article>
        <ul className="breweries-list">
          {data.map((brewery) => {
            return (
              <li>
                <h2>{brewery.name}</h2>
                <div className="type">{brewery.brewery_type}</div>
                <section className="address">
                  <h3>Address:</h3>
                  <p>{brewery.street}</p>
                  <p>
                    <strong>{brewery.postal_code}</strong>
                  </p>
                </section>
                <section className="phone">
                  <h3>Phone:</h3>
                  <p>{brewery.phone}</p>
                </section>
                <section className="booking">
                  <button>Book a tour</button>
                </section>
                <section className="link">
                  <a href="{brewery.website_url}" target="_blank">
                    Visit Website
                  </a>
                </section>
                {/* <section className="booking-form">
              <h3>Book a tour:</h3>
              <form>
                <label>
                  First Name
                  <input type="text" name="firstName" value="" />
                </label>
                <label>
                  Last Name
                  <input type="text" name="lastName" value="" />
                </label>
                <label>
                  Tour date
                  <input type="date" name="date" value="" />
                </label>
                <label>
                  Time
                  <input
                    type="time"
                    name="time"
                    min="09:00"
                    max="18:00"
                    step="3600"
                    value=""
                  />
                </label>
                <label>
                  No. people
                  <input
                    type="number"
                    min="1"
                    max="10"
                    name="peopleCount"
                    value=""
                  />
                </label>
                <input type="submit" value="Book Now!" />
              </form>
            </section> */}
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}