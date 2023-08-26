export const CountryModal = ({ country, setCountry, countryList }) => {
  return (
    <div>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select a country</option>
        {countryList.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>
    </div>
  );
};
