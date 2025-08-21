import React from "react";
import User from "./Components/user";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<User />} />

        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/edit-user/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}
