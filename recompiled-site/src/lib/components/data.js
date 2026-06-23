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
    bio: 'Backend, queues, and the boring middle of the stack. Has shipped the same migration three times at three companies. Will tell you about all of them.',
    img: '../../assets/abigail.jpeg',
    links: [['twitter', '#'], ['github', '#'], ['link', '#']],
  },
  {
    name: 'Ariel Magyar',
    role: 'Senior Software Engineer',
    bio: 'Frontend, performance, and the loud opinions. Believes the page should be done loading by the time you reach for the trackpad.',
    img: '../../assets/ariel.jpeg',
    links: [['twitter', '#'], ['github', '#'], ['link', '#']],
  },
];

export const SOCIAL_SVGS = {
  twitter: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.244 2H21.5l-7.5 8.59L23 22h-6.91l-4.81-6.29L5.69 22H2.43l8.01-9.17L1.5 2h7.09l4.37 5.78L18.244 2Zm-1.21 18h1.9L7.05 3.92H5.02L17.034 20Z"/></svg>',
  github: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.26 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>',
  link: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden><path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1 1"/><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1-1"/></svg>',
};
