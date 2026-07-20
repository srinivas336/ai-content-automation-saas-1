import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Demo seed loaded',
    posts: [
      {
        id: 'seed-1',
        platform: 'Instagram',
        topic: 'AI for creators',
        tone: 'Friendly',
        content: 'AI is making everyday content creation faster and easier for creators everywhere. Start small, iterate often, and let the tools do the heavy lifting.',
      },
      {
        id: 'seed-2',
        platform: 'LinkedIn',
        topic: 'Productivity with AI',
        tone: 'Professional',
        content: 'Teams that use AI thoughtfully are moving faster while improving consistency across their content lifecycle.',
      },
    ],
  });
}
