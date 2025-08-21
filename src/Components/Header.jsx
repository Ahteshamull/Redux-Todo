import React, { useState } from "react";
import { AiOutlineUser, AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  const [ setIsModalOpen] = useState(false);


  return (
    <>
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <Link to={"/"} className="text-2xl hover:text-red-700 font-bold tracking-wide">
            User <span className="hover:text-black">Dashboard</span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to={"/create-user"}
              className="flex items-center gap-2 hover:text-gray-200 transition"
            >
              <IoMdPersonAdd size={20} /> Create User
            </Link>
         
          </nav>
        </div>
      </header>
    </>
  );
}
