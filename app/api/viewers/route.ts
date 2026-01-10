import { supabase } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Helper function to hash IP address for privacy
function hashIP(ip: string): string {
  return crypto.createHash('sha256').update(ip + process.env.IP_SALT).digest('hex');
}

// Helper function to get client IP
function getClientIP(request: NextRequest): string {
  // Try to get IP from various headers (Vercel, Cloudflare, etc.)
  const forwarded = request.headers.get('x-forwarded-for');
  const real = request.headers.get('x-real-ip');
  const cfConnecting = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (cfConnecting) {
    return cfConnecting;
  }
  if (real) {
    return real;
  }

  return 'unknown';
}

// GET - Fetch total unique viewers count
export async function GET() {
  try {
    const { data, error } = await supabase.rpc('get_unique_viewers_count');

    if (error) throw error;

    return NextResponse.json({ uniqueViewers: data || 0 });
  } catch (error) {
    console.error('Error fetching unique viewers:', error);
    return NextResponse.json({ error: 'Failed to fetch unique viewers' }, { status: 500 });
  }
}

// POST - Track a viewer
export async function POST(request: NextRequest) {
  try {
    const ip = getClientIP(request);
    const ipHash = hashIP(ip);

    const { data, error } = await supabase.rpc('track_viewer', {
      viewer_ip_hash: ipHash
    });

    if (error) throw error;

    // data is an array with one row containing is_new_visitor and total_unique_viewers
    const result = data[0];

    return NextResponse.json({
      isNewVisitor: result.is_new_visitor,
      uniqueViewers: result.total_unique_viewers
    });
  } catch (error) {
    console.error('Error tracking viewer:', error);
    return NextResponse.json({ error: 'Failed to track viewer' }, { status: 500 });
  }
}
