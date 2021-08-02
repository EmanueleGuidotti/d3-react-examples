import React from "react";
import Axis from "./index";
import {render} from "@testing-library/react";

describe("Axis", () => {
  it("create Axis with values from 0 to 10", () => {
    const container = render(<Axis />);
    expect(container).toMatchSnapshot();
  });
});
