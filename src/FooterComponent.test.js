import React from "react";
import { render, screen } from "@testing-library/react";
import FooterComponent from "./FooterComponent";

test("should display the correct copyright text", () => {
  render(<FooterComponent />);
  const copyrightText = screen.getByTestId("footer-text");
  expect(copyrightText).toBeInTheDocument;
});
