import { useEffect, useState } from "react";
import { getDashboardStats } from "../api/api";

import {
  Users,
  GraduationCap,
  BookOpen,
  ClipboardList,
  FileCheck
} from "lucide-react";

function StatsCards() {

  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await getDashboardStats();
      setStats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!stats) {
    return <p>Loading stats...</p>;
  }

  const cards = [
    {
      title: "Total Users",
      value: stats.total_users,
      icon: Users
    },
    {
      title: "Teachers",
      value: stats.teachers,
      icon: GraduationCap
    },
    {
      title: "Students",
      value: stats.students,
      icon: Users
    },
    {
      title: "Courses",
      value: stats.courses,
      icon: BookOpen
    },
    {
      title: "Assignments",
      value: stats.assignments,
      icon: ClipboardList
    },
    {
      title: "Tests",
      value: stats.tests,
      icon: FileCheck
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {cards.map((card, index) => {

        const Icon = card.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-xl border p-5 shadow-sm"
          >
            <Icon
              size={22}
              className="text-blue-600 mb-3"
            />

            <h2 className="text-2xl font-bold">
              {card.value}
            </h2>

            <p className="text-slate-500 text-sm">
              {card.title}
            </p>

          </div>
        );
      })}
    </div>
  );
}

export default StatsCards;