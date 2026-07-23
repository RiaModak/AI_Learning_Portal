import { useState } from "react";
import { uploadAITest } from "../../api/api";

function UploadAITest({ courses, fetchAITests }) {

    const [title, setTitle] = useState("");
    const [courseId, setCourseId] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("course", courseId);
        formData.append("uploaded_file", file);

        try {

            await uploadAITest(formData);

            alert("AI Test uploaded successfully!");

            setTitle("");
            setCourseId("");
            setFile(null);

            fetchAITests();

        } catch (err) {

            console.log(err);

            alert("Upload failed.");

        }

    };

    return (

        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">

            <h2 className="text-xl font-bold mb-5">
                Upload AI Test
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    type="text"
                    placeholder="Test Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border rounded-lg p-2 w-full"
                    required
                />

                <select
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
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
                    type="file"
                    accept=".doc,.docx"
                    onChange={(e) =>
                        setFile(e.target.files[0])
                    }
                    className="border rounded-lg p-2 w-full"
                    required
                />

                <button
                    className="bg-purple-600 text-white px-5 py-2 rounded-lg"
                >
                    Upload AI Test
                </button>

            </form>

        </div>

    );

}

export default UploadAITest;