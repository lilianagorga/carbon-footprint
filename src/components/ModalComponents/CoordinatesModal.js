export const CoordinatesModal = ({
  setLongitude,
  setLatitude,
  longitude,
  latitude,
}) => {
  return (
    <div>
      <div>
        <label>
          Longitude:
          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Latitude:
          <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};