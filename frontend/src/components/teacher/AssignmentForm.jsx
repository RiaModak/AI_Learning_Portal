import { useState } from "react";
import { createAssignment } from "../../api/api";

function AssignmentForm({ courses, fetchAssignments }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [courseId, setCourseId] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("due_date", dueDate);
        formData.append("course", courseId);
        formData.append("assignment_file", file);

        try {

            await createAssignment(formData);

            alert("Assignment uploaded!");

            setTitle("");
            setDescription("");
            setDueDate("");
            setCourseId("");
            setFile(null);

            fetchAssignments();

        } catch (err) {

            console.log(err);

            alert("Failed to upload assignment.");

        }

    };

    return (

        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">

            <h2 className="text-xl font-bold mb-5">
                Upload Assignment
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                    className="border rounded-lg p-2 w-full"
                    required
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                    className="border rounded-lg p-2 w-full"
                    required
                />

                <select
                    value={courseId}
                    onChange={(e) =>
                        setCourseId(e.target.value)
                    }
                    className="border rounded-lg p-2 w-full"
                    required
                >
                    <option value="">
                        Select Course
                    </option>

                    {courses.map((course) => (
                        <option
                            key={course.id}
                            value={course.id}
                        >
                            {course.name}
                        </option>
                    ))}

                </select>

                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) =>
                        setDueDate(e.target.value)
                    }
                    className="border rounded-lg p-2 w-full"
                    required
                />

                <input
                    type="file"
                    onChange={(e) =>
                        setFile(e.target.files[0])
                    }
                    className="border rounded-lg p-2 w-full"
                    required
                />

                <button
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                >
                    Upload Assignment
                </button>

            </form>

        </div>

    );

}

export default AssignmentForm;