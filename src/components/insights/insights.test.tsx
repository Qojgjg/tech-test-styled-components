import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Insights from ".";
import { IReport } from "../../types";
import { wrapComponent } from "../../utils/wrapComponent";
import { DrawerProvider } from "../drawer/drawer";

const mockData = require("../../mocks/mock-report.json") as IReport;

describe("Insights", () => {
  it("renders the title", () => {
    const component = wrapComponent(<Insights data={mockData} />);
    render(component);

    expect(
      screen.getByRole("heading", { level: 1, name: "Insights" })
    ).toBeVisible();
  });

  it("renders the insights", () => {
    const component = wrapComponent(<Insights data={mockData} />);
    render(component);

    const insights = [
      {
        heading: "Public information",
        text: "Bankruptcies and individual voluntary arrangements can damage your score",
        pillText: ["OFF TRACK", "HIGH IMPACT"],
      },
      {
        heading: "Credit utilisation",
        text: "Using more than 50% of your available credit can damage your score",
        pillText: ["ON TRACK", "MEDIUM IMPACT"],
      },
      {
        heading: "Electoral roll",
        text: "Being on the electoral roll can improve your score",
        pillText: ["ON TRACK"],
      },
    ];

    const cards = screen.getAllByRole("article");

    insights.forEach((insight, index) => {
      expect(
        within(cards[index]).getByRole("heading", {
          level: 3,
          name: insight.heading,
        })
      ).toBeVisible();

      insight.pillText.forEach((pillText) => {
        expect(within(cards[index]).getByText(pillText)).toBeVisible();

        expect(within(cards[index]).getByText(insight.text)).toBeVisible();
      });
    });
  });

  it("opens the insight details upon clicking the cta", async () => {
    const component = wrapComponent(
      <DrawerProvider>
        <Insights data={mockData} />
      </DrawerProvider>
    );
    render(component);

    userEvent.click(screen.getByRole("button", { name: "Learn more" }));

    expect(await screen.findByRole("dialog")).toBeVisible();
    expect(
      screen.getByRole("heading", { level: 1, name: "Loading..." })
    ).toBeVisible();

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: "The electoral roll",
      })
    ).toBeVisible();
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "How this affects your credit score",
      })
    ).toBeVisible();
  });
});
