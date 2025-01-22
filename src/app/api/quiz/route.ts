import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { useLocale } from 'next-intl';

// export function getLocale() {
//     const currentLocale = useLocale()

// }
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

export async function POST(request: Request) {
    const supabase = await createClient();
    const { score, quizId } = await request.json();

    const { error } = await supabase
        .from('quiz_scores')
        .insert([{ score, quiz_id: quizId }]);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Score submitted successfully' });
}