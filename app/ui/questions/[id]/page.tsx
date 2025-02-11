import { fetchQuestionbyId, fetchAnswers } from "@/lib/data";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { Answer, Question } from "@/lib/definitions";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const question = await fetchQuestionbyId(id);
    const answers = await fetchAnswers(id);
    
    if (!question) {
        return <div>Question not found</div>;
    }

    return (
    <div>
        <h1 className="text-3xl font-black flex items-center">
            <HashtagIcon className="h-6 w-6 mr-2" /> {question.title}
        </h1>
        <div className="mt-4">
            <h2 className="text-2xl">Answers:</h2>
            {answers.length === 0 ? (
                <p>No answers yet</p>
            ) : (
            <ul>
                {answers.map((answer) => (
                    <li key={answer.id} className="mb-4">
                        <div className="p-4 border rounded">
                            <p>{answer.answer}</p>
                        </div>
                    </li>
                ))}
            </ul>
        )}
    </div>
    
    <div className="mt-4">
        <form>
            <textarea placeholder="Submit your answer..." rows={5} className="w-full p-2 border rounded" />
            <button type="submit" className="mt-2 px-4 py-2 rounded">
                Submit Answer
            </button>
        </form>
    </div>
    </div>
    );
}
