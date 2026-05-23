// Primitives.jsx — small reusable pieces.

const Button = ({ children, variant = 'primary', size = 'md', icon, onClick, style }) => {
  const variants = {
    primary: { background: 'var(--brand)', color: '#fff', border: 0, boxShadow: '0 8px 24px -10px rgba(124,82,255,.55)' },
    secondary: { background: 'transparent', color: 'var(--fg)', border: '1.5px solid var(--border-strong)' },
    soft: { background: 'var(--brand-soft)', color: 'var(--brand-fg)', border: 0 },
    ghost: { background: 'transparent', color: 'var(--brand)', border: 0, padding: 0 },
    inverse: { background: '#fff', color: 'var(--fg)', border: 0 },
  };
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 13 },
    md: { padding: '11px 20px', fontSize: 14 },
    lg: { padding: '14px 26px', fontSize: 15 },
  };
  return (
    <button
      onClick={onClick}
      className="rc-btn"
      style={{
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        borderRadius: 999,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        whiteSpace: 'nowrap',
        transition: 'all 120ms var(--ease-out)',
        ...sizes[size],
        ...variants[variant],
        ...style,
      }}
    >
      {icon ? <i data-lucide={icon} style={{ width: 16, height: 16 }}></i> : null}
      {children}
    </button>
  );
};

const Eyebrow = ({ children, prefix = '//', color }) => (
  <div style={{
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: color || 'var(--brand)',
    fontWeight: 600,
  }}>{prefix ? `${prefix} ` : ''}{children}</div>
);

const Badge = ({ children, tone = 'brand' }) => {
  const tones = {
    brand: { bg: 'var(--brand-soft)', fg: 'var(--brand-fg)' },
    solid: { bg: 'var(--brand)', fg: '#fff' },
    outline: { bg: 'transparent', fg: 'var(--fg-muted)', border: '1px solid var(--border-strong)' },
    success: { bg: 'rgba(43,182,115,.14)', fg: '#2bb673' },
  };
  const t = tones[tone];
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '.14em',
      fontWeight: 600,
      color: t.fg,
      background: t.bg,
      border: t.border || 0,
      padding: '4px 10px',
      borderRadius: 6,
    }}>{children}</span>
  );
};

const Tag = ({ children }) => (
  <span style={{
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    color: 'var(--fg-muted)',
    background: 'transparent',
    border: '1px solid var(--border-strong)',
    padding: '4px 10px',
    borderRadius: 999,
  }}>{children}</span>
);

const Icon = ({ name, size = 20, color }) => (
  <i data-lucide={name} style={{ width: size, height: size, color: color || 'currentColor' }}></i>
);

Object.assign(window, { Button, Eyebrow, Badge, Tag, Icon });
