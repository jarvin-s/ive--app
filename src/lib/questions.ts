export interface QuizQuestion {
    id: number;
    language: string;
    question: string;
    options: string[];
    correctAnswer: string;
    category: 'members' | 'songs' | 'facts';
}

export const quizQuestions: QuizQuestion[] = [
    {
        id: 1,
        language: 'en',
        question: 'Who is the leader of IVE?',
        options: ['Yujin', 'Wonyoung', 'Gaeul', 'Liz'],
        correctAnswer: 'Yujin',
        category: 'members',
    },
    {
        id: 2,
        language: 'en',
        question: 'What year did IVE debut?',
        options: ['2021', '2022', '2023', '2024'],
        correctAnswer: '2022',
        category: 'facts',
    },
    {
        id: 3,
        language: 'en',
        question: 'What is the name of the first song released by IVE?',
        options: ['ELEVEN', 'LOVE DIVE', 'HANN (Alone)', 'After LIKE'],
        correctAnswer: 'ELEVEN',
        category: 'songs',
    },
    {
        id: 4,
        language: 'kr',
        question: '아이브의 첫 번째 노래는 무엇인가요?',
        options: ['ELEVEN', 'LOVE DIVE', 'HANN (Alone)', 'After LIKE'],
        correctAnswer: 'ELEVEN',
        category: 'songs',
    },
]
