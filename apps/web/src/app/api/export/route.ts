import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { content, format } = await request.json();

    if (!content) {
      return NextResponse.json({ error: 'Content required' }, { status: 400 });
    }

    const payload = {
      txt: content,
      md: `# Export\n\n${content}`,
      json: JSON.stringify({ content }, null, 2),
      html: `<html><body><pre>${content}</pre></body></html>`,
    };

    return NextResponse.json({
      format,
      content: payload[format as keyof typeof payload] || content,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Export failed' }, { status: 500 });
  }
}
