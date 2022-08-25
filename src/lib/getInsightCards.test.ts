import getInsightCards from "./getInsightCards";
import { IReport } from "../types";
const mockData = require("../mocks/mock-report.json") as IReport;

describe("getInsightCards", () => {
  describe("Public information", () => {
    it("should not be on track if there is courtAndInsolvencies data", () => {
      const [publicInformationCard] = getInsightCards(mockData);

      expect(publicInformationCard.isOnTrack).toBe(false);
    });

    it("should be on track if there is no courtAndInsolvencies data", () => {
      const onTrackData = {
        ...mockData,
        personal: {
          ...mockData.personal,
          publicInfo: {
            courtAndInsolvencies: [],
          },
        },
      };

      const [publicInformationCard] = getInsightCards(onTrackData);
      expect(publicInformationCard.isOnTrack).toBe(true);
    });
  });

  describe("Credit utilisation", () => {
    it("should be on track if there are no credit cards where balance is more than 50% of the limit", () => {
      const [, creditUtilisationCard] = getInsightCards(mockData);

      expect(creditUtilisationCard.isOnTrack).toBe(true);
    });

    it("should not be on track if there is a credit card where balance is more than 50% of the limit", () => {
      const onTrackData = {
        ...mockData,
        accounts: [
          {
            ...mockData.accounts[0],
            accountCategory: "credit_cards",
            overview: {
              ...mockData.accounts[0].overview,
              balance: {
                amount: 4000,
                currency: "GBP",
              },
              limit: {
                amount: 6500,
                currency: "GBP",
              },
            },
          },
        ],
      };

      const [, creditUtilisationCard] = getInsightCards(onTrackData);
      expect(creditUtilisationCard.isOnTrack).toBe(false);
    });
  });

  describe("Electoral roll", () => {
    it("should be on track if there is current data in the electoralRoll", () => {
      const [, , electoralRollCard] = getInsightCards(mockData);
      expect(electoralRollCard.isOnTrack).toBe(true);
    });

    it("should not be on track if there is no current data in the electoralRoll", () => {
      const onTrackData = {
        ...mockData,
        personal: {
          ...mockData.personal,
          electoralRoll: [],
        },
      };

      const [, , electoralRollCard] = getInsightCards(onTrackData);
      expect(electoralRollCard.isOnTrack).toBe(false);
    });
  });
});
