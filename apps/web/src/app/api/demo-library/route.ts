import { NextResponse } from 'next/server';
import { demoPosts } from '@/lib/demo-data';

export async function GET() {
  return NextResponse.json(demoPosts);
}
