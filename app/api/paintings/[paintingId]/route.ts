import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

// GET - Fetch likes for a specific painting
export async function GET(
  request: Request,
  { params }: { params: { paintingId: string } }
) {
  try {
    const { paintingId } = params;

    const { data, error } = await supabase
      .from('painting_likes')
      .select('likes')
      .eq('painting_id', paintingId)
      .single();

    if (error && error.code !== 'PGRST116') {
      // PGRST116 is "not found" error
      throw error;
    }

    return NextResponse.json({ likes: data?.likes || 0 });
  } catch (error) {
    console.error('Error fetching painting likes:', error);
    return NextResponse.json({ error: 'Failed to fetch likes' }, { status: 500 });
  }
}

// POST - Increment likes for a specific painting
export async function POST(
  request: Request,
  { params }: { params: { paintingId: string } }
) {
  try {
    const { paintingId } = params;

    // First, try to get the current count
    const { data: existing, error: fetchError } = await supabase
      .from('painting_likes')
      .select('likes')
      .eq('painting_id', paintingId)
      .maybeSingle();

    if (fetchError) {
      console.error('Error fetching current likes:', fetchError);
      throw fetchError;
    }

    if (existing) {
      // Update existing record
      const newLikes = existing.likes + 1;
      const { data, error } = await supabase
        .from('painting_likes')
        .update({ likes: newLikes })
        .eq('painting_id', paintingId)
        .select('likes')
        .single();

      if (error) {
        console.error('Error updating likes:', error);
        throw error;
      }

      return NextResponse.json({ likes: data.likes });
    } else {
      // Create new record with 1 like
      const { data, error } = await supabase
        .from('painting_likes')
        .insert({ painting_id: paintingId, likes: 1 })
        .select('likes')
        .single();

      if (error) {
        console.error('Error inserting new record:', error);
        throw error;
      }

      return NextResponse.json({ likes: data.likes });
    }
  } catch (error) {
    console.error('Error incrementing painting likes:', error);
    return NextResponse.json({ error: 'Failed to increment likes', details: error }, { status: 500 });
  }
}
