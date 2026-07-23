import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import TeacherStats from "../components/teacher/TeacherStats";
import MyCourses from "../components/teacher/MyCourses";
import AssignmentTable from "../components/teacher/AssignmentTable";
import AssignmentForm from "../components/teacher/AssignmentForm";
import UploadAITest from "../components/teacher/UploadAITest";
import AITestTable from "../components/teacher/AITestTable";

import {
    getTeacherCourses,
    getTeacherAssignments,
    getAITests
} from "../api/api";

function TeacherDashboard() {

    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {

    const response = await getTeacherCourses();

    console.log(response.data);

    setCourses(response.data);
};
    const [assignments, setAssignments] = useState([]);
    const [aiTests, setAITests] = useState([]);

    const fetchAssignments = async () => {

    const response =
        await getTeacherAssignments();

    setAssignments(response.data);

};
    const fetchAITests = async () => {

    const response = await getAITests();

    setAITests(response.data);

    };
        useEffect(() => {

        fetchCourses();
        fetchAssignments();
        fetchAITests();
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

                    <TeacherStats />

                    <MyCourses
                        courses={courses}
                    />
                    <AssignmentForm
                        courses={courses}
                        fetchAssignments={fetchAssignments}
                    />
                    <AssignmentTable
                        assignments={assignments}
                        fetchAssignments={fetchAssignments}
                    />
                    <UploadAITest
                        courses={courses}
                        fetchAITests={fetchAITests}
                    />
                    <AITestTable
                        aiTests={aiTests}
                        fetchAITests={fetchAITests}
                    />
                </div>

            </div>

        </div>

    );

}

export default TeacherDashboard;