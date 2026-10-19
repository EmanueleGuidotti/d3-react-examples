import React, { useMemo } from "react";
import * as d3 from "d3";
import { Scale } from "../types/types";

interface Props {
  x: number;
  y: number;
  data: [number, number][];
  width: number;
  height: number;
  radius?: number;
}

const Scatterplot = ({ data, xScale, yScale, radius = 4 }: {
  data: [number, number][]; xScale: Scale; yScale: Scale; radius?: number;
}) => (
  <g>
    {data.map(([dx, dy], i) => (
      <circle key={i} cx={xScale(dx)} cy={yScale(dy)} r={radius} />
    ))}
  </g>
);


export { Scatterplot };