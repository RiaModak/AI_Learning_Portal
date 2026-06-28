import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ViewUser() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/users/${id}/`
      );

      setUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10 text-xl">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-10 text-red-600">
        User not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10">

      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-2xl shadow-sm border">

          <div className="p-6 border-b">

            <h1 className="text-3xl font-bold">
              User Details
            </h1>

            <p className="text-slate-500 mt-1">
              Complete information about this user
            </p>

          </div>

          <div className="p-8 grid grid-cols-2 gap-6">

            <Info
              title="Username"
              value={user.username}
            />

            <Info
              title="Email"
              value={user.email}
            />

            <Info
              title="First Name"
              value={user.first_name || "-"}
            />

            <Info
              title="Last Name"
              value={user.last_name || "-"}
            />

            <Info
              title="Role"
              value={user.role_name}
            />

            <Info
              title="Status"
              value={user.is_active ? "Active" : "Inactive"}
            />

            <Info
              title="Joined"
              value={new Date(user.date_joined).toLocaleDateString()}
            />

          </div>

          <div className="p-6 border-t flex gap-3">

            <Link
              to="/"
              className="bg-slate-200 px-5 py-2 rounded-lg hover:bg-slate-300"
            >
              Back
            </Link>

            <Link
              to={`/edit-user/${user.id}`}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Edit User
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

function Info({ title, value }) {
  return (
    <div>

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="font-semibold text-lg mt-1">
        {value}
      </p>

    </div>
  );
}

export default ViewUser;