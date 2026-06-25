import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatsCards from "../components/StatsCards";
import UsersTable from "../components/UsersTable";

function SuperAdminDashboard() {

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">

        <Topbar />

        <div className="p-6">

          <h1 className="text-3xl font-bold mb-2">
            System Overview
          </h1>

          <p className="text-slate-500 mb-6">
            AI Learning Portal Dashboard
          </p>

          <StatsCards />

          <UsersTable />

        </div>

      </div>

    </div>
  );
}

export default SuperAdminDashboard;