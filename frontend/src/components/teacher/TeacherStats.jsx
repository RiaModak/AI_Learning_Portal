import { useEffect, useState } from "react";

import {
    BookOpen,
    ClipboardList,
    FileText
} from "lucide-react";

import {
    getTeacherDashboardStats
} from "../../api/api";

function TeacherStats() {

    const [stats, setStats] = useState(null);

    useEffect(() => {

        fetchStats();

    }, []);

    const fetchStats = async () => {

        const response =
            await getTeacherDashboardStats();

        setStats(response.data);

    };

    if (!stats) {

        return <p>Loading...</p>;

    }

    const cards = [

        {
            title: "My Courses",
            value: stats.courses,
            icon: BookOpen
        },

        {
            title: "Assignments",
            value: stats.assignments,
            icon: ClipboardList
        },

        {
            title: "AI Tests",
            value: stats.ai_tests,
            icon: FileText
        }

    ];

    return (

        <div className="grid md:grid-cols-3 gap-4 mb-6">

            {cards.map((card, index) => {

                const Icon = card.icon;

                return (

                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm border p-5"
                    >

                        <Icon
                            size={22}
                            className="text-blue-600 mb-3"
                        />

                        <h2 className="text-2xl font-bold">
                            {card.value}
                        </h2>

                        <p className="text-slate-500">
                            {card.title}
                        </p>

                    </div>

                );

            })}

        </div>

    );

}

export default TeacherStats;