import React from "react";
import { useGetUserQuery } from "../Redux/Api/userApi";

export default function User() {
  const {
    data: Users,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useGetUserQuery();

  return (
    <>
      <div>
        {isLoading && <h1>Loading...</h1>}
        {isError && <h1> {error.message}</h1>}
        {isSuccess &&
          Users.map((user) => {
            return (
              <div key={user.id} className="bg-blue-500 p-4 m-2 rounded">
                <h2 className="text-white text-lg">Name:{user.name}</h2>
                <p className="text-white">Email: {user.email}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}
