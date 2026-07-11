import { useState, useEffect } from "react";
import { createCourse, updateCourse } from "../../api/api";

function CourseForm({ fetchCourses, editingCourse, clearEditing }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingCourse) {
      setName(editingCourse.name);
      setDescription(editingCourse.description);
    } else {
      setName("");
      setDescription("");
    }
  }, [editingCourse]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      if (editingCourse) {
        await updateCourse({
          id: editingCourse.id,
          name,
          description,
        });
        alert("Course Updated Successfully");
      } else {
        await createCourse({ name, description });
        alert("Course Added Successfully");
      }

      await fetchCourses();
      setName("");
      setDescription("");
      if (clearEditing) clearEditing(); // optional reset callback
    } catch (error) {
      console.error(error);
      alert("Unable to save course");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
      <h2 className="text-xl font-semibold mb-5">
        {editingCourse ? "Edit Course" : "Add New Course"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Course Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />

        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          {editingCourse ? "Update Course" : "Add Course"}
        </button>
      </form>
    </div>
  );
}

export default CourseForm;
