import { removeTeacher } from "../../api/api";
import { Trash2 } from "lucide-react";
function CourseTeachers({ courses, fetchCourses }) {
  const handleRemove = async (teacherId, courseId) => {
    if (!window.confirm("Remove this teacher?")) return;

    try {
      await removeTeacher({
        teacher_id: teacherId,
        course_id: courseId,
      });
      fetchCourses();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
      <h2 className="text-xl font-bold mb-5">Courses & Teachers</h2>

      {courses.map((course) => (
        <div key={course.id} className="border rounded-lg p-4 mb-5">
          <h3 className="text-lg font-semibold mb-3">{course.name}</h3>

          {course.teachers.length === 0 ? (
            <p className="text-slate-500">No teachers assigned.</p>
          ) : (
            course.teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="flex justify-between items-center border rounded p-3 mb-2"
              >
                <span>{teacher.username}</span>
                <button
                                    onClick={() =>
                                        handleDelete(course.id)
                                    }
                                    className="text-red-600 hover:text-red-800"
                                >

                                    <Trash2 size={18} />

                </button>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export default CourseTeachers;
