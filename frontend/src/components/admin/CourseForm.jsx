import { useState } from "react";
import { createCourse } from "../../api/api";

function CourseForm({ fetchCourses }) {

    const [name, setName] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!name.trim()) return;

        try {

            await createCourse({
    name: name,
    description: ""
});

await fetchCourses();

alert("Course Added Successfully");

setName("");

        }

        catch (error) {

            console.log(error);

            alert("Unable to add course");

        }

    };

    return (

        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">

            <h2 className="text-xl font-semibold mb-5">
                Add New Course
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    type="text"
                    placeholder="Course Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2"
                />

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                >
                    Add Course
                </button>

            </form>

        </div>

    );

}

export default CourseForm;