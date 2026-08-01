import { describe, expect, it, vi } from "vitest";
import { load } from "../../routes/+page.server";

const createLoadEvent = (fetch: Parameters<typeof load>[0]["fetch"]) =>
  ({ fetch }) as unknown as Parameters<typeof load>[0];

describe("page server load", () => {
  it("returns episodes when api response is ok with valid array", async () => {
    const fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ episodes: [{ n: 1, title: "Test Episode" }] }),
    });

    const data = await load(createLoadEvent(fetch));

    expect(fetch).toHaveBeenCalledWith("/api/spotify");
    expect(data).toEqual({ episodes: [{ n: 1, title: "Test Episode" }] });
  });

  it("returns empty episodes when api response is non-ok", async () => {
    const fetch = vi
      .fn()
      .mockResolvedValue({ ok: false, json: async () => ({}) });

    const data = await load(createLoadEvent(fetch));

    expect(data).toEqual({ episodes: [] });
  });

  it("returns empty episodes when api payload shape is invalid", async () => {
    const fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ episodes: null }),
    });

    const data = await load(createLoadEvent(fetch));

    expect(data).toEqual({ episodes: [] });
  });

  it("returns empty episodes when fetch throws", async () => {
    const fetch = vi.fn().mockRejectedValue(new Error("network down"));

    const data = await load(createLoadEvent(fetch));

    expect(data).toEqual({ episodes: [] });
  });
});
