import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET(request: Request) {
    const supabase = await createClient();
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    const { data: pastQuizzes, error: pastQuizzesError } = await supabase
        .from('quiz_sessions')
        .select('session_id, score, current_question, completed, created_at')
        .order('created_at', { ascending: false });

    if (pastQuizzesError) {
        return NextResponse.json({ error: pastQuizzesError.message }, { status: 500 });
    }

    return NextResponse.json({ pastQuizzes });
}
