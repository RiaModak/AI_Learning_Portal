import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import TeacherStats from "../components/teacher/TeacherStats";
import MyCourses from "../components/teacher/MyCourses";

import {
    getTeacherCourses
} from "../api/api";

function TeacherDashboard() {

    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {

    const response = await getTeacherCourses();

    console.log(response.data);

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
                        Teacher Dashboard
                    </h1>

                    <p className="text-slate-500 mb-6">
                        Manage Courses, Assignments and AI Tests
                    </p>

                    {/*<TeacherStats />*/}

                    <MyCourses
                        courses={courses}
                    />

                </div>

            </div>

        </div>

    );

}

export default TeacherDashboard;