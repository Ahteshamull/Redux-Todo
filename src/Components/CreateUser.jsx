import React from "react";
import { useAddUserMutation } from "../Redux/Api/userApi";
import { useNavigate } from "react-router-dom";


export default function CreateUser() {
    const navigate = useNavigate();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    };
    const [addUser] = useAddUserMutation();
  const handleSubmit = async(e) => {
    e.preventDefault();
      await addUser(user);
      navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Create User
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Name</label>
            <input
              type="text"
              name="name"
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
