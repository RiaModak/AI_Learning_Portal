import { Trash2 } from "lucide-react";

import {
    deleteCourse
} from "../../api/api";

function CoursesTable({
    courses,
    fetchCourses
}) {
    
    const handleDelete = async (id) => {

        if (!window.confirm("Delete this course?"))
            return;

        try {

            await deleteCourse(id);

            fetchCourses();

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">

            <h2 className="text-xl font-semibold mb-5">

                Existing Courses

            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b">

                        <th className="text-left py-3">
                            #
                        </th>

                        <th className="text-left">
                            Course Name
                        </th>

                        <th className="text-left">
                            Action
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {courses.map((course, index) => (

                        <tr
                            key={course.id}
                            className="border-b"
                        >

                            <td className="py-3">

                                {index + 1}

                            </td>

                            <td>

                                {course.name}

                            </td>

                            <td>

                                <button
                                    onClick={() =>
                                        handleDelete(course.id)
                                    }
                                    className="text-red-600 hover:text-red-800"
                                >

                                    <Trash2 size={18} />

                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default CoursesTable;