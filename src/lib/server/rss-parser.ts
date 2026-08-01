export interface ParsedEpisode {
  n: number;
  title: string;
  desc: string;
  dur: string;
  date: string;
  tags: string[];
  spotifyUrl: string;
  cover: string;
  audioUrl: string;
}

function stripCData(value: string) {
  return value
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .trim();
}

function extractTag(text: string, tag: string) {
  const rx = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i");
  const match = text.match(rx);
  return match ? stripCData(match[1].trim()) : "";
}

function extractAttr(text: string, tag: string, attr: string) {
  const rx = new RegExp(`<${tag}[^>]*${attr}=["']([^"']+)["'][^>]*>`, "i");
  const match = text.match(rx);
  return match ? match[1].trim() : "";
}

function parseCategories(text: string) {
  const categories: string[] = [];
  const rx = /<category[^>]*>([\s\S]*?)<\/category>/gi;
  let match;
  while ((match = rx.exec(text))) {
    categories.push(stripCData(match[1].trim()));
  }
  return categories.filter(Boolean);
}

function formatDate(rawDate: string) {
  if (!rawDate) return "";
  const parsedDate = new Date(rawDate);
  if (Number.isNaN(parsedDate.getTime())) return "";
  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function parsePodcastRss(text: string): ParsedEpisode[] {
  const items = Array.from(
    text.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi),
    (m) => m[1],
  );

  const totalItems = items.length;

  return items.map((item, index) => {
    const title = extractTag(item, "title") || "Untitled episode";
    const description =
      extractTag(item, "description") || extractTag(item, "itunes:summary");
    const duration = extractTag(item, "itunes:duration");
    const image =
      extractAttr(item, "itunes:image", "href") || extractTag(item, "image");
    const episodeUrl = extractAttr(item, "enclosure", "url");
    const pageLink = extractTag(item, "link");

    return {
      n: totalItems - index,
      title,
      desc: description,
      dur: duration || "",
      date: formatDate(extractTag(item, "pubDate")),
      tags: parseCategories(item),
      spotifyUrl: pageLink,
      cover: image,
      audioUrl: episodeUrl,
    };
  });
}
