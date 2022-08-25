import { render, screen } from "@testing-library/react";
import Card from ".";
import { wrapComponent } from "../../utils/wrapComponent";

const requiredProps = {
  heading: "Card heading",
  text: "Some really good advice",
  isOnTrack: true,
};

describe("Card", () => {
  it("renders the heading", () => {
    const component = wrapComponent(<Card {...requiredProps} />);
    render(component);

    expect(
      screen.getByRole("heading", { level: 3, name: "Card heading" })
    ).toBeVisible();
  });

  it("renders the text", () => {
    const component = wrapComponent(<Card {...requiredProps} />);
    render(component);

    expect(screen.getByText("Some really good advice")).toBeVisible();
  });

  it("renders the pills", () => {
    const component = wrapComponent(
      <Card {...requiredProps} pills={[{ text: "pill1" }, { text: "pill2" }]} />
    );
    render(component);

    expect(screen.getByText("PILL1")).toBeVisible();
    expect(screen.getByText("PILL2")).toBeVisible();
  });
});
