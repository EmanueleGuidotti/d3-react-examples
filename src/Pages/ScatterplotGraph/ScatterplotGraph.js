import React, {useMemo} from "react";
import { Scatterplot } from "../../MolecularComponents/Scatterplot";
import { Axis } from "../../MolecularComponents/Axis";
import * as d3 from "d3";

const ScatterplotGraph = ({width = 400, height = 300, radius = 4}) => {
  const MAX = 10;
  const margin = { top: 20, right: 20, bottom: 30, left: 30 };
  const innerW = width - margin.left - margin.right;
  const innerH = height - margin.top - margin.bottom;

  const xScale = useMemo(() => d3.scaleLinear().domain([0, MAX]).range([0, innerW]), [innerW]);
  const yScale = useMemo(() => d3.scaleLinear().domain([0, MAX]).range([innerH, 0]), [innerH]);

  const data = d3
    .range(100)
    .map((_) => [Math.random() * MAX, Math.random() * MAX]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <Axis scale={xScale} orientation="bottom" y={innerH} />
        <Axis scale={yScale} orientation="left" />
        <Scatterplot data={data} xScale={xScale} yScale={yScale} radius={radius} />
      </g>
    </svg>
  );
};

export { ScatterplotGraph };
