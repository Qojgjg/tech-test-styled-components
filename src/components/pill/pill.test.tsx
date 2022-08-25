import { render, screen } from "@testing-library/react";
import Pill from ".";
import { CSTheme } from "../../styles/theme";
import { wrapComponent } from "../../utils/wrapComponent";

describe("Pill", () => {
  it("renders the text uppercase", () => {
    const component = wrapComponent(<Pill text={"asdf"} />);
    render(component);

    expect(screen.getByText("ASDF")).toBeVisible();
  });

  it.each([
    ["impact", "grayBg"],
    ["onTrack", "greenBg"],
    ["offTrack", "orangeBg"],
  ])("should have the correct background colour", (type, colour) => {
    const component = wrapComponent(<Pill text={"asdf"} type={type as any} />);
    render(component);

    expect(screen.getByText("ASDF")).toHaveStyle({
      background: CSTheme.colours[colour],
    });
  });

  it.each([
    ["impact", ""],
    ["onTrack", "greenText"],
    ["offTrack", "orangeText"],
  ])("should have the correct text colour", (type, colour) => {
    const component = wrapComponent(<Pill text={"asdf"} type={type as any} />);
    render(component);

    expect(screen.getByText("ASDF")).toHaveStyle({
      color: CSTheme.colours[colour],
    });
  });
});
