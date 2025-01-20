import Quiz from '@/components/Quiz/Quiz'
import { quizQuestions } from '@/lib/questions'

interface GamePageProps {
    params: {
        id: string
    }
}

export default function GamePage({ params }: GamePageProps) {
    return (
        <div className='min-h-screen bg-white'>
            <div className='container mx-auto px-4 py-8'>
                <Quiz questions={quizQuestions} quizId={params.id} />
            </div>
        </div>
    )
}
