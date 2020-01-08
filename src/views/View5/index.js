import React, { PureComponent } from "react";
import Highcharts from "highcharts";

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/data")(Highcharts);

export default class View5 extends PureComponent {
  instance;

  options = {
    chart: {
      type: "spline",
      inverted: false,
      style: {
        fontFamily: "Roboto"
      }
    },
    title: {
      text: "Model Metrics"
    },
    data: {
      csvURL:
        "https://raw.githubusercontent.com/samtextlich/test/master/model-metrics.csv"
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    }
  };

  componentDidMount() {
    this.instance = Highcharts.chart("view5", this.options);
  }

  render() {
    return (
      <div>
        <div id="view5" />
      </div>
    );
  }
}
