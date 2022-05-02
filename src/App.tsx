import React from "react";
import { AxisComponent } from "./MolecularComponents/Axis";

const App = () => {
  return (
    <div>
      <svg width="800" height="400" id="svg">
        <AxisComponent
          domain={[0, 10]}
          range={[0, 200]}
          axis={"axisLeft"}
        />
      </svg>
    </div>
  );
};

export default App;
