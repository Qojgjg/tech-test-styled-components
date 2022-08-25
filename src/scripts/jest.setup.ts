import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { testServer } from "../mocks/testServer";

beforeAll(() => {
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  jest.useFakeTimers();

  testServer.listen();
});

afterEach(() => {
  testServer.resetHandlers();
});

afterAll(() => {
  testServer.close();
});
