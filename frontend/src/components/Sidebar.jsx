import {
  LayoutDashboard,
  Users,
  BookOpen,
  ClipboardList,
  FileCheck,
  Shield
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white">

      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">

          <div className="bg-blue-600 p-2 rounded-lg">
            <Shield size={18} />
          </div>

          <div>
            <h2 className="font-bold">
              AI Learning
            </h2>

            <p className="text-xs text-slate-400">
              Super Admin
            </p>
          </div>

        </div>
      </div>

      <nav className="p-4 space-y-2">

        <button className="flex items-center gap-3 w-full p-3 rounded bg-blue-600">
          <LayoutDashboard size={18}/>
          Dashboard
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded hover:bg-slate-800">
          <Users size={18}/>
          Users
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded hover:bg-slate-800">
          <BookOpen size={18}/>
          Courses
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded hover:bg-slate-800">
          <ClipboardList size={18}/>
          Assignments
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded hover:bg-slate-800">
          <FileCheck size={18}/>
          Tests
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;