import { Trash2 } from "lucide-react";
import { deleteAssignment } from "../../api/api";

function AssignmentTable({ assignments, fetchAssignments }) {

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this assignment?"))
            return;

        try {

            await deleteAssignment(id);

            fetchAssignments();

        } catch (err) {

            console.log(err);

            alert("Failed to delete assignment.");

        }

    };

    return (

        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">

            <h2 className="text-xl font-bold mb-5">

                Assignments

            </h2>

            {assignments.length === 0 ? (

                <p>No assignments uploaded.</p>

            ) : (

                assignments.map((assignment) => (

                    <div
                        key={assignment.id}
                        className="border rounded-lg p-4 mb-4 flex justify-between items-center"
                    >

                        <div>

                            <h3 className="font-semibold">

                                {assignment.title}

                            </h3>

                            <p className="text-slate-500">

                                {assignment.course_name}

                            </p>

                            <p>

                                Due: {assignment.due_date}

                            </p>

                        </div>

                        <button
                            onClick={() =>
                                handleDelete(assignment.id)
                            }
                            className="text-red-600 hover:text-red-800"
                        >

                            <Trash2 size={18} />

                        </button>

                    </div>

                ))

            )}

        </div>

    );

}

export default AssignmentTable;