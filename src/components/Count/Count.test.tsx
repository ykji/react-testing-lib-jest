import Count from "./Count";
import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("Count", () => {
  test("should render Count element", () => {
    render(<Count />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
  });

  test("should render Increment button", () => {
    render(<Count />);
    const buttonElement = screen.getByRole("button", { name: "Increment" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("should render Count element with 0", () => {
    render(<Count />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("should render Count element with 1 after clicking the increment button once", async () => {
    user.setup();
    render(<Count />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("should render Count element with 2 after clicking the increment button twice", async () => {
    user.setup();
    render(<Count />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.dblClick(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("should render Count element with 10 after clicking Set button", async () => {
    user.setup();
    render(<Count />);
    const inputElement = screen.getByRole("spinbutton");
    await user.type(inputElement, "10");
    expect(inputElement).toHaveValue(10);
    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("should be focused in the right order", async () => {
    user.setup();
    render(<Count />);
    const inputElement = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(inputElement).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
