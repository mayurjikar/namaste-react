import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact UI Component", () => {
  it("Should contact component render", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should check button in contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("button");

    expect(heading).toBeInTheDocument();
  });

  it("Should check placeholder in contact component", () => {
    render(<Contact />);
    const heading = screen.getByPlaceholderText("name");

    expect(heading).toBeInTheDocument();
  });
});
