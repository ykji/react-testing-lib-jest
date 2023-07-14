import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "Javascript"];

  test("should renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("should render a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });

  test("should render Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("should not render Start Learning button", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("should render Start Learning button after a while", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000, // default is 1000
      },
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
