import { render, screen } from "@testing-library/react";
import InsightDetails from ".";
import { IInsightDetails } from "../../lib/hooks/useInsightDetails";
import { wrapComponent } from "../../utils/wrapComponent";
const mockData =
  require("../../mocks/mock-insight-details.json") as IInsightDetails;

describe("InsightDetails", () => {
  it("displays an error message if there is no data", () => {
    const component = wrapComponent(<InsightDetails />);
    render(component);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Sorry, something went wrong...",
      })
    ).toBeVisible();
  });

  it("renders the correct pill if off track", () => {
    const component = wrapComponent(
      <InsightDetails data={mockData} isOnTrack={false} />
    );
    render(component);

    expect(screen.getByText("OFF TRACK")).toBeVisible();
  });

  it("renders the correct pill if on track", () => {
    const component = wrapComponent(
      <InsightDetails data={mockData} isOnTrack={true} />
    );
    render(component);

    expect(screen.getByText("ON TRACK")).toBeVisible();
  });

  it("renders the correct description if off track", () => {
    const component = wrapComponent(
      <InsightDetails data={mockData} isOnTrack={false} />
    );
    render(component);

    expect(screen.getByText(mockData.offTrackDescription)).toBeVisible();
  });

  it("renders the correct description if on track", () => {
    const component = wrapComponent(
      <InsightDetails data={mockData} isOnTrack={true} />
    );
    render(component);

    expect(screen.getByText(mockData.onTrackDescription)).toBeVisible();
  });

  it.each(mockData.details)("renders each detail", (detail) => {
    const component = wrapComponent(<InsightDetails data={mockData} />);
    render(component);

    expect(
      screen.getByRole("heading", { level: 3, name: detail.title })
    ).toBeVisible();
    expect(screen.getByText(detail.description)).toBeVisible();
  });
});
