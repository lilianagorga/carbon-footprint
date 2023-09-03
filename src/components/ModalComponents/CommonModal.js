export const CommonModal = ({ setStartDate, setEndDate, startDate, endDate }) => {
  return (
    <div>
      <div>
        <label>
          <span className="span-modal">Start Date:</span>
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
          <span className="span-modal">End Date:</span>
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