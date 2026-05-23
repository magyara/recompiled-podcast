// EpisodeList.jsx — Spotify recents grid, with an interactive selected state.

// Flat, single-tone covers. Minimal: just a number on a tinted square.
const COVERS = [
  '#ebe4ff', '#d6c8ff', '#b8a1ff', '#f4f1ff', '#ebe4ff', '#d6c8ff',
];

const EPISODES = [
  { n: 42, title: 'The database we should have written', dur: '47 min', date: 'May 14', desc: 'Five years in, every team has the same migration. We argue about whether to do it.', tags: ['postgres', 'infra'] },
  { n: 41, title: 'You don\u2019t need a queue', dur: '52 min', date: 'May 7', desc: 'A cron job and a flag survived everything we threw at it. So why did we add Kafka?', tags: ['queues', 'simplicity'] },
  { n: 40, title: 'On-call diaries', dur: '38 min', date: 'Apr 30', desc: 'Three pages, two runbooks, one outage that taught us more than the postmortem.', tags: ['on-call', 'reliability'] },
  { n: 39, title: 'The frontend is a backend now', dur: '61 min', date: 'Apr 23', desc: 'Edge runtimes, server components, and the moment Sana stopped writing useEffect.', tags: ['frontend', 'react'] },
  { n: 38, title: 'Migrations we regret', dur: '44 min', date: 'Apr 16', desc: 'A long list. We rank them. You will recognize at least three.', tags: ['migrations'] },
  { n: 37, title: 'Why we still write SQL by hand', dur: '49 min', date: 'Apr 9', desc: 'Yes, even with the ORM. Especially with the ORM.', tags: ['sql', 'ergonomics'] },
];

const EpisodeCard = ({ ep, idx, onPlay, isPlaying }) => {
  const cover = COVERS[idx % COVERS.length];
  return (
    <article style={{
      background: 'var(--bg-elevated)',
      border: `1px solid ${isPlaying ? 'var(--border-brand)' : 'var(--border)'}`,
      borderRadius: 14,
      padding: 18,
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      transition: 'all 200ms var(--ease-out)',
      boxShadow: 'none',
    }}>
      <div style={{
        width: 64, height: 64, borderRadius: 10, flexShrink: 0,
        background: cover,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22,
        color: 'var(--brand-fg)', letterSpacing: '-0.02em',
      }}>{ep.n}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <Eyebrow>EP {String(ep.n).padStart(3, '0')} &middot; {ep.dur} &middot; {ep.date}</Eyebrow>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 20, letterSpacing: '-0.02em', lineHeight: 1.15,
          margin: '4px 0 6px', color: 'var(--fg)', textWrap: 'pretty',
        }}>{ep.title}</h3>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.5,
          color: 'var(--fg-muted)', margin: '0 0 10px', textWrap: 'pretty',
        }}>{ep.desc}</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {ep.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>
      <button onClick={() => onPlay?.(ep)} aria-label={isPlaying ? 'Pause' : 'Play'} style={{
        width: 40, height: 40, borderRadius: 999, flexShrink: 0,
        background: isPlaying ? 'var(--brand)' : 'var(--brand-soft)',
        border: 0, color: isPlaying ? '#fff' : 'var(--brand-fg)', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 120ms var(--ease-out)',
      }}>
        <Icon name={isPlaying ? 'pause' : 'play'} size={14} color="currentColor" />
      </button>
    </article>
  );
};

const EpisodeList = ({ onPlay, nowPlaying }) => (
  <section style={{ maxWidth: 1080, margin: '0 auto', padding: 'clamp(64px, 9vw, 100px) 24px 40px' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
      <div>
        <Eyebrow>LATEST · PULLED FROM SPOTIFY</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.03em',
          lineHeight: 1.05, margin: '8px 0 0', color: 'var(--fg)',
        }}>Latest episodes</h2>
      </div>
      <a href="#all" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--brand)', border: 0 }}>
        Browse the archive &rarr;
      </a>
    </header>
    <div style={{
      display: 'grid', gap: 14,
      gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))',
    }}>
      {EPISODES.map((ep, i) => (
        <EpisodeCard key={ep.n} ep={ep} idx={i} onPlay={onPlay} isPlaying={nowPlaying?.n === ep.n} />
      ))}
    </div>
  </section>
);

Object.assign(window, { EpisodeList, EPISODES, COVERS });
