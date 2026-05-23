// Hero.jsx — light, minimal hero. Soft violet wash on a near-white surface.

const Hero = ({ onListen, onBrowse }) => (
  <section style={{
    position: 'relative',
    background: 'var(--bg-sunken)',           /* violet-50 wash */
    color: 'var(--fg)',
    overflow: 'hidden',
    margin: 0,
    padding: 'clamp(64px, 12vw, 140px) 24px clamp(80px, 14vw, 160px)',
    borderBottom: '1px solid var(--border)',
  }}>
    <div style={{ position: 'relative', maxWidth: 880, margin: '0 auto' }}>
      <Eyebrow>EP 042 · OUT NOW · MAY 14, 2026</Eyebrow>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'clamp(44px, 8vw, 92px)',
        lineHeight: 0.98,
        letterSpacing: '-0.035em',
        margin: '18px 0 24px',
        color: 'var(--fg)',
        textWrap: 'balance',
        maxWidth: 820,
      }}>
        A podcast about engineering, <span style={{ color: 'var(--brand)' }}>rebuilt weekly</span>.
      </h1>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(16px, 1.6vw, 19px)',
        lineHeight: 1.55,
        color: 'var(--fg-muted)',
        maxWidth: 600,
        margin: 0,
        textWrap: 'pretty',
      }}>
        Two senior engineers, a microphone, and a pile of systems we keep rewriting. We talk about why we shipped that thing, why we&rsquo;d never ship it again, and what we&rsquo;d actually do on Monday.
      </p>
      <div style={{ display: 'flex', gap: 10, marginTop: 36, flexWrap: 'wrap' }}>
        <Button variant="primary" size="lg" icon="play" onClick={onListen}>Listen on Spotify</Button>
        <Button variant="secondary" size="lg" onClick={onBrowse}>All episodes</Button>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
