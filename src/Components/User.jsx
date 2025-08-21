import React, { useState } from "react";
import { useDeleteUserMutation, useGetUsersQuery } from "../Redux/Api/userApi";
import { AiFillDelete, AiFillEdit, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function User() {
  const {
    data: Users,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useGetUsersQuery();


  const [deleteUser] = useDeleteUserMutation();


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
                <Link
                  to={`/edit-user/${user.id}`}
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition"
                >
                  <AiFillEdit /> Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="flex items-center gap-2 text-red-500 hover:text-red-700 transition"
                >
                  <AiFillDelete /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
