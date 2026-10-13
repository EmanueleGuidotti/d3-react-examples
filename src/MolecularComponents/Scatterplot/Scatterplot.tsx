import React, { useMemo } from "react";
import * as d3 from "d3";

interface Props {
  x: number;
  y: number;
  data: [number, number][];
  width: number;
  height: number;
  radius?: number;
}

const Scatterplot = ({ x, y, data, width, height, radius = 4 }: Props) => {
  const { xScale, yScale } = useMemo(() => {
    const xExtent = d3.extent(data, (d) => d[0]) as [number, number];
    const yExtent = d3.extent(data, (d) => d[1]) as [number, number];
    return {
      xScale: d3.scaleLinear().domain(xExtent).range([0, width]),
      yScale: d3.scaleLinear().domain(yExtent).range([height, 0]),
    };
  }, [data, width, height]);

  return (
    <g transform={`translate(${x}, ${y})`}>
      {data.map(([dx, dy], index) => (
        <circle
          cx={xScale(dx)}
          cy={yScale(dy)}
          r={radius}
          key={index}
        />
      ))}
    </g>
  );
};

export { Scatterplot };