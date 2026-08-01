// src/routes/api/spotify/+server.ts
import type { RequestHandler } from "./$types";
import { parsePodcastRss } from "$lib/server/rss-parser";

const rssUrl =
  process.env.PODCAST_RSS_URL || "https://anchor.fm/s/ff612a4c/podcast/rss";

export const GET: RequestHandler = async () => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(rssUrl, { signal: controller.signal });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: "Unable to load RSS feed", episodes: [] }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const text = await res.text();
    const episodes = parsePodcastRss(text);

    return new Response(JSON.stringify({ episodes }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    const isAbortError = error instanceof Error && error.name === "AbortError";

    return new Response(
      JSON.stringify({
        error: isAbortError
          ? "RSS feed request timed out"
          : "Unable to process RSS feed",
        episodes: [],
      }),
      {
        status: isAbortError ? 504 : 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  } finally {
    clearTimeout(timeoutId);
  }
};
