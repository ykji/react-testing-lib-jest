import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Namaskar");
  expect(textElement).toBeInTheDocument();
});

test("Greeting should render with the correct name", () => {
  render(<Greet name="Yash" />);
  const textElement = screen.getByText("Namaskar, Yash ji");
  expect(textElement).toBeInTheDocument();
});
