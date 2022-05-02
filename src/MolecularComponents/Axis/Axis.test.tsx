import React from "react";
import { AxisComponent } from "./index";
import { render } from "@testing-library/react";

describe("Axis", () => {
  it("create Axis Left with values from 0 to 10", () => {
    const container = render(
      <svg width="800" height="400" id="svg">
        <AxisComponent
          domain={[0, 10]}
          range={[0, 200]}
          axis={"axisLeft"}
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
        <AxisComponent
          domain={[0, 10]}
          range={[0, 500]}
          axis={"axisBottom"}
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
