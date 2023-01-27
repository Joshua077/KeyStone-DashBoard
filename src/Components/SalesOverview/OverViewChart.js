import ReactApexChart from "react-apexcharts";
import React from "react";
class OverViewChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Income",
          data: [31, 40, 28, 51, 42, 59, 23],
        },
        {
          name: "Expenses",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      grid: {
        // you can either change hear to disable all grids
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: [
        {
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
            color: "#FF1654",
          },
          labels: {
            style: {
              colors: "#FF1654",
            },
          },
          title: {
            text: "Income",
            style: {
              color: "#FF1654",
            },
          },
        },
        {
          opposite: false,
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
            color: "#247BA0",
          },
          labels: {
            style: {
              colors: "#247BA0",
            },
          },
          title: {
            text: "Series B",
            style: {
              color: "#247BA0",
            },
          },
        },
      ],
      options: {
        colors: ["#247BA0", "#FF1654"],

        chart: {
          height: 350,
          type: "area",
          toolbar: {
            show: true,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },

        yaxis: {
          show: false,
          showAlways: false,
        },
      },
    };
  }
  render() {
    return (
      <div className="px-9">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={260}
        />
      </div>
    );
  }
}

export default OverViewChart;
