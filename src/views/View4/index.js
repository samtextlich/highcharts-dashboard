import React, { Component } from "react";
import ParallelCoordinates from "../../charts/ParallelCoordinates";
import "./view4.css";

export default class View4 extends Component {
  render() {
    return (
      <div id="view4" className="pane">
        <div className="header">Model Metrics</div>
        <div>
          <ParallelCoordinates />
        </div>
      </div>
    );
  }
}
