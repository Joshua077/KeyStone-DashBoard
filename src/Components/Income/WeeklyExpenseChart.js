import ReactApexChart from "react-apexcharts";
import React from "react";
class WeeklyExpenseChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Income",
          data: [1, 6.1, 1, 3, 5],
        },
      ],
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#ffffff",
          },
          labels: {
            style: {
              colors: "#ffffff",
            },
          },
          title: {
            text: "Income",
            style: {
              color: "#ffffff",
            },
          },
        },
        {
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: "#ffffff",
          },
          labels: {
            style: {
              colors: "#ffffff",
            },
          },
          title: {
            text: "Series B",
            style: {
              color: "#ffffff",
            },
          },
        },
      ],

      options: {
        colors: ["#Ffa500"],
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
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

        grid: {
          xaxis: {
            lines: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
      },
    };
  }
  render() {
    return (
      <div className="w-[100%]">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={150}
        />
      </div>
    );
  }
}

export default WeeklyExpenseChart;
