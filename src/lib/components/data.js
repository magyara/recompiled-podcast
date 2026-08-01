export const EPISODES = [
  { n: 42, title: 'The database we should have written', dur: '47 min', date: 'May 14', desc: 'Five years in, every team has the same migration. We argue about whether to do it.', tags: ['postgres', 'infra'] },
  { n: 41, title: 'You don\u2019t need a queue', dur: '52 min', date: 'May 7', desc: 'A cron job and a flag survived everything we threw at it. So why did we add Kafka?', tags: ['queues', 'simplicity'] },
  { n: 40, title: 'On-call diaries', dur: '38 min', date: 'Apr 30', desc: 'Three pages, two runbooks, one outage that taught us more than the postmortem.', tags: ['on-call', 'reliability'] },
  { n: 39, title: 'The frontend is a backend now', dur: '61 min', date: 'Apr 23', desc: 'Edge runtimes, server components, and the moment Sana stopped writing useEffect.', tags: ['frontend', 'react'] },
  { n: 38, title: 'Migrations we regret', dur: '44 min', date: 'Apr 16', desc: 'A long list. We rank them. You will recognize at least three.', tags: ['migrations'] },
  { n: 37, title: 'Why we still write SQL by hand', dur: '49 min', date: 'Apr 9', desc: 'Yes, even with the ORM. Especially with the ORM.', tags: ['sql', 'ergonomics'] },
];

export const COVERS = ['#ebe4ff', '#d6c8ff', '#b8a1ff', '#f4f1ff', '#ebe4ff', '#d6c8ff'];

export const HOSTS = [
  {
    name: 'Abigail Lovelace',
    role: 'Senior Software Engineer',
    bio: 'Abigail (Abi) is a badass software engineer with 6+ years of experience in the medical, fintech, and automotive industries. She is a fullstack developer extraordinaire but does have a bias toward the backend. Abi enjoys technical deep dives, particularly when they involve the Svelte framework. Her dream is to implant robots in your brain. ',
    img: '../../assets/abigail.jpeg',
    links: [['linkedin', 'https://www.linkedin.com/in/abigail-lovelace/'], ['github', 'https://github.com/ParisPianist196'], ['link', 'https://portfolio.abigaillovelace.com']],
  },
  {
    name: 'Ariel Magyar',
    role: 'Senior Software Engineer',
    bio: 'Ariel is a badass software engineer with 8+ years of experience in the automotive and fintech industries. She is a self-described generalist because she loves software development just as much as people leadership and project management. Her indecisiveness perhaps comes from her creative background where she moonlights as an artist in a local art league. ',
    img: '../../assets/ariel.jpeg',
    links: [['linkedin', 'https://www.linkedin.com/in/ariel-magyar/'], ['github', 'https://github.com/magyara'], ['art', 'https://www.instagram.com/ari.mag.art/']],
  }
];

export const SOCIAL_SVGS = {
  github: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.26 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>',
  linkedin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.5 9.75h2.88V18H5.5V9.75Zm4.83 0h2.76v1.12h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.45 1.91 3.45 4.4V18h-2.88v-7.5c0-1.79-.03-4.09-2.49-4.09-2.5 0-2.88 1.95-2.88 3.96V18H10.33V9.75Z"/></svg>',
  link: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden><path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1 1"/><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1-1"/></svg>',
};
