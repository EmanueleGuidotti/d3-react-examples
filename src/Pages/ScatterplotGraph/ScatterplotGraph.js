import React from "react";
import { Scatterplot } from "../../MolecularComponents/Scatterplot";

const ScatterplotGraph = () => {
  const data = d3
    .range(100)
    .map((_) => [Math.random(), Math.random()]);

  return (
    <div>
      <svg width="800" height="800" id="svg">
        <Scatterplot
          x={50}
          y={50}
          data={data}
          width={200}
          height={300}
        />
      </svg>
    </div>
  );
};

export { ScatterplotGraph };
