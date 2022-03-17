import React, { createRef, useEffect } from "react";
import * as d3 from "d3";

interface Props {
  axisFunction: <Domain extends d3.AxisDomain>(
    scale: d3.AxisScale<Domain>,
  ) => d3.Axis<Domain>;
  scaleFunction: d3.ScaleLinear<number, number>;
}

const AxisComponent = ({
  axisFunction,
  scaleFunction,
}: Props) => {
  const gRref = createRef<SVGGElement>();

  const d3Render = () => {
    const scale = scaleFunction;
    const axis = axisFunction(scale);
    gRref?.current && d3.select(gRref.current).call(axis);
  };

  useEffect(() => {
    d3Render();
  });

  return <g transform={`translate(10, 10)`} ref={gRref} />;
};

export { AxisComponent };
