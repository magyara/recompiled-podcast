import { afterEach, describe, expect, it, vi } from "vitest";
import { GET } from "../../routes/api/spotify/+server";

const createRequestEvent = () => ({}) as Parameters<typeof GET>[0];

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("GET /api/spotify", () => {
  it("returns parsed episodes for a valid RSS response", async () => {
    const rss = `
      <rss><channel>
        <item>
          <title><![CDATA[Episode 1]]></title>
          <description><![CDATA[<p>Hello</p>]]></description>
          <pubDate>Tue, 01 Jul 2026 00:00:00 GMT</pubDate>
          <itunes:duration>47:21</itunes:duration>
          <itunes:image href="https://example.com/cover1.jpg" />
          <enclosure url="https://example.com/audio1.mp3" />
          <link>https://example.com/ep1</link>
          <category><![CDATA[AI]]></category>
          <category>Dev</category>
        </item>
        <item>
          <title>Episode 2</title>
          <description>World</description>
          <pubDate>Tue, 08 Jul 2026 00:00:00 GMT</pubDate>
          <itunes:duration>40:10</itunes:duration>
          <link>https://example.com/ep2</link>
        </item>
      </channel></rss>
    `;

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        text: async () => rss,
      }),
    );

    const response = await GET(createRequestEvent());
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(Array.isArray(body.episodes)).toBe(true);
    expect(body.episodes).toHaveLength(2);
    expect(body.episodes[0]).toMatchObject({
      n: 2,
      title: "Episode 1",
      dur: "47:21",
      spotifyUrl: "https://example.com/ep1",
      audioUrl: "https://example.com/audio1.mp3",
      cover: "https://example.com/cover1.jpg",
    });
    expect(body.episodes[0].tags).toEqual(["AI", "Dev"]);
    expect(body.episodes[1]).toMatchObject({ n: 1, title: "Episode 2" });
  });

  it("returns 502 when upstream RSS responds non-ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        text: async () => "",
      }),
    );

    const response = await GET(createRequestEvent());
    const body = await response.json();

    expect(response.status).toBe(502);
    expect(body).toEqual({ error: "Unable to load RSS feed", episodes: [] });
  });

  it("returns 504 when request aborts", async () => {
    const abortError = new Error("aborted");
    abortError.name = "AbortError";

    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(abortError));

    const response = await GET(createRequestEvent());
    const body = await response.json();

    expect(response.status).toBe(504);
    expect(body).toEqual({ error: "RSS feed request timed out", episodes: [] });
  });

  it("returns 500 for unexpected fetch/parser failure", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("boom")));

    const response = await GET(createRequestEvent());
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body).toEqual({ error: "Unable to process RSS feed", episodes: [] });
  });
});
