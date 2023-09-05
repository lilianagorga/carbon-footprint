import Chart from "./charts/Chart";
import PromptChart from "./charts/PromptChart";
import { previousPeriodOptions } from "../utils";

const EmissionsContent = ({
  previousPeriod,
  handlepreviousPeriodChange,
  rangeEmissions,
  average,
  promptChart,
}) => {
  return (
    <div>
      <div className="chart-label-container">
        <label className="chart-label">
          <span>Period: </span>
          <select value={previousPeriod} onChange={handlepreviousPeriodChange}>
            {previousPeriodOptions.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="charts-container">
        <Chart rangeEmissions={rangeEmissions} average={average} />
        <PromptChart data={promptChart} />
      </div>
    </div>
  );
};

export default EmissionsContent;