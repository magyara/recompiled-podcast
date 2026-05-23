// Nav.jsx — top navigation bar. Becomes translucent + bordered on scroll.

const Nav = ({ onNavigate, active = 'home' }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    ['episodes', 'Episodes'],
    ['hosts', 'Hosts'],
    ['about', 'About'],
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(250,249,253,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 200ms var(--ease-out)',
    }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto', padding: '14px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate?.('home'); }} style={{
          display: 'flex', alignItems: 'center', gap: 10, border: 0,
        }}>
          <img src="../../assets/logo.svg" alt="Recompiled" style={{ height: 30 }} />
        </a>

        <div className="rc-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); onNavigate?.(id); }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                fontWeight: 500,
                color: active === id ? 'var(--brand)' : 'var(--fg)',
                padding: '8px 14px',
                borderRadius: 8,
                border: 0,
                transition: 'color 120ms var(--ease-out)',
              }}>{label}</a>
          ))}
          <span style={{ width: 1, height: 20, background: 'var(--border)', margin: '0 10px' }}></span>
          <Button variant="primary" size="sm" icon="headphones" onClick={() => onNavigate?.('episodes')}>Listen</Button>
        </div>

        <button
          className="rc-nav-mobile"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Menu"
          style={{
            display: 'none',
            background: 'transparent', border: 0, padding: 8, cursor: 'pointer',
            color: 'var(--fg)',
          }}>
          <Icon name={mobileOpen ? 'x' : 'menu'} size={22} />
        </button>
      </div>

      {mobileOpen ? (
        <div style={{
          background: 'var(--bg-elevated)',
          borderTop: '1px solid var(--border)',
          padding: '10px 24px 18px',
          display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); onNavigate?.(id); setMobileOpen(false); }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                fontWeight: 500,
                color: 'var(--fg)',
                padding: '12px 4px',
                border: 0,
                borderBottom: '1px solid var(--border)',
              }}>{label}</a>
          ))}
          <div style={{ marginTop: 12 }}>
            <Button variant="primary" size="md" icon="headphones" style={{ width: '100%', justifyContent: 'center' }}>Listen on Spotify</Button>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

window.Nav = Nav;
