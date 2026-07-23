import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGeneratedQuestions } from "../api/api";

function GeneratedQuestions() {

    const { docId } = useParams();

    const [questions, setQuestions] = useState({
        mcqs: [],
        long_answers: [],
    });

    useEffect(() => {

        fetchQuestions();

    }, []);

    const fetchQuestions = async () => {

        const response =
            await getGeneratedQuestions(docId);

        setQuestions(response.data);

    };

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold mb-8">

                Generated Questions

            </h1>

            <h2 className="text-2xl font-semibold mb-4">

                MCQs

            </h2>

            {questions.mcqs.map((question, index) => (

                <div
                    key={index}
                    className="border rounded-lg p-4 mb-4"
                >

                    <h3 className="font-semibold mb-3">

                        {index + 1}. {question.question}

                    </h3>

                    <p>A. {question.option_a}</p>
                    <p>B. {question.option_b}</p>
                    <p>C. {question.option_c}</p>
                    <p>D. {question.option_d}</p>

                    <p className="mt-3 text-green-600">

                        Answer:
                        {" "}
                        {question.answer}

                    </p>

                </div>

            ))}

            <h2 className="text-2xl font-semibold mt-10 mb-4">

                Descriptive Questions

            </h2>

            {questions.long_answers.map((question, index) => (

                <div
                    key={index}
                    className="border rounded-lg p-4 mb-4"
                >

                    <h3 className="font-semibold">

                        {index + 1}. {question.question}

                    </h3>

                    <p className="mt-2 text-green-600">

                        Answer:
                        {" "}
                        {question.answer}

                    </p>

                </div>

            ))}

        </div>

    );

}

export default GeneratedQuestions;