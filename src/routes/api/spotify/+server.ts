// src/routes/api/spotify/+server.ts
import type { RequestHandler } from './$types';

const rssUrl = process.env.PODCAST_RSS_URL || 'https://anchor.fm/s/ff612a4c/podcast/rss';

function stripCData(value: string) {
  return value.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim();
}

function extractTag(text: string, tag: string) {
  const rx = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const match = text.match(rx);
  return match ? stripCData(match[1].trim()) : '';
}

function extractAttr(text: string, tag: string, attr: string) {
  const rx = new RegExp(`<${tag}[^>]*${attr}=["']([^"']+)["'][^>]*>`, 'i');
  const match = text.match(rx);
  return match ? match[1].trim() : '';
}

function parseCategories(text: string) {
  const categories: string[] = [];
  const rx = /<category[^>]*>([\s\S]*?)<\/category>/gi;
  let match;
  while ((match = rx.exec(text))) {
    categories.push(match[1].trim());
  }
  return categories;
}

export const GET: RequestHandler = async () => {
  const res = await fetch(rssUrl);

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Unable to load RSS feed' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const text = await res.text();
  const items = Array.from(text.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi), (m) => m[1]);

  const totalItems = items.length;
  const episodes = items.map((item, index) => {
    const title = extractTag(item, 'title') || 'Untitled episode';
    const description = extractTag(item, 'description') || extractTag(item, 'itunes:summary');
    const rawDate = extractTag(item, 'pubDate');
    const date = rawDate
      ? new Date(rawDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      : '';
    const duration = extractTag(item, 'itunes:duration');
    const image = extractAttr(item, 'itunes:image', 'href') || extractTag(item, 'image');
    const episodeUrl = extractAttr(item, 'enclosure', 'url');
    const pageLink = extractTag(item, 'link');

    return {
      n: totalItems - index,
      title,
      desc: description,
      dur: duration || '',
      date,
      tags: parseCategories(item),
      spotifyUrl: pageLink,
      cover: image,
      audioUrl: episodeUrl
    };
  });

  return new Response(JSON.stringify({ episodes }), {
    headers: { 'Content-Type': 'application/json' }
  });
};