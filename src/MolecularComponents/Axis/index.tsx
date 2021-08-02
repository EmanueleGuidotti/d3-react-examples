import React, {createRef, useEffect} from "react";
import * as d3 from "d3";

function Axis() {
  const gRref = createRef<SVGGElement>();

  const d3Render = () => {
    const scale = d3.scaleLinear().domain([0, 10]).range([0, 200]);
    const axis = d3["axisLeft"](scale);
    gRref.current && d3.select(gRref.current).call(axis);
  };

  useEffect(() => {
    d3Render();
  }, []);

  return <g transform={`translate(10, 10)`} ref={gRref} />;
}

export default Axis;
