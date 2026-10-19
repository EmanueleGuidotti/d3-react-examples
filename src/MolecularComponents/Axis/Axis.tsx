import React, { createRef, useEffect, useRef } from "react";
import * as d3 from "d3";
import { Scale } from "../types/types";

const Axis = ({ scale, orientation, x = 0, y = 0 }: {
  scale: Scale; orientation: "bottom" | "left"; x?: number; y?: number;
}) => {
  const ref = useRef<SVGGElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const axis = orientation === "bottom" ? d3.axisBottom(scale) : d3.axisLeft(scale);
    d3.select(ref.current).call(axis);
  }, [scale, orientation]);
  return <g ref={ref} transform={`translate(${x}, ${y})`} />;
};

export { Axis };