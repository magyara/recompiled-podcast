export const load = async ({ fetch }) => {
  const res = await fetch('/api/spotify');
  const data = await res.json();
  return { episodes: data.episodes };
};