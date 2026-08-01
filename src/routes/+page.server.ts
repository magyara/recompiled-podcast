export const load = async ({ fetch }) => {
  try {
    const res = await fetch("/api/spotify");

    if (!res.ok) {
      return { episodes: [] };
    }

    const data = await res.json();
    return {
      episodes: Array.isArray(data?.episodes) ? data.episodes : [],
    };
  } catch {
    return { episodes: [] };
  }
};
