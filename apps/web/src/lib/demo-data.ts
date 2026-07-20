export type DemoPost = {
  id: string;
  platform: string;
  topic: string;
  tone: string;
  content: string;
  createdAt: string;
  favorite: boolean;
  archived: boolean;
};

export const demoPosts: DemoPost[] = [
  {
    id: 'post-1',
    platform: 'Instagram',
    topic: 'AI productivity habits',
    tone: 'Friendly',
    content: 'Small AI habits can create a huge productivity leap. Start with one workflow and improve it every week. ✨',
    createdAt: '2026-07-18T10:00:00.000Z',
    favorite: true,
    archived: false,
  },
  {
    id: 'post-2',
    platform: 'LinkedIn',
    topic: 'Launch strategy',
    tone: 'Professional',
    content: 'A better launch plan starts with clarity, audience insight, and a repeatable content loop.',
    createdAt: '2026-07-16T08:00:00.000Z',
    favorite: false,
    archived: false,
  },
  {
    id: 'post-3',
    platform: 'X (Twitter)',
    topic: 'Founder learnings',
    tone: 'Persuasive',
    content: 'Great products are built by shipping consistently and listening carefully to the audience.',
    createdAt: '2026-07-12T12:30:00.000Z',
    favorite: false,
    archived: true,
  },
];
