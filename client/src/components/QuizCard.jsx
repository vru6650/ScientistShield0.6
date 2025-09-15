// client/src/components/QuizCard.jsx
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';

const QuizCard = ({ quiz }) => (
    <Link to={`/quizzes/${quiz.slug}`} className="block h-full">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col transform hover:-translate-y-1">
            <div className="p-4 flex flex-col flex-grow items-center justify-center text-center">
                <FaQuestionCircle className="text-5xl text-primary dark:text-primary mb-4" />
                <h2 className="text-xl font-bold line-clamp-2 text-text dark:text-white mb-2">{quiz.title}</h2>
                {quiz.description && (
                    <p className="text-muted dark:text-muted text-sm mt-1 line-clamp-3 flex-grow mb-3">
                        {quiz.description}
                    </p>
                )}
                <div className="mt-auto">
                    <span className="inline-block px-3 py-1 bg-primary dark:bg-primary text-primary dark:text-primary rounded-full text-xs font-medium uppercase tracking-wide">
                        {quiz.category || 'General'}
                    </span>
                    <p className="text-sm text-muted dark:text-muted mt-2">
                        {quiz.questions.length} Questions
                    </p>
                </div>
            </div>
            <div className="p-3 bg-neutral dark:bg-neutral border-t border-gray-200 dark:border-gray-600">
                <button className="w-full text-center text-primary dark:text-primary font-semibold hover:underline">
                    Start Quiz
                </button>
            </div>
        </div>
    </Link>
);

export default QuizCard;