import { render, screen } from "@testing-library/react";
import { Users } from "./Users";

describe("Users", () => {
  test("should render correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("should render a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
