import { useEffect, useState } from "react";
import { getTeachers, assignTeacher } from "../../api/api";

function AssignTeacher({ courses, fetchCourses }) {
    const [teachers, setTeachers] = useState([]);
    const [teacherId, setTeacherId] = useState("");
    const [courseId, setCourseId] = useState("");

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        const response = await getTeachers();
        setTeachers(response.data);
    };

    const handleAssign = async () => {
        if (!teacherId || !courseId) {
            alert("Select both teacher and course.");
            return;
        }

        await assignTeacher({
            teacher_id: teacherId,
            course_id: courseId
        });

        alert("Teacher Assigned!");
        fetchCourses();
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
            <h2 className="text-xl font-bold mb-5">Assign Teacher</h2>
            
            {/* Teacher Selection */}
            <select
                className="border rounded-lg p-2 w-full mb-4"
                value={teacherId}
                onChange={(e) => {
                    setTeacherId(e.target.value);
                    setCourseId(""); // clear course when teacher changes
                }}
                >
                <option value="">Select Teacher</option>
                {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                    {teacher.username}
                    </option>
                ))}
            </select>

            {/* Course Selection */}
            <select
                className="border rounded-lg p-2 w-full mb-5"
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
            >
                <option value="">Select Course</option>
                {courses
                .filter(
                    (course) =>
                        !course.teachers.some(
                            (teacher) => teacher.id === Number(teacherId)
                        )
                )
                .map((course) => (
                    <option
                        key={course.id}
                        value={course.id}
                    >
                        {course.name}
                    </option>
            ))}
            </select>

            <button
                onClick={handleAssign}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
                Assign Teacher
            </button>
        </div>
    );
}

export default AssignTeacher;