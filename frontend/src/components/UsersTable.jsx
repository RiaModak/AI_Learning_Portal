import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Search,
  Eye,
  Pencil,
  Trash2,
  ChevronDown
} from "lucide-react";

function UsersTable() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/users/"
      );

      setUsers(response.data);

    } catch (error) {
      console.error(error);

    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border mt-6">
        Loading users...
      </div>
    );
  }

  const filteredUsers = users.filter((user) => {

    const fullName =
      `${user.first_name} ${user.last_name}`;

    const matchesSearch =
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      fullName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      role === "" || user.role === role;

    const matchesStatus =
      status === "" ||
      (status === "active" && user.is_active) ||
      (status === "inactive" && !user.is_active);

    return (
      matchesSearch &&
      matchesRole &&
      matchesStatus
    );
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border mt-6 overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between p-5 border-b">

        <div>
          <h2 className="text-lg font-bold">
            All Users
          </h2>

          <p className="text-sm text-slate-500">
            Manage all users in the system
          </p>
        </div>

        <Link
          to="/create-user"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
        >
          + Create User
        </Link>

      </div>

      {/* Filters */}

      <div className="p-5 flex gap-3 flex-wrap border-b">

        <div className="relative">

          <Search
            size={16}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg w-64"
          />

        </div>

        <div className="relative">

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="appearance-none border rounded-lg px-4 py-2 pr-10"
          >
            <option value="">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </select>

          <ChevronDown
            size={15}
            className="absolute right-3 top-3 text-slate-400"
          />

        </div>

        <div className="relative">

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="appearance-none border rounded-lg px-4 py-2 pr-10"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <ChevronDown
            size={15}
            className="absolute right-3 top-3 text-slate-400"
          />

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-slate-50">

              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Username</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.map((user) => {

              const fullName =
                `${user.first_name} ${user.last_name}`;

              return (

                <tr
                  key={user.id}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="p-4">
                    {user.id}
                  </td>

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                        {user.username.charAt(0).toUpperCase()}
                      </div>

                      <span className="font-medium">
                        {user.username}
                      </span>

                    </div>

                  </td>

                  <td className="p-4">
                    {fullName}
                  </td>

                  <td className="p-4">
                    {user.email}
                  </td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.role === "Admin"
                          ? "bg-purple-100 text-purple-700"
                          : user.role === "Teacher"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {user.role}
                    </span>

                  </td>

                  <td className="p-4">

                    <span
                      className={`font-medium ${
                        user.is_active
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {user.is_active
                        ? "Active"
                        : "Inactive"}
                    </span>

                  </td>

                  <td className="p-4">

                    <div className="flex gap-2">

                      <Link
                        to={`/view-user/${user.id}`}
                        className="p-2 rounded-lg text-blue-600 hover:bg-blue-100"
                      >
                        <Eye size={16}/>
                      </Link>

                      <Link
                        to={`/edit-user/${user.id}`}
                        className="p-2 rounded-lg text-amber-600 hover:bg-amber-100"
                      >
                        <Pencil size={16}/>
                      </Link>

                      <button className="p-2 rounded-lg text-red-600 hover:bg-red-100">
                        <Trash2 size={16}/>
                      </button>

                    </div>

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default UsersTable;