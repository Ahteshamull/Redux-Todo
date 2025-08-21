import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useGetUserQuery, useUpdateUserMutation } from "../Redux/Api/userApi";

export default function UpdateUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = React.useState({
    id: id,
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { data } = useGetUserQuery(id);
  React.useEffect(() => {
    if (data) {
      setUser({
        ...user,
        name: data.name,
        email: data.email,
      });
    }
  }, [data]);
  const [updateUser] = useUpdateUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user);
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Update User
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Enter name"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg shadow-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
