import { Bell, Plus } from "lucide-react";

function Topbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">

      <div>
        <p className="text-sm text-slate-500">
          Welcome back,
        </p>

        <h2 className="font-semibold">
          Super Admin
        </h2>
      </div>

      <div className="flex items-center gap-4">

        <button className="p-2 rounded hover:bg-slate-100">
          <Bell size={18}/>
        </button>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Plus size={16}/>
          Create User
        </button>

      </div>

    </header>
  );
}

export default Topbar;