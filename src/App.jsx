import React from "react";
import AdminNav from "./component/Admin/AdminNav";
import { Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Home/Login";
import Signup from "./pages/Home/Signup";
import Navigation from "./component/Home/Navigation";
import Footer from "./component/General/Footer";

function App() {
  return (
    <div className="">
      <main></main>
      <Routes>
        <Route index element={<AdminNav />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Admin" element={<AdminNav />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
