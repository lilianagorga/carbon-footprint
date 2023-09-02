export const CommonModal = ({ setStartDate, setEndDate, startDate, endDate }) => {
  return (
    <div>
      <div>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input-modal"
          />
        </label>
      </div>

      <div>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="input-modal"
          />
        </label>
      </div>
    </div>
  );
};