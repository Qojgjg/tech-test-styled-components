import { HIGH_IMPACT, MEDIUM_IMPACT } from "./lib/constants";

export interface IReport {
  accounts: {
    accountCategory: string;
    accountNumber: string;
    address: {
      buildingName: string;
      format: string;
      postcode: string;
      street: string;
      town: string;
    };
    contentKey: string;
    displayName: string;
    key: string;
    name: string;
    overview: {
      lastUpdated: string;
      utilization: number;
      balance: {
        amount: number;
        currency: string;
      };
      frequency: string;
      limit: {
        amount: number;
        currency: string;
      };
      accountOpened: string;
    };
    paymentHistory: {
      month: number;
      paymentStatus: string;
      year: number;
    }[];
    status: string;
    supplierName: string;
  }[];
  personal: {
    electoralRoll: {
      address: {
        buildingName: string;
        format: string;
        postcode: string;
        street: string;
        town: string;
      };
      contextKey: string;
      current: boolean;
      endDateString: string;
      name: string;
      startDateString: string;
      supplied: string;
    }[];
    publicInfo: {
      courtAndInsolvencies: {
        name: string;
        dob: string;
        courtName: string;
        contextKey: string;
        dischargeDate: string;
        caseReference: string;
        amount: {
          amount: number;
          currency: string;
        };
        address: {
          buildingName: string;
          format: string;
          postcode: string;
          street: string;
          town: string;
        };
        type: {
          code: string;
          details: {
            catDesc: string;
          };
        };
        startDate: string;
      }[];
    };
  };
}

export type TImpact = typeof MEDIUM_IMPACT | typeof HIGH_IMPACT;
