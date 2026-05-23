// Footer.jsx — light, minimal footer. White with a hairline rule.

const Subscribe = () => {
  const [email, setEmail] = React.useState('');
  const [done, setDone] = React.useState(false);
  return (
    <section id="about" style={{ maxWidth: 1080, margin: '0 auto', padding: '40px 24px 80px' }}>
      <div style={{
        position: 'relative',
        background: 'var(--surface-inverse)',
        color: 'var(--on-surface-inverse)',
        borderRadius: 18,
        padding: 'clamp(28px, 5vw, 56px)',
        display: 'grid',
        gap: 32,
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 90% -10%, var(--surface-inverse-glow), transparent 60%)',
          pointerEvents: 'none',
        }}></div>
        <div style={{ position: 'relative' }}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--on-surface-inverse-eyebrow)', fontWeight: 600,
          }}>RSS · EMAIL</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(26px, 3.4vw, 36px)', letterSpacing: '-0.025em',
            lineHeight: 1.1, margin: '10px 0 10px', color: 'var(--on-surface-inverse)', textWrap: 'balance',
            maxWidth: 380,
          }}>New episode every Tuesday. Get it in your inbox.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--on-surface-inverse-muted)', margin: 0, maxWidth: 380 }}>
            Show notes, transcript, and the one link we couldn&rsquo;t stop talking about.
          </p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {done ? (
            <div style={{
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)',
              padding: 16, borderRadius: 12, fontFamily: 'var(--font-body)', color: 'var(--on-surface-inverse)',
              display: 'flex', gap: 10, alignItems: 'center',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: 99, background: '#7eebb5' }}></span>
              Subscribed. See you Tuesday.
            </div>
          ) : (
            <>
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.com"
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 15,
                  padding: '14px 16px',
                  border: '1.5px solid rgba(255,255,255,0.18)',
                  borderRadius: 12, background: 'rgba(255,255,255,0.08)', color: 'var(--on-surface-inverse)',
                  outline: 'none',
                }} />
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <button type="submit" className="rc-btn" style={{
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
                  padding: '11px 20px', borderRadius: 999, border: 0,
                  background: '#fff', color: 'var(--surface-inverse)', cursor: 'pointer',
                }}>Subscribe</button>
                <button type="button" className="rc-btn" style={{
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
                  padding: '11px 20px', borderRadius: 999,
                  border: '1.5px solid rgba(255,255,255,0.22)',
                  background: 'transparent', color: 'var(--on-surface-inverse)', cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}>
                  <i data-lucide="rss" style={{ width: 16, height: 16 }}></i>
                  RSS feed
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{ background: 'var(--bg)', color: 'var(--fg-muted)', borderTop: '1px solid var(--border)' }}>
    <div style={{
      maxWidth: 1080, margin: '0 auto', padding: '56px 24px 32px',
      display: 'grid', gap: 32,
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    }}>
      <div>
        <img src="../../assets/logo.svg" style={{ height: 30 }} alt="Recompiled" />
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-muted)', marginTop: 14, maxWidth: 280, lineHeight: 1.55 }}>
          A podcast about engineering, rebuilt weekly. Recorded over a bad connection. Mixed in post.
        </p>
      </div>
      <FooterCol title="Listen" items={['Spotify', 'Apple Podcasts', 'Overcast', 'Pocket Casts', 'RSS feed']} />
      <FooterCol title="The show" items={['Episodes', 'Transcripts', 'Hosts', 'Patreon']} />
      <FooterCol title="Contact" items={['hello@recompiled.fm', 'Press kit', 'Sponsorship']} />
    </div>
    <div style={{
      borderTop: '1px solid var(--border)',
      padding: '18px 24px',
      maxWidth: 1080, margin: '0 auto',
      display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)', letterSpacing: '0.06em' }}>
        © 2026 RECOMPILED
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-subtle)' }}>
        Built on Monday.
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, items }) => (
  <div>
    <div style={{
      fontFamily: 'var(--font-body)', fontSize: 13,
      color: 'var(--fg)', marginBottom: 14, fontWeight: 600,
    }}>{title}</div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map(i => (
        <li key={i}><a href="#" style={{
          fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-muted)', border: 0,
        }}>{i}</a></li>
      ))}
    </ul>
  </div>
);

Object.assign(window, { Subscribe, Footer });
