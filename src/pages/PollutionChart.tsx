import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { germanData } from "../data/germanData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = germanData.map((data) => data.date);
const dataValue = germanData.map((data) => data.value);

const LineChart: React.FC = () => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Air Quality in Germany",
        data: dataValue,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Air Quality Over Time in Germany",
      },
    },
  };

  return (
    <>
      <section>
        <div className="line-chart">
          <h2>Chart</h2>
          <Line data={data} options={options} />
        </div>
      </section>
    </>
  );
};

export default LineChart;
