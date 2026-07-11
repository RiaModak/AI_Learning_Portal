import { useEffect, useState } from "react";
import { updateUser } from "../api/api";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "Student",
    is_active: true,
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      getUser(id);

      setForm({
        username: response.data.username,
        first_name: response.data.first_name,
        last_name: response.data.last_name,
        email: response.data.email,
        password: "",
        role: response.data.role_name,
        is_active: response.data.is_active,
      });

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const data = { ...form };

      // Don't send an empty password
      if (data.password === "") {
        delete data.password;
      }

      updateUser(id, formData);

      alert("User updated successfully.");

      navigate("/");

    } catch (error) {
      console.log(error.response?.data);
      alert("Update failed.");
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border">

        <div className="p-6 border-b">

          <h1 className="text-3xl font-bold">
            Edit User
          </h1>

          <p className="text-slate-500">
            Update user information
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
        >

          <div>

            <label className="block mb-1 font-medium">
              Username
            </label>

            <input
              className="w-full border rounded-lg p-3"
              name="username"
              value={form.username}
              onChange={handleChange}
            />

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>

              <label className="block mb-1 font-medium">
                First Name
              </label>

              <input
                className="w-full border rounded-lg p-3"
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
              />

            </div>

            <div>

              <label className="block mb-1 font-medium">
                Last Name
              </label>

              <input
                className="w-full border rounded-lg p-3"
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
              />

            </div>

          </div>

          <div>

            <label className="block mb-1 font-medium">
              Email
            </label>

            <input
              className="w-full border rounded-lg p-3"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

          </div>

          <div>

            <label className="block mb-1 font-medium">
              New Password
            </label>

            <input
              type="password"
              className="w-full border rounded-lg p-3"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Leave blank to keep current password"
            />

          </div>

          <div>

            <label className="block mb-1 font-medium">
              Role
            </label>

            <select
              className="w-full border rounded-lg p-3"
              name="role"
              value={form.role}
              onChange={handleChange}
            >
              <option>Admin</option>
              <option>Teacher</option>
              <option>Student</option>
            </select>

          </div>

          <div className="flex items-center gap-2">

            <input
              type="checkbox"
              name="is_active"
              checked={form.is_active}
              onChange={handleChange}
            />

            <label>
              Active User
            </label>

          </div>

          <div className="flex gap-3">

            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>

            <Link
              to="/"
              className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditUser;