import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

// GET - Fetch current likes
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('site_stats')
      .select('likes')
      .eq('id', 1)
      .single();

    if (error) throw error;

    return NextResponse.json({ likes: data?.likes || 0 });
  } catch (error) {
    console.error('Error fetching likes:', error);
    return NextResponse.json({ error: 'Failed to fetch likes' }, { status: 500 });
  }
}

// POST - Increment likes
export async function POST() {
  try {
    // Increment the likes count
    const { data, error } = await supabase.rpc('increment_likes');

    if (error) throw error;

    return NextResponse.json({ likes: data });
  } catch (error) {
    console.error('Error incrementing likes:', error);
    return NextResponse.json({ error: 'Failed to increment likes' }, { status: 500 });
  }
}
