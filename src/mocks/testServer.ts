import "whatwg-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";
const mockReport = require("./mock-report.json");
const mockInsightDetails = require("./mock-insight-details.json");

const testServer = setupServer(
  rest.get(
    "https://api.jsonbin.io/v3/b/6107fbe9f14b8b153e05e714",
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockReport));
    }
  ),
  rest.get(
    "https://api.jsonbin.io/v3/b/6128c389c5159b35ae04d4ed/1",
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockInsightDetails));
    }
  ),
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "Please add request handler" })
    );
  })
);

export { testServer };
