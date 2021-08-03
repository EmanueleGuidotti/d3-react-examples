import React, {createRef, useEffect} from "react";
import * as d3 from "d3";

interface Props {
  axisFunction: Function;
  scaleFunction: Function;
}

function Axis({axisFunction, scaleFunction}: Props) {
  const gRref = createRef<SVGGElement>();
  const d3Render = () => {
    const scale = scaleFunction;
    const axis = axisFunction(scale);
    gRref.current && d3.select(gRref.current).call(axis);
  };

  useEffect(() => {
    d3Render();
  }, []);

  return <g transform={`translate(10, 10)`} ref={gRref} />;
}

export default Axis;
