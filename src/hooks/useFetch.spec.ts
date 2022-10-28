import "@testing-library/jest-dom";

import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import useFetch from "./useFetch";

const mockReturn = [
  {
    id: 1,
    name: "Rodrigo",
  },
];

const server = setupServer(
  rest.get("/bots", (req, res, ctx) => {
    return res(ctx.json(mockReturn));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useFetch", () => {
  it("should handles data with success", async () => {
    const { result } = renderHook(() => useFetch("/bots"));

    await waitFor(() => {
      expect(result.current.data).toEqual(mockReturn);
    });
  });

  it("should handles server error", async () => {
    server.use(
      rest.get("/bots", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const { result } = renderHook(() => useFetch("/bots"));

    await waitFor(() => {
      expect(result.current.error?.response?.status).toBe(500);
    });
  });
});
