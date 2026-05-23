// Player.jsx — light, minimal sticky bottom audio player.

const Player = ({ episode, onClose, onTogglePlay, isPlaying }) => {
  const [progress, setProgress] = React.useState(0.18);
  if (!episode) return null;
  return (
    <div style={{
      position: 'fixed',
      left: 16, right: 16, bottom: 16,
      maxWidth: 720, margin: '0 auto',
      background: 'var(--bg-elevated)',
      color: 'var(--fg)',
      borderRadius: 16,
      padding: '12px 14px',
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      border: '1px solid var(--border)',
      boxShadow: '0 24px 48px -16px rgba(36,16,85,0.18), 0 4px 12px rgba(36,16,85,0.06)',
      zIndex: 100,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 10, flexShrink: 0,
        background: 'var(--brand-soft)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
        color: 'var(--brand-fg)', letterSpacing: '-0.02em',
      }}>{episode.n}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--fg)',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{episode.title}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-subtle)' }}>
            {formatTime(progress * 47 * 60)}
          </span>
          <div
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setProgress(Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)));
            }}
            style={{ flex: 1, height: 4, background: 'var(--brand-soft)', borderRadius: 99, cursor: 'pointer', position: 'relative' }}>
            <div style={{ width: `${progress * 100}%`, height: '100%', background: 'var(--brand)', borderRadius: 99 }}></div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-subtle)' }}>47:21</span>
        </div>
      </div>
      <button
        onClick={onTogglePlay}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        style={{
          width: 44, height: 44, borderRadius: 999,
          background: 'var(--brand)', border: 0, color: '#fff', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
        <Icon name={isPlaying ? 'pause' : 'play'} size={16} color="#fff" />
      </button>
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          width: 32, height: 32, borderRadius: 999,
          background: 'transparent', border: 0,
          color: 'var(--fg-muted)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
        <Icon name="x" size={14} color="currentColor" />
      </button>
    </div>
  );
};

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

window.Player = Player;
