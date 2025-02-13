import { fetchQuestionbyId, fetchAnswers } from "@/lib/data";
import { HashtagIcon } from "@heroicons/react/24/outline";
import { notFound } from "next/navigation";
import { Answer } from "@/components/Answer";

type PageProps = {
    params: {
        id: string;
    };
}
export default async function Page({ params }: PageProps) {
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
        <Answer questionId={id} />
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
    </div>
    );
}
