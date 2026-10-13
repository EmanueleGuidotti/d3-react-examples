import React from "react";
import { AxisComponent } from "./MolecularComponents/Axis";
import { ScatterplotGraph } from "./Pages/ScatterplotGraph";
const App = () => {
  return (
    <div>
       <svg width="800" height="400" id="svg">
        <AxisComponent
          domain={[0, 10]}
          range={[0, 200]}
          axis={"axisLeft"}
        />
        <AxisComponent
          domain={[10, 0]}
          range={[200, 0]}
          axis={"axisBottom"}
        />
      </svg>
      <ScatterplotGraph/>
    </div>
  );
};

export default App;
