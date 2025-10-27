  import { NextRequest, NextResponse } from 'next/server';

  export async function GET(request: NextRequest, { params }: { params: { slug: string[] } }) {
    const { slug } = params;
    const path = slug.join('/');
    const url = `https://havmorice-mvp-2-production.up.railway.app/${path}`;
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data);
  }

  export async function POST(request: NextRequest, { params }: { params: { slug: string[] } }) {
    const { slug } = params;
    const path = slug.join('/');
    const url = `https://havmorice-mvp-2-production.up.railway.app/${path}`;
    const body = await request.json();
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data);
  }