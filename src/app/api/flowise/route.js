// src/app/api/flowise/route.js

import { NextResponse } from 'next/server';
import { getFlowiseResponse } from '../../flowiseService';

export async function POST(request) {
  const { query } = await request.json();

  try {
    const data = await getFlowiseResponse({ question: query });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
