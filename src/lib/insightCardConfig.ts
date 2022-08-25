import { IReport, TImpact } from "../types";
import { HIGH_IMPACT, MEDIUM_IMPACT } from "./constants";

interface IInsightCardConfig {
  heading: string;
  impact: TImpact;
  isOnTrack: boolean;
  text: string;
  detailUrl?: string;
}

export const cardConfig = (report: IReport): IInsightCardConfig[] => {
  return [
    {
      heading: "Public information",
      impact: HIGH_IMPACT,
      isOnTrack: !report.personal.publicInfo.courtAndInsolvencies.length,
      text: "Bankruptcies and individual voluntary arrangements can damage your score",
    },
    {
      heading: "Credit utilisation",
      impact: MEDIUM_IMPACT,
      isOnTrack: !report.accounts.some(
        ({ accountCategory, overview }) =>
          accountCategory === "credit_cards" &&
          overview.balance.amount >= overview.limit.amount / 2
      ),
      text: "Using more than 50% of your available credit can damage your score",
    },
    {
      heading: "Electoral roll",
      impact: MEDIUM_IMPACT,
      isOnTrack: !!report.personal.electoralRoll.find(({ current }) => current),
      text: "Being on the electoral roll can improve your score",
      detailUrl:
        "https://api.jsonbin.io/v3/b/6128c389c5159b35ae04d4ed/1?meta=false",
    },
  ];
};
