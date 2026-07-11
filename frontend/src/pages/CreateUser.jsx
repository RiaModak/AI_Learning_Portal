import { useState } from "react";
import { createUser } from "../api/api";
import { Link, useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "Student",
    is_active: true,
  });

  const [message, setMessage] = useState("");

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
      await createUser(formData);

      setMessage("User created successfully!");

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (error) {
      console.log(error.response?.data);
      alert("Failed to create user.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start py-10">

      <div className="bg-white rounded-2xl shadow-md w-full max-w-3xl p-8">

        <h1 className="text-3xl font-bold mb-2">
          Create User
        </h1>

        <p className="text-slate-500 mb-8">
          Add a new user to the AI Learning Portal
        </p>

        {message && (
          <div className="mb-6 bg-green-100 text-green-700 p-3 rounded-lg">
            {message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <label className="block mb-1 font-medium">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="block mb-1 font-medium">
                First Name
              </label>

              <input
                type="text"
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Last Name
              </label>

              <input
                type="text"
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />
            </div>

          </div>

          <div>
            <label className="block mb-1 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />
          </div>

          <div>

            <label className="block mb-1 font-medium">
              Role
            </label>

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
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

          <div className="flex gap-4">

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Create User
            </button>

            <Link
              to="/"
              className="bg-gray-200 px-6 py-3 rounded-lg"
            >
              Back
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}

export default CreateUser;