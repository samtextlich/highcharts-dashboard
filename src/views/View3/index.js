import React, { PureComponent } from "react";
import Highcharts from "highcharts";

// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/data")(Highcharts);

export default class View3 extends PureComponent {
  instance;

  options = {
    chart: {
      type: "column",
      style: {
        fontFamily: "Roboto"
      }
    },
    title: {
      text: "Feature Importance"
    },
    data: {
      csvURL:
        "https://raw.githubusercontent.com/samtextlich/test/master/feature-importance.csv"
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.2f}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    }
  };

  componentDidMount() {
    this.instance = Highcharts.chart("dummy-id", this.options);
  }

  render() {
    return (
      <div>
        <div id="dummy-id" />
      </div>
    );
  }
}
