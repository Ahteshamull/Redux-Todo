import React from "react";
import User from "./Components/user";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./Components/CreateUser";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<User />} />
        
        <Route path="/create-user" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
}
