import React, { createRef, useEffect } from "react";
import * as d3 from "d3";

interface Props {
  axis: string;
  domain: number[];
  range: number[];
}

const AxisComponent = ({
  axis: axisProp,
  domain,
  range,
}: Props) => {
  const gRref = createRef<SVGGElement>();

  const d3Render = () => {
    const scale = d3
      .scaleLinear()
      .domain(domain)
      .range(range);
    // @ts-ignore
    const axis = d3[axisProp](scale);
    gRref?.current && d3.select(gRref.current).call(axis);
  };

  useEffect(() => {
    d3Render();
  }, [axisProp, domain, range]);

  return <g transform={`translate(10, 10)`} ref={gRref} />;
};

export { AxisComponent };
