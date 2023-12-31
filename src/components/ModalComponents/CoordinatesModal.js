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
          <span className="span-modal">Longitude:</span>
          <input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="input-modal"
            placeholder="-180 to 180"
          />
        </label>
      </div>
      <div>
        <label>
          <span className="span-modal">Latitude:</span>
          <input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="input-modal"
            placeholder="-90 to 90"
          />
        </label>
      </div>
    </div>
  );
};