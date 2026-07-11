import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import CourseForm from "../components/admin/CourseForm";
import CoursesTable from "../components/admin/CoursesTable";
import AssignTeacher from "../components/admin/AssignTeacher";
import CourseTeachers from "../components/admin/CourseTeachers";

import { getCourses } from "../api/api";
function AdminDashboard() {
    const [courses, setCourses] = useState([]);
    const fetchCourses = async () => {

    const response = await getCourses();

    setCourses(response.data);

};
useEffect(() => {

    fetchCourses();

}, []);
    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-slate-100 min-h-screen">

                <Topbar />

                <div className="p-6">

                    <h1 className="text-3xl font-bold">
                        Admin Dashboard
                    </h1>

                    <p className="text-slate-500 mb-6">
                        Manage Courses and Teachers
                    </p>

                    <CourseForm
    fetchCourses={fetchCourses}
/>

                    <CoursesTable

    courses={courses}

    fetchCourses={fetchCourses}

/>

                    <AssignTeacher

courses={courses}

fetchCourses={fetchCourses}

/>

                    <CourseTeachers

    courses={courses}

    fetchCourses={fetchCourses}

/>

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;