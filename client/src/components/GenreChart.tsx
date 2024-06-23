import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

interface Props {
  topGenres: { genre: string; count: number }[];
  className?: string;
}

export default function GenreChart({ topGenres, className }: Props) {
  const totalCount = topGenres.reduce((acc, curr) => acc + curr.count, 0);

  const data = {
    labels: topGenres.map((ranking) => ranking.genre),
    datasets: [
      {
        label: "Count",
        data: topGenres.map((ranking) => ranking.count),
        backgroundColor: [
          "rgb(148, 220, 208)",
          "rgb(242, 192, 192)",
          "rgb(176, 217, 181)",
          "rgb(242, 125, 167)",
          "rgb(255, 205, 116)",
          "rgb(156, 182, 193)",
        ],
        borderColor: [
          "rgb(148, 220, 208)",
          "rgb(242, 192, 192)",
          "rgb(176, 217, 181)",
          "rgb(242, 125, 167)",
          "rgb(255, 205, 116)",
          "rgb(156, 182, 193)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      plugins: {
        datalabels: {
          display: false,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = topGenres[context.dataIndex].count;
            const percentage = Math.round((value / totalCount) * 100).toFixed(
              0,
            );
            return `${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <div className={`flex max-h-96 w-full justify-center ${className}`}>
      <Pie data={data} options={options} />
    </div>
  );
}
