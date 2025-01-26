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

    return NextResponse.json({ questions });
}

export async function PUT(request: Request) {
    const supabase = await createClient();
    const { quizId, currentQuestion, score, completed, answerHistory } = await request.json();

    const { data: existingSession } = await supabase.from('quiz_sessions').select('*').eq('session_id', quizId).single();

    if (!existingSession) {
        return new Response('Session not found', { status: 404 });
    }

    const { data: updatedSession, error } = await supabase.from('quiz_sessions').update({
        current_question: currentQuestion ?? existingSession.current_question,
        score: score ?? existingSession.score,
        completed: completed ?? existingSession.completed,
        answer_history: answerHistory ?? existingSession.answer_history,
    }).eq('session_id', quizId).select();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ updatedSession });
}