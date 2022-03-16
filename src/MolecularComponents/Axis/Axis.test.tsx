import React from "react";
import { Axis } from "./index";
import { render } from "@testing-library/react";
import * as d3 from "d3";

describe("Axis", () => {
  it("create Axis Left with values from 0 to 10", () => {
    const container = render(
      <svg width="800" height="400" id="svg">
        <Axis
          scaleFunction={d3
            .scaleLinear()
            .domain([0, 10])
            .range([0, 200])}
          axisFunction={d3.axisLeft}
        />
      </svg>,
    );

    expect(
      document.getElementsByClassName("tick").length,
    ).toBe(11);

    expect(
      document.getElementsByTagName("text").length,
    ).toBe(11);

    const texts = Array.from(
      document.getElementsByTagName("text"),
    );

    texts.forEach((text, index) => {
      expect(text.innerHTML).toBe(String(index));
    });

    expect(container).toMatchSnapshot();
  });
  it("create Axis Bottom with values from 0 to 10", () => {
    const container = render(
      <svg width="800" height="400" id="svg">
        <Axis
          scaleFunction={d3
            .scaleLinear()
            .domain([0, 10])
            .range([0, 200])}
          axisFunction={d3.axisBottom}
        />
      </svg>,
    );

    expect(
      document.getElementsByClassName("tick").length,
    ).toBe(11);

    expect(
      document.getElementsByTagName("text").length,
    ).toBe(11);

    const texts = Array.from(
      document.getElementsByTagName("text"),
    );

    texts.forEach((text, index) => {
      expect(text.innerHTML).toBe(String(index));
    });

    expect(container).toMatchSnapshot();
  });
});
