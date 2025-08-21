import React, { useState } from "react";
import { useGetUserQuery } from "../Redux/Api/userApi";
import { AiFillDelete, AiFillEdit, AiOutlineClose } from "react-icons/ai";

export default function User() {
  const {
    data: Users,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useGetUserQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="p-6">
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>{error.message}</h1>}

      {isSuccess && (
        <div className="flex flex-wrap justify-center gap-6">
          {Users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-2xl p-6 w-80 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-gray-800 text-xl font-semibold mb-2">
                {user.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">✉️ {user.email}</p>

              <div className="flex justify-between">
                <button
                  onClick={() => handleEdit(user)}
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition"
                >
                  <AiFillEdit /> Edit
                </button>
                <button
                  onClick={() => alert(`Delete user ${user.id}`)}
                  className="flex items-center gap-2 text-red-500 hover:text-red-700 transition"
                >
                  <AiFillDelete /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-96 p-6 rounded-2xl shadow-lg relative">
            
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <AiOutlineClose size={24} />
            </button>

            <h2 className="text-xl font-semibold mb-4">Edit User</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updatedUser = {
                  id: selectedUser.id,
                  name: e.target.name.value,
                  email: e.target.email.value,
                };
                console.log("Updated User:", updatedUser);
                handleCloseModal();
              }}
            >
              <div className="mb-4">
                <label className="block mb-1 text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={selectedUser.name}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={selectedUser.email}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
