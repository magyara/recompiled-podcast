export const load = async ({ fetch }) => {
  try {
    const res = await fetch('/api/spotify');
    if (!res.ok) return { episodes: [] };

    const data = await res.json();
    const episodes = Array.isArray(data?.episodes) ? data.episodes : [];
    return { episodes };
  } catch {
    return { episodes: [] };
  }
};