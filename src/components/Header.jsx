export default function Header(props) {
  const { handleSubmit, formInput, onChange } = props;

  return (
    <header className="main-header">
      <section className="select-state-section">
        <h2>Welcome to Brewery Tours</h2>
        <form id="select-state-form" autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="select-state">Which state are you visiting?</label>
          <input
            id="select-state"
            name="select-state"
            type="text"
            value={formInput}
            onChange={onChange}
          />
        </form>
      </section>
    </header>
  );
}
