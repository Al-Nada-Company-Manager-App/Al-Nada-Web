import { NextResponse } from 'next/server';

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const dynamic = 'force-static';
export const revalidate = 60;

export async function GET() {
  if (!API_BASE) {
    return NextResponse.json(
      { error: 'NEXT_PUBLIC_API_URL is not set' },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(`${API_BASE}/posts`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch posts' },
        { status: response.status },
      );
    }

    const posts = await response.json();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 },
    );
  }
}