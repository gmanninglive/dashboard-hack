import merge from "lodash/merge";
import ReactApexChart from "react-apexcharts";
import colors from "tailwindcss/colors";

type Props = {
  title: string;
  subheader: string;
  chartData: any[];
  chartLabels: string[];
};

export default function MonthlySpend({
  title,
  subheader,
  chartLabels,
  chartData,
  ...other
}: Props) {
  const chartOptions = merge(BaseOptionChart(), {
    plotOptions: { bar: { columnWidth: "16%" } },
    fill: { type: chartData.map((i) => i.fill) },
    labels: chartLabels,
    xaxis: { type: "datetime" },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y: any) => {
          if (typeof y !== "undefined") {
            return `£${y.toFixed(0)}`;
          }
          return y;
        },
      },
    },
  });

  return (
    <ReactApexChart
      type="line"
      series={chartData}
      //@ts-ignore
      options={chartOptions}
      height={364}
    />
  );
}

export function BaseOptionChart() {
  const LABEL_TOTAL = {
    show: true,
    label: "Total £",
  };

  const LABEL_VALUE = {
    offsetY: 8,
  };

  return {
    // Colors
    colors: [
      colors.blue["600"],
      colors.yellow["600"],
      colors.violet["600"],
      colors.green["600"],
      colors.red["600"],
      colors.orange["600"],
    ],

    // Chart
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      type: "bar",
      stacked: true,
    },

    // States
    states: {
      hover: {
        filter: {
          type: "lighten",
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: "darken",
          value: 0.88,
        },
      },
    },

    // Fill
    fill: {
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },

    // Datalabels
    dataLabels: { enabled: false },

    // Stroke
    stroke: {
      width: 10,
      curve: "smooth",
      lineCap: "round",
    },

    // Grid
    grid: {
      strokeDashArray: 3,
      //   borderColor: ,
    },

    // Xaxis
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
    },

    // Markers
    markers: {
      size: 0,
    },

    // Tooltip
    tooltip: {
      x: {
        show: false,
      },
    },

    // Legend
    legend: {
      show: true,
      fontSize: "13",
      position: "top" as "top",
      horizontalAlign: "right" as "right",
      markers: {
        radius: 12,
      },
      fontWeight: 500,
      itemMargin: { horizontal: 12 },
      labels: {},
    },

    // plotOptions
    plotOptions: {
      // Bar
      bar: {
        columnWidth: "28%",
        borderRadius: 4,
      },
      // Pie + Donut
      pie: {
        donut: {
          labels: {
            show: true,
            value: LABEL_VALUE,
            total: LABEL_TOTAL,
          },
        },
      },
      // Radialbar
      radialBar: {
        track: {
          strokeWidth: "100%",
        },
        dataLabels: {
          value: LABEL_VALUE,
          total: LABEL_TOTAL,
        },
      },
      // Radar
      radar: {
        polygons: {
          fill: { colors: ["transparent"] },
        },
      },
      // polarArea
      polarArea: {
        rings: {
          strokeColor: colors.gray[600],
        },
        spokes: {
          connectorColors: colors.fuchsia[600],
        },
      },
    },

    // Responsive
    responsive: [
      {
        // sm
        breakpoint: "600px",
        options: {
          plotOptions: { bar: { columnWidth: "40%" } },
        },
      },
      {
        // md
        breakpoint: "1024px",
        options: {
          plotOptions: { bar: { columnWidth: "32%" } },
        },
      },
    ],
  };
}
