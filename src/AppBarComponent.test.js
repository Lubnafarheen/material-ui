import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AppBarComponent from "./AppBarComponent";

test("renders the text", () => {
  render(<AppBarComponent />);
  const title = screen.getByText(/Jewelery by Lubna/i);
  expect(title).toBeInTheDocument();
});

test("renders the PhotoCamera icon", () => {
  render(<AppBarComponent />);
  const photoCameraIcon = screen.getByTestId("photo-camera-icon");
  expect(photoCameraIcon).toBeInTheDocument();
});
