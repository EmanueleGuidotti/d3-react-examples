import React from "react";
import { Axis } from "./MolecularComponents/Axis/Axis";
import * as d3 from "d3";

function App() {
  return (
    <div>
      <svg width="800" height="400" id="svg">
        <Axis
          scaleFunction={d3
            .scaleLinear()
            .domain([0, 10])
            .range([0, 200])}
          axisFunction={d3.axisLeft}
        ></Axis>
      </svg>
    </div>
  );
}

export default App;
