import { describe, expect, it } from "vitest";
import { parsePodcastRss } from "./rss-parser";

describe("parsePodcastRss", () => {
  it("parses item data and assigns descending episode numbers", () => {
    const rss = `
      <rss><channel>
        <item>
          <title><![CDATA[Episode A]]></title>
          <description><![CDATA[<p>Description A</p>]]></description>
          <pubDate>Tue, 01 Jul 2026 00:00:00 GMT</pubDate>
          <itunes:duration>47:21</itunes:duration>
          <itunes:image href="https://example.com/cover-a.jpg" />
          <enclosure url="https://example.com/audio-a.mp3" />
          <link>https://example.com/ep-a</link>
          <category><![CDATA[AI]]></category>
          <category>Dev</category>
        </item>
        <item>
          <title>Episode B</title>
          <description>Desc B</description>
          <pubDate>Tue, 08 Jul 2026 00:00:00 GMT</pubDate>
          <itunes:duration>40:10</itunes:duration>
          <link>https://example.com/ep-b</link>
        </item>
      </channel></rss>
    `;

    const episodes = parsePodcastRss(rss);

    expect(episodes).toHaveLength(2);
    expect(episodes[0]).toMatchObject({
      n: 2,
      title: "Episode A",
      dur: "47:21",
      cover: "https://example.com/cover-a.jpg",
      audioUrl: "https://example.com/audio-a.mp3",
      spotifyUrl: "https://example.com/ep-a",
      tags: ["AI", "Dev"],
    });
    expect(episodes[1]).toMatchObject({
      n: 1,
      title: "Episode B",
      spotifyUrl: "https://example.com/ep-b",
    });
  });

  it("handles missing fields with stable defaults", () => {
    const rss = `
      <rss><channel>
        <item>
          <pubDate>not-a-date</pubDate>
        </item>
      </channel></rss>
    `;

    const episodes = parsePodcastRss(rss);

    expect(episodes).toHaveLength(1);
    expect(episodes[0]).toEqual({
      n: 1,
      title: "Untitled episode",
      desc: "",
      dur: "",
      date: "",
      tags: [],
      spotifyUrl: "",
      cover: "",
      audioUrl: "",
    });
  });
});
