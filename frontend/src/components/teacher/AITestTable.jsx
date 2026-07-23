import { Trash2, Eye } from "lucide-react";
import { deleteAITest } from "../../api/api";
import { useNavigate } from "react-router-dom";
function AITestTable({ aiTests, fetchAITests }) {

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this AI Test?"))
            return;

        try {

            await deleteAITest(id);

            fetchAITests();

        } catch (err) {

            console.log(err);

            alert("Failed to delete AI Test.");

        }

    };
    const navigate = useNavigate();
    const handleView = (docId) => {

    navigate(
        `/teacher/generated-questions/${docId}`
    );

};

    return (

        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">

            <h2 className="text-xl font-bold mb-5">

                AI Generated Tests

            </h2>

            {aiTests.length === 0 ? (

                <p>No AI Tests uploaded.</p>

            ) : (

                aiTests.map((test) => (

                    <div
                        key={test.id}
                        className="border rounded-lg p-4 mb-4 flex justify-between items-center"
                    >

                        <div>

                            <h3 className="font-semibold">

                                {test.title}

                            </h3>

                            <p className="text-slate-500">

                                {test.course_name}

                            </p>

                        </div>

                        <div className="flex gap-3">

                            <button
                                onClick={() => handleView(test.id)}
                                className="text-blue-600 hover:text-blue-800"
                            >

                                <Eye size={18} />

                            </button>

                            <button
                                onClick={() => handleDelete(test.id)}
                                className="text-red-600 hover:text-red-800"
                            >

                                <Trash2 size={18} />

                            </button>

                        </div>

                    </div>

                ))

            )}

        </div>

    );

}

export default AITestTable;