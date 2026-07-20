import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    credits: 100,
    plan: 'Pro',
    usage: 12,
  });
}
