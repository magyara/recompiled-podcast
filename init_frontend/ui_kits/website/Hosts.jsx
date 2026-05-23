// Hosts.jsx — the "about the two co-hosts" section.

const HOSTS = [
  {
    initials: 'JM',
    name: 'Jordan Mensah',
    role: 'Staff engineer · Stripe',
    bio: 'Backend, queues, and the boring middle of the stack. Has shipped the same migration three times at three companies. Will tell you about all of them.',
    img: '../../assets/host-a-placeholder.svg',
    links: [['twitter', '#'], ['github', '#'], ['link', '#']],
  },
  {
    initials: 'SK',
    name: 'Sana Khoury',
    role: 'Principal engineer · Vercel',
    bio: 'Frontend, performance, and the loud opinions. Believes the page should be done loading by the time you reach for the trackpad.',
    img: '../../assets/host-b-placeholder.svg',
    links: [['twitter', '#'], ['github', '#'], ['link', '#']],
  },
];

const SOCIAL_ICONS = {
  twitter: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2H21.5l-7.5 8.59L23 22h-6.91l-4.81-6.29L5.69 22H2.43l8.01-9.17L1.5 2h7.09l4.37 5.78L18.244 2Zm-1.21 18h1.9L7.05 3.92H5.02L17.034 20Z"/>
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.26 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/>
    </svg>
  ),
  link: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1 1"/>
      <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1-1"/>
    </svg>
  ),
};

const HostCard = ({ host }) => (
  <article style={{
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: 24,
    display: 'flex', flexDirection: 'column', gap: 16,
  }}>
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <img src={host.img} alt={host.name} style={{
        width: 64, height: 64, borderRadius: 14, flexShrink: 0,
      }} />
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: 22, letterSpacing: '-0.02em',
          margin: 0, color: 'var(--fg)',
        }}>{host.name}</h3>
        <div style={{
          fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500,
          color: 'var(--fg-muted)', marginTop: 2,
        }}>{host.role}</div>
      </div>
    </div>
    <p style={{
      fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6,
      color: 'var(--fg-muted)', margin: 0, textWrap: 'pretty',
    }}>{host.bio}</p>
    <div style={{ display: 'flex', gap: 6 }}>
      {host.links.map(([icon, href]) => (
        <a key={icon} href={href} aria-label={icon} style={{
          width: 34, height: 34, borderRadius: 8,
          background: 'transparent', color: 'var(--fg-muted)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid var(--border)',
          transition: 'all 120ms var(--ease-out)',
        }}>
          {SOCIAL_ICONS[icon] || SOCIAL_ICONS.link}
        </a>
      ))}
    </div>
  </article>
);

const Hosts = () => (
  <section id="hosts" style={{ maxWidth: 1080, margin: '0 auto', padding: 'clamp(64px, 9vw, 100px) 24px' }}>
    <header style={{ marginBottom: 36, maxWidth: 640 }}>
      <Eyebrow>MEET THE HOSTS</Eyebrow>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(28px, 4.4vw, 44px)', letterSpacing: '-0.03em',
        lineHeight: 1.05, margin: '10px 0 14px', color: 'var(--fg)', textWrap: 'balance',
      }}>Two engineers. One mic. A lot of opinions.</h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.55, color: 'var(--fg-muted)', margin: 0, textWrap: 'pretty' }}>
        We&rsquo;ve shipped, broken, and rebuilt enough systems that we&rsquo;ve started agreeing with each other. The show is the record of when we don&rsquo;t.
      </p>
    </header>
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
      {HOSTS.map(h => <HostCard key={h.name} host={h} />)}
    </div>
  </section>
);

Object.assign(window, { Hosts, HOSTS });
