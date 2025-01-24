import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET(request: Request) {
    const supabase = await createClient();
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';

    const { data: questions, error } = await supabase
        .from('quiz_questions')
        .select('*')
        .eq('language', locale);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(questions);
}

export async function PUT(request: Request) {
    const supabase = await createClient();
    const { score, quizId, currentQuestion, completed } = await request.json();

    const { data: existingSession, error: fetchError } = await supabase
        .from('quiz_sessions')
        .select('*')
        .eq('session_id', quizId)
        .single();

    if (fetchError) {
        return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    const { error: sessionError } = await supabase
        .from('quiz_sessions')
        .update({
            score: score ?? existingSession.score,
            current_question: currentQuestion ?? existingSession.current_question,
            completed: completed ?? existingSession.completed
        })
        .eq('session_id', quizId);

    if (sessionError) {
        return NextResponse.json({ error: sessionError.message }, { status: 500 });
    }

    if (currentQuestion === null) {
        const { error: scoreError } = await supabase
            .from('quiz_scores')
            .insert([{ score, quiz_id: quizId }]);

        if (scoreError) {
            return NextResponse.json({ error: scoreError.message }, { status: 500 });
        }
    }

    return NextResponse.json({ message: 'Progress saved successfully' });
}