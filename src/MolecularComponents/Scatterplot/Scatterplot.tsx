import React from "react";
import * as d3 from "d3";

interface Props {
  x: string;
  y: number[];
  data: number[][];
  width: number;
  height: number;
}

const Scatterplot = ({
  x,
  y,
  data,
  width,
  height,
}: Props) => {
  const xScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, height]);

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* tslint:disable-next-line:no-shadowed-variable */}
      {data.map(([x, y], index) => (
        <circle cx={xScale(x)} cy={yScale(y)} key={index} />
      ))}
    </g>
  );
};

export { Scatterplot };
