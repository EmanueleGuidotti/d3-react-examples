import React from "react";
import { AxisComponent } from "./MolecularComponents/Axis";
import * as d3 from "d3";

const App = () => {
  return (
    <div>
      <svg width="800" height="400" id="svg">
        <AxisComponent
          scaleFunction={d3
            .scaleLinear()
            .domain([0, 10])
            .range([0, 200])}
          axisFunction={d3.axisLeft}
        />
      </svg>
    </div>
  );
};

export default App;
