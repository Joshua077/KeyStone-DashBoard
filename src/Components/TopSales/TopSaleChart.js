import ReactApexChart from "react-apexcharts";
import React from "react";
class TopSaleChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          data: [20, 30, 40, 80, 20, 80],
        },
      ],
      options: {
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        colors: ["#247BA0", "#FF1654"],
        stroke: {
          show: true,
        },
        xaxis: {
          categories: ["April", "May", "June", "July", "August", "September"],
          labels: {
            show: false,
            style: {
              colors: ["red"],
              fontSize: "11px",
              fontFamily: "Arial",
            },
          },
        },
        chart: {
          height: 350,
          type: "radar",
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1,
          },
          toolbar: {
            show: true,
            tools: {
              download: false,
            },
          },
        },

        title: {
          text: "Top Selling Categories",
          style: {
            colors: ["#a8a8a8"],
            fontSize: "11px",
            fontFamily: "Arial",
          },
        },
        fill: {
          opacity: 0.1,
        },
        markers: {
          size: 0,
        },
        xaxis: {
          categories: [
            "Shoes",
            "Jeans",
            "Accesories",
            "",
            "T-shirts",
            "Outwares",
          ],
        },
        yaxis: {
          show: false,
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
          type="radar"
          height={350}
        />
      </div>
    );
  }
}

export default TopSaleChart;
